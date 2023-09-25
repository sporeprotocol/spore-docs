---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating your first spore from scratch


This step-by-step guide will help you create your first spore on CKB testnet using the SDK of Spore Protocol. To follow along, you should be familiar with basic TypeScript and know how to install and configure Node.js dev environment.

### Tools You Need

- An IDE/Editor that supports TypeScript
- [Node.js](https://nodejs.dev/en/learn/) development environment
- A package manager such as [yarn](https://classic.yarnpkg.com/lang/en/docs/getting-started/))

### Project Ingredients

- A CKB testnet address and its private key
- CKBytes testnet tokens from the [faucet](https://faucet.nervos.org/)
- The content you’d like to store on-chain

## Gather Your Ingredients

### 1. Create a CKB Address

#### Method 1
You can use this generator tool to create a CKB testnet address.
#### Method 2
You can explore your options in the land of CKB Wallets.
#### Method 3
To create an account via ckb-cli, you need to use a testnet RPC node, make sure you have [git](https://git-scm.com/downloads) and [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) installed. Then, in your terminal, run the following commands to install ckb-cli:

```bash
git clone https://github.com/nervosnetwork/ckb-cli.git
cd ckb-cli
cargo install --path . -f --locked
```

Create a CKB account and note down the testnet address (highlighted for you in the output)

<Tabs>
<TabItem value="bash" label="Command">

```bash
export API_URL=https://testnet.ckb.dev
ckb-cli account new
```

</TabItem>
<TabItem value="JSON" label="Response">

```JSON
address:
  mainnet: ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqgadtxqw0g0ucq743k75es2dmjj64methsj4w9a6
  testnet: ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqgadtxqw0g0ucq743k75es2dmjj64methsu892hz
address(deprecated):
  mainnet: ckb1qyqp66kvqu7slespatrdafnq5mh994thjh0qkv9xfu
      // highlight-next-line
  testnet: ckt1qyqp66kvqu7slespatrdafnq5mh994thjh0qtfme9q
lock_arg: 0x1d6acc073d0fe601eac6dea660a6ee52d57795de
lock_hash: 0xe9356d7c82ff1d26002ce7b74d0ed027064031a0bb38d84d84682d21d39e492c
```
</TabItem>
</Tabs>

Get your private key with the following command by replacing `<lock-arg>` with your lock_arg ☝ and `<extended-privkey-path>` with where you want the key to be stored on your device. We’ll need it later when constructing the transaction.

<Tabs>
<TabItem value="bash" label="Command">

```bash
ckb-cli account export --lock-arg <lock-arg> --extended-privkey-path <extended-privkey-path>
```

</TabItem>
<TabItem value="JSON" label="Output">

```JSON
// highlight-next-line
c153ee57dc8ae3dac3495c828d6f8c3fef6b1d0c74fc31101c064137b3269d6d
94547dadd76c2bb650de1b1d69dbc634760e90e76b68500377853492abec5619
```
</TabItem>
</Tabs>

When you open your exported file, you will find 2 stings as the output, **the top one will be your private key**, make sure to add **0x** in front of it when constructing the transaction.

For a more detailed guide on ckb-cli setup and interaction, take a peek at the **[ckb-cli GitHub](https://github.com/nervosnetwork/ckb-cli)**.

### 2. Get Some CKBytes

You'll need to reserve some CKBytes to mint your spore on-chain, 

1. Head over to the **[faucet](https://faucet.nervos.org/)** 
2. Input your CKB Testnet Address for some testnet tokens

### 3. Pick what to mint as spore

Choose your digital ingredient – an image, video, text or something else. Check and note down the [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) of your content (e.g., **`image/png`**). Just keep it under 500KB for a successful mint.

---

Now that we've created a testnet wallet, filled it with test CKBytes and a digital content ready to rock on the blockchain, we are ready to do some action.

## Let's cook up your first spore by following these steps:

### Step 1: Set Up the Project

We'll use **`yarn`** as the package manager for this example.

1. Create a project folder (e.g., **`my-spore-project`**) and navigate into it.

```bash
mkdir my-spore-project && cd my-spore-project
```

2. Initialize your project with yarn: 

```bash
yarn init -y
```

3. Install required packages: 

```bash
yarn add @types/node --dev
yarn add typescript ts-node
# Initall sdk module
yarn add @spore-sdk/core
```

4. Create an **`index.ts`** file in your project's root folder.

```bash
touch index.ts
```




### Step 2: Mix in the Ingredients

Copy and edit the following code into your **`index.ts`** file, make sure to add your private key in line 107, specify the content type and filename:

```tsx {1,4-6,11} showLineNumbers
import React from 'react';
import { SporeConfig, createSpore, updateWitnessArgs, isScriptValueEquals, predefinedSporeConfigs, defaultEmptyWitnessArgs } from '@spore-sdk/core';
import { hd, helpers, HexString, RPC } from '@ckb-lumos/lumos';
import { secp256k1Blake160 } from '@ckb-lumos/common-scripts';
import { Address, Hash, Script } from '@ckb-lumos/base';
import { readFileSync } from 'fs';
import { resolve } from 'path';

interface Wallet {
  lock: Script;
  address: Address;
  signMessage(message: HexString): Hash;
  signTransaction(txSkeleton: helpers.TransactionSkeletonType): helpers.TransactionSkeletonType;
  signAndSendTransaction(txSkeleton: helpers.TransactionSkeletonType): Promise<Hash>;
}

/**
 * Create a Secp256k1Blake160 Sign-all Wallet by a private key and a SporeConfig,
 * providing lock/address, and functions to sign message/transaction and send the transaction on-chain.
 */
function createSecp256k1Wallet(privateKey: HexString, config: SporeConfig): Wallet {
  const Secp256k1Blake160 = config.lumos.SCRIPTS.SECP256K1_BLAKE160!;

  // Generate a lock script from the private key
  const lock: Script = {
    codeHash: Secp256k1Blake160.CODE_HASH,
    hashType: Secp256k1Blake160.HASH_TYPE,
    args: hd.key.privateKeyToBlake160(privateKey),
  };

  // Generate address from the lock script
  const address = helpers.encodeToAddress(lock, {
    config: config.lumos,
  });

  // Sign for a message
  function signMessage(message: HexString): Hash {
    return hd.key.signRecoverable(message, privateKey);
  }

  // Sign prepared signing entries,
  // and then fill signatures into Transaction.witnesses
  function signTransaction(txSkeleton: helpers.TransactionSkeletonType): helpers.TransactionSkeletonType {
    const signingEntries = txSkeleton.get('signingEntries');
    const signatures = new Map<HexString, Hash>();
    const inputs = txSkeleton.get('inputs');

    let witnesses = txSkeleton.get('witnesses');
    for (let i = 0; i < signingEntries.size; i++) {
      const entry = signingEntries.get(i)!;
      if (entry.type === 'witness_args_lock') {
        // Skip if the input's lock does not match to the wallet's lock
        const input = inputs.get(entry.index);
        if (!input || !isScriptValueEquals(input.cellOutput.lock, lock)) {
          continue;
        }

        // Sign message
        if (!signatures.has(entry.message)) {
          const sig = signMessage(entry.message);
          signatures.set(entry.message, sig);
        }

        // Update signature to Transaction.witnesses
        const signature = signatures.get(entry.message)!;
        const witness = witnesses.get(entry.index, defaultEmptyWitnessArgs);
        witnesses = witnesses.set(entry.index, updateWitnessArgs(witness, 'lock', signature));
      }
    }

    return txSkeleton.set('witnesses', witnesses);
  }

  // Sign the transaction and send it via RPC
  async function signAndSendTransaction(txSkeleton: helpers.TransactionSkeletonType): Promise<Hash> {
    // 1. Sign transaction
    txSkeleton = secp256k1Blake160.prepareSigningEntries(txSkeleton, { config: config.lumos });
    txSkeleton = signTransaction(txSkeleton);

    // 2. Convert TransactionSkeleton to Transaction
    const tx = helpers.createTransactionFromSkeleton(txSkeleton);

    // 3. Send transaction
    const rpc = new RPC(config.ckbNodeUrl);
    return await rpc.sendTransaction(tx, 'passthrough');
  }

  return {
    lock,
    address,
    signMessage,
    signTransaction,
    signAndSendTransaction,
  };
}

// Get local image file and return an ArrayBuffer
async function fetchLocalFile(src: string) {
  const buffer = readFileSync(resolve(__dirname, src));
  return new Uint8Array(buffer).buffer;
}

async function main() {
  // Use the testnet configuration
  const config = predefinedSporeConfigs.Aggron4;

  // NOTE: Be careful to protect this and do not make your private key public except you know what you are doing!
  // highlight-next-line
  const privateKey = '0xc153ee57dc8ae3dac3495c828d6f8c3fef6b1d0c74fc31101c064137b3269d6d';

  // Create out account/sign helper
  const account = createSecp256k1Wallet(privateKey, config);

  let { txSkeleton } = await createSpore({
    data: {
      // Specify the content's MIME type
      // highlight-next-line
      contentType: 'image/png',
      // Extra parameters of contentType
      contentTypeParameters: {
        immortal: true,
      },
      // Fill in the spore's content as bytes,
      // highlight-next-line
      content: await fetchLocalFile('./image.jpg'),
      // fill in the spores' belonging cluster's id, optional, here we leave it empty
      clusterId: undefined,
    },
    fromInfos: [account.address],
    toLock: account.lock,
    config,
  });

  const hash = await account.signAndSendTransaction(txSkeleton);
  console.log('createSpore sent, txHash:', hash);
}

main();

```

### **Step 3: Send Your Spore On-chain!**

1. Save the changes to your **`index.ts`** file.
2. Run the script: 

<Tabs>
<TabItem value="bash" label="Command">

```bash
yarn run ts-node ./index.ts
```

</TabItem>
<TabItem value="JSON" label="Response">

```JSON
createSpore sent, txHash: 0xfd5be439b84ef0e8d1917e2db9370bb99283ce30c953a10c9797ee7464077687
```
</TabItem>
</Tabs>

3. Check your transaction on **[https://pudge.explorer.nervos.org](https://pudge.explorer.nervos.org/)** by search for your transaction hash to see transaction details and your spore Cell.

## Congratulations! 
You've created your very first spore and preserved it for eternity on the blockchain. 

In this tutorial, you learned how to:

1. Create a CKB address and obtain CKBytes tokens.
2. Set up your project with Spore Protocol SDK.
3. Mint your spore on-chain and verify the transaction.
