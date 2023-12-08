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

### [CKB default lock](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/secp256k1)

[CKB default lock](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c) is the most commonly used lock script on [Nervos CKB](https://www.nervos.org/), also a great starting point for beginners due to its simplicity. Let's check out some examples using the CKB Default lock:

- [Create Spore](https://github.com/sporeprotocol/spore-sdk/blob/beta/examples/secp256k1/apis/createSpore.ts) - Create a spore with CKBytes
- [Transfer Spore](https://github.com/sporeprotocol/spore-sdk/blob/beta/examples/secp256k1/apis/transferSpore.ts) - Transfer the ownership of a spore from A to B
- [Melt Spore](https://github.com/sporeprotocol/spore-sdk/blob/beta/examples/secp256k1/apis/meltSpore.ts) - Melt a spore and redeem occupied CKBytes
- [Create Cluster](https://github.com/sporeprotocol/blob/beta/spore-sdk/examples/secp256k1/apis/createCluster.ts) - Create a cluster with CKBytes
- [Transfer Cluster](https://github.com/sporeprotocol/blob/beta/spore-sdk/examples/secp256k1/apis/transferCluster.ts) - Transfer the ownership of a cluster from A to B

### [Anyone-can-pay](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/acp)

[Anyone-can-pay](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md) (ACP) lock can be unlocked by anyone without signature verification and accepts any amount of CKB/UDT payment for using the cluster. Check out these code examples:

- [Create Public Clusters](https://github.com/sporeprotocol/spore-sdk/blob/beta/examples/acp/apis/createAcpCluster.ts) - Create a cluster that can be used by anyone with or without a fee
- [Create Spores in Public Clusters](https://github.com/sporeprotocol/spore-sdk/blob/beta/examples/acp/apis/createSporeInAcpCluster.ts) - Create a spore using CKB default lock associated with an Anyone-can-pay lock cluster

### [Omnilock](https://github.com/sporeprotocol/spore-sdk/tree/beta/examples/omnilock)

[Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md) is a universal and interoperable lock script supporting various blockchains (Bitcoin, Ethereum, EOS, etc.) verification methods and extensible for future additions. Combine Omnilock with spore-sdk to:

- [Create Public Clusters](https://github.com/sporeprotocol/spore-sdk/blob/beta/examples/omnilock/acp/createAcpCluster.ts) - Create a cluster that accepts payment per usage by anyone
- [Create Omnilock Spores in Public Clusters](https://github.com/sporeprotocol/spore-sdk/blob/beta/examples/omnilock/acp/createSporeInAcpCluster.ts) - Create an spore using Omnilock associated with an Omnilock-ACP lock cluster
