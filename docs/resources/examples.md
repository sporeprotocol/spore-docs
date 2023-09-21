---
sidebar_position: 2
sidebar_label: Examples
---

# Spore Examples

Spore Examples are minimum viable code snippets or executable files that run on Node.js, each implementing a single feature using [Spore SDK](./spore-sdk). Developers can solve their own development issues or confusion by referring to the examples.

> If you are looking for a fully functional application as research material, see: [Spore Demos](./demos).

## Scenario examples

### Example: Creating your first spore on-chain

[Spore-first-example](https://github.com/sporeprotocol/spore-first-example) is a hello world example for spore-sdk, showing you how to upload an image file and create a spore on [Nervos CKB](https://www.nervos.org/) in a split second. This is a well-suited code example for beginners to learn the very basics of Spore Protocol.

- [Follow the tutorial: Creating your first spore from scratch](./examples)
- [Run example on StackBlitz](https://stackblitz.com/github/sporeprotocol/spore-first-example?file=src%2Findex.ts)
- [GitHub repository](https://github.com/sporeprotocol/spore-first-example)

## Lock script examples

### [Example: `CKB Default lock`](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/secp256k1)

[CKB Default lock](https://www.notion.so/cryptape/examples/secp256k1) is the most commonly used lock script on [Nervos CKB](https://www.nervos.org/), also a great starting point for beginners due to its simplicity. Let's kick things off right here to start learning:

- Create/transfer clusters with the [CKB Default lock](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c)
- Create/transfer/destroy spores with the [CKB Default lock](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c)

### [Example: `Anyone-can-pay`](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/acp)

[Anyone-can-pay](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md) (ACP) lock can be unlocked by anyone without signature verification and accepts any amount of CKB/UDT payment from the unlocker. Leverage its flexibility to:

- Create public clusters with the [Anyone-can-pay](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md) lock
- Create spores in public clusters with the [CKB Default lock](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c)

### [Example: `Omnilock`](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/omnilock)

[Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md) is a universal and interoperable lock script supporting various blockchains (Bitcoin, Ethereum, EOS, etc.) verification methods and extensible for future additions. Combine [Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md) with spore-sdk to:

- Create public clusters with the [Omnilock ACP](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md#anyone-can-pay-mode) lock
- Create spores in public clusters with the [Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md) lock
