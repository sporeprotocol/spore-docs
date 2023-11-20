---
sidebar_position: 2
sidebar_label: Examples
---

# Spore Examples

Here we provide several examples which are minimum viable snippets designed for a Node environment, each showcasing a specific feature implemented using the [Spore SDK](./spore-sdk).

These examples serve as practical guides for developers, demonstrating how to implement specific features in a straightforward manner, for instance, how to create a spore by a transaction with spore-sdk. And for those who are looking for documentation on how to develop a fully functional application, refer to: [Spore Demos](./demos).

## Scenario examples

### Creating your first spore on-chain

[Spore-first-example](https://github.com/sporeprotocol/spore-first-example) is a hello world example for spore-sdk, showing you how to upload an image file and create a spore on [Nervos CKB](https://www.nervos.org/) in a split second. This is a well-suited code example for beginners to learn the very basics of Spore Protocol.

- [Follow the tutorial: Creating your first spore](./examples)
- [Run example on StackBlitz](https://stackblitz.com/github/sporeprotocol/spore-first-example?file=src%2Findex.ts)
- [GitHub repository](https://github.com/sporeprotocol/spore-first-example)

## Lock script examples

### [CKB Default lock](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/secp256k1)

[CKB Default lock](https://www.notion.so/cryptape/examples/secp256k1) is the most commonly used lock script on [Nervos CKB](https://www.nervos.org/), also a great starting point for beginners due to its simplicity. Let's kick things off right here to start learning:

- Create/transfer clusters with the [CKB Default lock](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c)
- Create/transfer/melt spores with the [CKB Default lock](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c)

### [Anyone-can-pay](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/acp)

[Anyone-can-pay](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md) (ACP) lock can be unlocked by anyone without signature verification and accepts any amount of CKB/UDT payment from the unlocker. Leverage its flexibility to:

- Create public clusters with the [Anyone-can-pay](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md) lock
- Create spores in public clusters with the [CKB Default lock](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c)

### [Omnilock](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/omnilock)

[Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md) is a universal and interoperable lock script supporting various blockchains (Bitcoin, Ethereum, EOS, etc.) verification methods and extensible for future additions. Combine [Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md) with spore-sdk to:

- Create public clusters with the [Omnilock ACP](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md#anyone-can-pay-mode) lock
- Create spores in public clusters with the [Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md) lock
