---
sidebar_position: 9
---

# Disable Zero-fee Transfer

By default, Spores are created with the [Zero-fee Transfer](/basics/spore-101#do-i-need-to-hold-ckb-to-transfer-and-receive-spores) feature enabled, allowing the receiver to interact with the Spore without the need to possess or deposit additional tokens in their wallet. However, you have the flexibility to disable or enable this feature during Spore/Cluster ***creation*** and ***transfer***, depending on your specific application needs.

## Disable “Zero-fee Transfer” During Creation

When creating a new Spore/Cluster, it comes with a capacity margin of `1 CKB` (100,000,000 shannons) that can be used to cover fees for 100,000 future transactions. To disable the "Zero-fee Transfer" feature for the new Spore/Cluster, set the `capacityMargin` to `0` as follows:

```tsx
import { createSpore } from '@spore-sdk/core';
import { BI } from '@ckb-lumos/lumos';

let { txSkeleton } = await createSpore({
  data: {
    contentType: CONTENT_MIME_TYPE,
    content: CONTENT_AS_BYTES,
  },
  toLock: OWNER_LOCK,
  fromInfos: [SPONSOR_ADDRESS],
    // highlight-next-line
  capacityMargin: BI.from(0), // No capacity margin will be added
});
```

- `data` - The spore's data, including file data relevant properties.
- `toLock` - The lock script specifies the spore's ownership.
- `fromInfos` - The transaction's sponsors, specifies where to collect capacity from.
- `capacityMargin` - Additional capacity allocated as future transaction fees. By setting it to zero, indicates no additional capacity is allocated for transaction fees, thus turning off the “Zero-fee Transfer” feature for the spore being created.

:::info

If the sender attempts to transfer a Spore/Cluster with 0 capacity margin, they will need to pay the transaction fee from their wallet.

:::

## Disable “Zero-fee Transfer” During Transfer

By default, when you transfer a Spore/Cluster, it automatically uses the capacity margin to cover the fees without any extra setup. However, to disable the “Zero-fee Transfer” feature and use wallet funds to pay the fee instead, you can set the `useCapacityMarginAsFee` to `false` and include a wallet address in the `fromInfos` prop.

```tsx
import { transferSpore } from '@spore-sdk/core';

let { txSkeleton } = await transferSpore({
  outPoint: {
    txHash: '0x76cede56c91f8531df0e3084b3127686c485d08ad8e86ea948417094f3f023f9',
    index: '0x0',
  },
  toLock: RECEIVER_LOCK_SCRIPT,
    // highlight-next-line
  fromInfos: [SPONSOR_ADDRESS],
    // highlight-next-line
  useCapacityMarginAsFee: false,
});
```

- `outPoint` - Specifies the target spore for the transfer, identified by its transaction hash and index.
- `toLock` - The lock script of the new owner/recipient of the spore.
- `fromInfos` - The transaction's sponsor, specifies where to collect capacity from.
- `useCapacityMarginAsFee`- Specifies whether to pay fee with the target spore's capacity margin. The default is "true," and if set to "false," the transaction fee will be collected from the `fromInfos`.

