---
sidebar_position: 12
---

# Encode/decode ClusterData

In the recipe, you will learn how to use the utilities of [spore-sdk](/resources/spore-sdk) to encode/decode [ClusterData](/basics/spore-tech-def#cluster-cell) between JSON and binary bytes.

## Encode ClusterData

You can pack Raw ClusterData into binary bytes with the `packRawSporeData` API from spore-sdk:

```tsx
import { packRawClusterData } from '@spore-sdk/core';

const packed = packRawSporeData({
  name: 'cluster name',
  description: 'description of the cluster',
});
```

Result:

```tsx
import { bytes } from '@ckb-lumos/codec';

console.log(packed);
// Uint8Array(88) [58,0,0,0,12,0,0,0,28,0,0,0,12,0,0,0,99,108,117,115,116,101,114,32,110,97,109,101,26,0,0,0,100,101,115,99,114,105,112,116,105,111,110,32,111,102,32,116,104,101,32,99,108,117,115,116,101,114]

console.log(bytes.hexify(packed));
// 0x3a0000000c0000001c0000000c000000636c7573746572206e616d651a0000006465736372697074696f6e206f662074686520636c7573746572
```

## Decode SporeData

You can unpack SporeData from bytes/hex to JSON with the `unpackToRawSporeData` API:

```tsx
import { unpackToRawClusterData } from '@spore-sdk/core';

const data = unpackToRawSporeData('0x3a0000000c0000001c0000000c000000636c7573746572206e616d651a0000006465736372697074696f6e206f662074686520636c7573746572');
```

Result:

```tsx
console.log(data);
// {
//   name: 'cluster name',
//   description: 'description of the cluster',
// }
```
