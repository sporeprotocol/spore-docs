---
sidebar_position: 1
sidebar_label: Terms
---
# Terms

## Capacity

A unit of measurement for storage space and resource allocation on Nervos CKB. For Spore, it quantifies the size of data stored on the blockchain, measured in occupied CKBytes.

**see also:** 
* [mint](#mint)

## Cell

Fundamental data unit in Spore Protocol, built on CKB Cell Model, inspired by Bitcoin's UTXO. 
A Spore cell, or Spore for short, can encompass almost any data forms, including images, text, binary lib, etc..
Spore Protocol defines two cell types: Spore cell and Spore cluster cell. Spore cell type is the essential and only necessary building block, while the cell type of Spore cluster is optional, and may serve as an extension providing additional information of a Spore.

## Cluster
Denotes a series or collection of Spores, serving as an organizational tool that groups individual Spores. Each Spore can be linked to one cluster, and one cluster can be associated to a single or multiple Spores.
Clusters are immortal. Once created, a cluster stays on-chain permanently.

**see also:** 
* [public cluster](#public_cluster)
* [private cluster](#private_cluster)
* [immortal](#immortal)
* [What is a Cluster?](https://docs.spore.pro/basics/spore-101#what-is-a-cluster)

## Content
The unique digital item or asset that Spore represents. This could be anything like digital art, music, videos, virtual real estate, or collectibles.

**see also:** 
* [content-type](#content-type)
* [Why combine content and content-type?](https://docs.spore.pro/basics/tech-faq#why-combine-content-and-content-type)

## Content-Type
The file format or type of the digital asset created as Spore. For example, if the content-type is JPEG, it means the digital asset is an image. If it's MP3 or MP4, the asset is an audio file or a video file, respectively. 
Content-type helps in understanding how to correctly use or display the digital asset. The rules and structure of Spore's content-types follow the [MIME](https://datatracker.ietf.org/doc/html/rfc1341) standard, which is a widely accepted guideline for indicating the nature and format of a document, file, or assortment of bytes.

**see also:**
* [content](#content)
* [Why combine content and content-type?](https://docs.spore.pro/basics/tech-faq#why-combine-content-and-content-type)

## Destroy

Refer to the term [melt](#melt).

**see also:** 
* [mint](#mint)
* [transfer](#transfer)

## Extension

As used in the context of Spore and referred to as a [Mutant](#mutant), indicates an additional feature or set of rules that can be applied to a spore or cluster. 

**see also:** 
* [mutant](#mutant)

## Group

Collection of individual Spores associated together by a specific cluster.

**see also:** 
* [cluster](#cluster)

## Immortal

An extension that makes the spore or cluster permanently on-chain, ensuring it cannot be destroyed/melted or removed, not even by its owner.

## Immutability

Quality of permanence and resistance to alteration. Once a Spore is minted, its essential attributes, including ownership, provenance, and metadata, become fixed and cannot be changed. This guarantees the security and integrity of these attributes on the blockchain.

**see also:**
* [immutable data](https://docs.spore.pro/introduction/why-spore#immutable-data)

## Input

References the Spore cell consumed in a transaction, containing specific information about the Spore’s identifier and content data. 

**see also:** 
* [output](#output)

## Lock Script

A script that manages ownership and controls the access of Spore cells. It governs who can use the cell as input in a transaction, and accepts user-generated proofs and the transaction as inputs.

### Anyone-Can-Pay (ACP)

A CKB lock script enabling the acceptance of Simple UDT or CKB payments without transfer amount restrictions. It simplifies payments to a cell by allowing transfer without creating new cells. 

For more details, visit [RFC0026: Anyone-Can-Pay Lock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md).

### Omnilock

An interoperable lock script natively supporting transaction signing method verification across blockchains, offering extensibility for future verification algorithms. 

Omnilock introduces a regulation compliance module, enabling administrators to revoke tokens held by users under defined circumstances, bridging the gap between blockchain and traditional financial regulation. 

For more information, visit [RFC0042-Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md).

### Secp256k1-Blake160

A lock script code using the [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) signature algorithm, performing [Blake2b](https://www.blake2.net/) hash operations on transaction and witness components. Essential for validating transactions in specific blockchain systems.


## Mint

Process of adding capacity to a Spore, locking it, and declaring its intrinsic value, thus transforming a digital creation into a unique, tamper-proof, and verifiable digital asset on-chain. 

**see also:** 
* [capacity](#capacity)
* [zero-fee](#zero-fee)

## Melt

Process of undoing the creation of a Spore, resulting in the recovery of the storage space (capacity), measured in CKBytes, that was originally used to create the Spore.

**see also:** 
* [Why is Spore‘s value redeemable?](https://docs.spore.pro/basics/tech-faq#why-is-spores-value-redeemable)

## Mutant

A special cell in Spore‘s ecosystem that stores Lua scripting code in the data field, be executed in every referenced transaction once applied. One can apply mutant:

1. To a Spore by specifying in `content-type` using param `mutant[] = MUTANT_ID_1, MUTANT_ID2,…;`, and including the referenced mutant cell in `CellDep`.
2. To a cluster by setting cluster’s `mutant_id=MUTANT_ID`, and including the referenced mutant cell in `CellDep`.

Mutant has three operation modes, each mapped to three opcodes, whose values are based on the transaction status:

- opcode `0`: Spore in minting operation, mutant executed as minting mode, and mutant Lua script can use external values: `spore_ext_mode`, `spore_output_index`, and `spore_ext_mode = 0`
- opcode `1`: Spore in transfer operation, mutant executed as transfer mode, and mutant Lua script can use external values: `spore_ext_mode`, `spore_input_index` `spore_output_index`, and `spore_ext_mode = 1`
- opcode `2`: Spore in melt operation, mutant executed as melt mode, and mutant Lua script can use external values: `spore_ext_mode`,`spore_input_index`, and `spore_ext_mode = 2`

**see also:** 
* [extension](#extension)

## Non-Fungible Token (NFT)

Unique, indivisible digital assets representing ownership or proof of authenticity for specific items. Unlike cryptocurrencies, they cannot be exchanged on a one-to-one basis due to their unique properties and value.

Spore is a special standard for NFTs where the content is entirely stored on-chain and intrinsically tied to the token value.

**see also:** 
* [Is Spore an NFT?](https://spore-docs-9bn3yjbww-sporeprotocol.vercel.app/basics/tech-faq#is-spore-an-nft)


## Output

Spore cell(s) created when new transactions are confirmed. Can serve as input cells for future transactions.

**see also:** 
* [input](#input)

## On-Chain Ownership

Publicly verifiable and indisputable record of ownership for digital assets inscribed on the blockchain, eliminating the need for intermediaries and ensuring transparency.

## Private Cluster

A cluster that can only be used by its owner to link a Spore or multiple Spores to it when minting these Spores.

**see also:** 
* [public cluster](#public_cluster)
* [cluster](#cluster)

## Private Key

Cryptographic information exclusively known to its owner or owners. Employed in conjunction with an algorithm for both encryption and decryption, ensuring the confidentiality and security of sensitive information.

**see also:** 
* [public key](#public_key)

## Public Cluster

A cluster that allows anyone, not just the owner, to associate a Spore or multiple Spores with it when minting Spores.

**see also:**
* [cluster](#clsuter)
* [private cluster](#private_cluster)

## Public Key

Cryptographic information openly shareable without compromising security. Utilized for message encryption to ensure that only the corresponding private key holder can decrypt. Also employed for message authenticity verification, confirming authorization by the user possessing the corresponding private key.

**see also:** 
* [private key](#public_key)

## Redeemability

Ability of Spore users to destroy their Spores and instantly recover the remaining value at no cost. 

**see also:**
* [Why is Spore‘s value redeemable?](https://docs.spore.pro/basics/tech-faq#why-is-spores-value-redeemable)

## Transfer

The process of changing the ownership of a Spore or a Cluster. It's important to note that owning a cluster does not automatically grant ownership of the spores associated with that cluster. Each Spore and Cluster has its own distinct ownership rights that can be transferred separately.

**see also:** 
* [zero-fee transfer](#zero-fee_transfer)
* [Basic operation: Transfer](https://docs.spore.pro/basics/spore-operation#transfer)

## Tokenomics

The economic aspects and dynamics of cryptocurrency tokens, analyzing factors such as distribution, supply, demand, utility, and economic incentives in blockchain ecosystems.

Spore's tokenomics encourages a mutually beneficial connection between creators and buyers. Creators gain direct compensation from Spore sales and benefit indirectly through on-chain space utilization. Buyers acquire tokens and lasting on-chain assets. 

## TypeID

A system script for on-chain validation and verification of specific script conditions. Its primary purpose is to define mandatory on-chain conditions and constraints to ensure secure and transparent cell management. Serving as a safety mechanism, TypeID verifies specific criteria related to the creation and handling of cells.

## Type Script

A script establishing mandatory transaction conditions for a Spore cell to be used as input or created as output.

**see also:**
* [cell](#cell)
* [input](#input)
* [output](#output)

## Zero-Fee Transfer

Mechanism allowing 0 cost Spore transfers. Each Spore is pre-fueled with the capacity to cover future transfers, making all subsequent operations–including sending, receiving, and melting—completely free.

**see also:** 
* [transfer](#trasnfer)
* [What is “Zero-fee Transfer“?](https://docs.spore.pro/basics/tech-faq#what-is-zero-fee-transfer)
