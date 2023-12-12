---
sidebar_position: 1
sidebar_label: Terms
---
# Terms

## anyone-can-pay (ACP)

A CKB lock script enabling the acceptance of Simple UDT or CKB payments without transfer amount restrictions. It simplifies payments to a cell by allowing transfer without creating new cells. 

For more details, visit [RFC0026: Anyone-Can-Pay Lock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md).

## capacity

Maximum storage space that a Spore cell can use on the underlying network. Measured in CKBytes.

**see also:** 
* [mint](#mint)

## cell

Fundamental data unit in Spore Protocol, built on CKB Cell Model, inspired by Bitcoin's UTXO. 
A Spore cell, or Spore for short, can encompass almost any data forms, including images, text, binary lib, etc..
Spore Protocol defines two cell types: Spore cell and Spore cluster cell. Spore cell type is the essential and only necessary building block, while the cell type of Spore cluster is optional, and may serve as an extension providing additional information of a Spore.

## cluster
Denotes a series or collection of Spores, serving as an organizational tool that groups individual Spores. Each Spore can be linked to one cluster, and one cluster can encompass a single or multiple Spores.
Clusters are immortal. Once created, a cluster stays on-chain permanently and cannot be destroyed or removed even by the owner.

**see also:** 
* [public cluster](#public_cluster)
* [private cluster](#private_cluster)
* [immortal](#immortal)
* [What is a Cluster?](https://docs.spore.pro/basics/spore-101#what-is-a-cluster)

## content
Refers to the field containing unique digital file or asset represented by the token. Content can encompass a wide range of digital items, such as digital art, music files, videos, virtual real estate, collectibles.

**see also:** 
* [content-type](#content-type)
* [Why combine content and content-type?](https://docs.spore.pro/basics/tech-faq#why-combine-content-and-content-type)

## content-type
Describes the file format or type of the digital asset associated with the token. For instance, content-type like JPEG, MP3, MP4 specify that the content is an image, audio, or video, respectively, among other formats. This information helps determine how to handle and render the associated content. Its scheme and rules follows the [RFC of MIME](https://datatracker.ietf.org/doc/html/rfc1341) standard.

**see also:**
* [content](#content)
* [Why combine content and content-type?](https://docs.spore.pro/basics/tech-faq#why-combine-content-and-content-type)

## destroy

Refer to the term [melt](#melt).

**see also:** 
* [mint](#mint)
* [transfer](#transfer)

## extension

Specified as Spore [Mutant](#mutant), used to add extensional behavior or verify rules onto spore or cluster.

**see also:** 
* [mutant](#mutant)

## group

Collection of individual Spores associated together by a specific cluster.

**see also:** 
* [cluster](#cluster)

## immortal

Extension making a spore or a cluster permanently indestructible on-chain, impossible to be destroyed or remove from the chain, even by their owners.

## immutability

Quality of permanence and resistance to alteration. Once a Spore is minted, its essential attributes, including ownership, provenance, and metadata, become fixed and cannot be changed. This guarantees the security and integrity of these attributes on the blockchain.

**see also:**
* [immutable data](https://docs.spore.pro/introduction/why-spore#immutable-data)

## input

References the Spore cell consumed in a transaction, containing specific information about the Spore’s identifier and content data. 

**see also:** 
* [output](#output)

## lock script

A script that manages ownership and controls the access of Spore cells. It governs who can use the cell as input in a transaction, and accepts user-generated proofs and the transaction as inputs.

## mint

Process of adding capacity to a Spore, locking it, and declaring its intrinsic value, thus transforming a digital creation into a unique, tamper-proof, and verifiable digital asset on-chain. 

**see also:** 
* [capacity](#capacity)
* [zero-fee](#zero-fee)

## melt

Process of undoing the creation of a Spore cell or cluster, resulting in the restoration of its original capacity in CKBytes.

**see also:** 
* [Why is Spore‘s value redeemable?](https://docs.spore.pro/basics/tech-faq#why-is-spores-value-redeemable)

## mutant

A special cell in Spore‘s ecosystem that stores Lua scripting code in the data field, be executed in every referenced transaction once applied. One can apply mutant:

1. To a Spore by specifying in `content-type` using param `mutant[] = MUTANT_ID_1, MUTANT_ID2,…;`, and including the referenced mutant cell in `CellDep`.
2. To a cluster by setting cluster’s `mutant_id=MUTANT_ID`, and including the referenced mutant cell in `CellDep`.

Mutant has three operation modes, each mapped to three opcodes, whose values are based on the transaction status:

- opcode `0`: Spore in minting operation, mutant executed as minting mode, and mutant Lua script can use external values: `spore_ext_mode`, `spore_output_index`, and `spore_ext_mode = 0`
- opcode `1`: Spore in transfer operation, mutant executed as transfer mode, and mutant Lua script can use external values: `spore_ext_mode`, `spore_input_index` `spore_output_index`, and `spore_ext_mode = 1`
- opcode `2`: Spore in melt operation, mutant executed as melt mode, and mutant Lua script can use external values: `spore_ext_mode`,`spore_input_index`, and `spore_ext_mode = 2`

**see also:** 
* [extension](#extension)

## non-fungible token (NFT)

Unique, indivisible digital assets representing ownership or proof of authenticity for specific items. Unlike cryptocurrencies, they cannot be exchanged on a one-to-one basis due to their unique properties and value.

Spore is a special form of NFT where the content is entirely and permanently stored on-chain, intrinsically tied to the token value.

**see also:** 
* [Is Spore an NFT?](https://spore-docs-9bn3yjbww-sporeprotocol.vercel.app/basics/tech-faq#is-spore-an-nft)

## Omnilock

An interoperable lock script natively supporting transaction signing method verification across blockchains, offering extensibility for future verification algorithms. 

Omnilock introduces a regulation compliance module, enabling administrators to revoke tokens held by users under defined circumstances, bridging the gap between blockchain and traditional financial regulation. 

For more information, visit [RFC0042-Omnilock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md).

## output

Spore cell(s) created when new transactions are confirmed. Can serve as input cells for future transactions.

**see also:** 
* [input](#input)

## on-chain ownership

Publicly verifiable and indisputable record of ownership for digital assets inscribed on the blockchain, eliminating the need for intermediaries and ensuring transparency.

## private cluster

Cluster permitting only the owner to associate a Spore or multiple Spores when minting.

**see also:** 
* [public cluster](#public_cluster)
* [cluster](#cluster)

## private key

Cryptographic information exclusively known to its owner or owners. Employed in conjunction with an algorithm for both encryption and decryption, ensuring the confidentiality and security of sensitive information.

**see also:** 
* [public key](#public_key)

## public cluster

Cluster enabling anyone, besides the owner, to associate a Spore or multiple Spores when minting.

**see also:**
* [cluster](#clsuter)
* [private cluster](#private_cluster)

## public key

Cryptographic information openly shareable without compromising security. Utilized for message encryption to ensure that only the corresponding private key holder can decrypt. Also employed for message authenticity verification, confirming authorization by the user possessing the corresponding private key.

**see also:** 
* [private key](#public_key)

## redeemability

Ability of Spore users to destroy their Spores and instantly recover the remaining value at no cost. 

**see also:**
* [Why is Spore‘s value redeemable?](https://docs.spore.pro/basics/tech-faq#why-is-spores-value-redeemable)

## secp256k1-blake160

A lock script code using the [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) signature algorithm, performing [Blake2b](https://www.blake2.net/) hash operations on transaction and witness components. Essential for validating transactions in specific blockchain systems.

## transfer

Process that refreshes a Spore by consuming its cell and creating a new one with the same Spore ID and unchanged fields. This operation costs no additional free, where the costs is deducted from the cell's capacity.

**see also:** 
* [zero-fee transfer](#zero-fee_transfer)
* [Basic operation: Transfer](https://docs.spore.pro/basics/spore-operation#transfer)

## tokenomics

The economic aspects and dynamics of cryptocurrency tokens, analyzing factors such as distribution, supply, demand, utility, and economic incentives in blockchain ecosystems.

Spore's tokenomics encourages a mutually beneficial connection between creators and buyers. Creators gain direct compensation from Spore sales and benefit indirectly through on-chain space utilization. Buyers acquire tokens and lasting on-chain assets. 

## TypeID

A system script for on-chain validation and verification of specific script conditions. Its primary purpose is to define mandatory on-chain conditions and constraints to ensure secure and transparent cell management. Serving as a safety mechanism, TypeID verifies specific criteria related to the creation and handling of cells.

## type script

A script establishing mandatory transaction conditions for a Spore cell to be used as input or created as output.

**see also:**
* [cell](#cell)
* [input](#input)
* [output](#output)

## zero-fee transfer

Mechanism allowing fee-free Spore transfers in native or non-native tokens. Each Spore is pre-fueled with the cost for future transfers, making all subsequent operations–including sending, receiving, and melting—completely fee-free.

**see also:** 
* [transfer](#trasnfer)
* [What is “Zero-fee Transfer“?](https://docs.spore.pro/basics/tech-faq#what-is-zero-fee-transfer)
