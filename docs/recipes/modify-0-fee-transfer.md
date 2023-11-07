---
sidebar_position: 8
---

# Modify Zero-fee Transfer 

Every spore, when created, is fueled with 1 CKByte as transaction fee that covers about `100,000` future transactions. This default setting, referred as the  [Zero-fee Transfer](/basics/spore-101#do-i-need-to-hold-ckb-to-transfer-and-receive-spores) feature enables recipients to transact spores without additional costs.

## Modify Zero-fee Transfer Feature

If you want to modify this feature by adding additional CKBytes, or if the spore was created without the capacity margin, you can utilize the `transferSpore` API to "refuel":

```tsx
import { transferSpore } from '@spore-sdk/core';
import { BI } from '@ckb-lumos/lumos';

let { txSkeleton } = await transferSpore({
  outPoint: SPORE_OUTPOINT,
  toLock: OWNER_LOCK,
  fromInfos: [OWNER_ADDRESS],
  // highlight-start
  capacityMargin: BI.from(1_0000_0000), // Add 1 CKB as margin, default is 0
  useCapacityMarginAsFee: false, // Disable the feature
  // highlight-end
});
```

- `outPoint` - Specifies the target spore for configuration, identified by its transaction hash and index.
- `toLock` - The lock script of the new owner/recipient of the spore (which remains with the original owner in this case).
- `fromInfos` - The transaction's sponsor, specifies where to collect capacity from.
- `capacityMargin` - Capacity allocated as future transaction fees.
- `useCapacityMarginAsFee`- Specifies whether to pay fee with the target spore's capacity margin, default to "true", if false, the transaction is paid with capacity collected from the `fromInfos`

Essentially, you:

1. Transfer the spore to the owner itself
2. Set the `capacityMargin` to add additional capacity as margin
3. Use wallet funds to pay for this transaction

:::caution

You can't set `capacityMargin` and have `useCapacityMarginAsFee` as true at the same time.

:::
