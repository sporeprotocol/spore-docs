---
sidebar_position: 11
---

# Encode/decode SporeData

In the recipe, you will learn how to use the utilities of [spore-sdk](/resources/spore-sdk) to encode/decode [SporeData](/basics/technical-design/#spore-cell) between JSON and binary bytes.

## Encode SporeData

```tsx
import { packRawSporeData, bytifyRawString } from '@spore-sdk/core';

const packed = packRawSporeData({
  contentType: 'text/plain',
  content: bytifyRawString('testing plain string'),
  clusterId: '0x21a30f2b2f4927dbd6fd3917990af0dbb868438f44184e84d515f9af84ae4861',
});
```

Result:

```tsx
import { bytes } from '@ckb-lumos/codec';

console.log(packed);
// Uint8Array(88) [88,0,0,0,16,0,0,0,30,0,0,0,52,0,0,0,10,0,0,0,116,101,120,116,47,112,108,97,105,110,18,0,0,0,116,101,115,116,105,110,103,32,112,108,97,105,110,32,116,101,120,116,32,0,0,0,33,163,15,43,47,73,39,219,214,253,57,23,153,10,240,219,184,104,67,143,68,24,78,132,213,21,249,175,132,174,72,97]

console.log(bytes.hexify(packed));
// 0x58000000100000001e000000340000000a000000746578742f706c61696e1200000074657374696e6720706c61696e20746578742000000021a30f2b2f4927dbd6fd3917990af0dbb868438f44184e84d515f9af84ae4861
```

## Decode SporeData

You can unpack SporeData from bytes/hex to JSON with the `unpackToRawSporeData` API:

```tsx
import { unpackToRawSporeData, bytifyRawString } from '@spore-sdk/core';

const data = unpackToRawSporeData('0x58000000100000001e000000340000000a000000746578742f706c61696e1200000074657374696e6720706c61696e20746578742000000021a30f2b2f4927dbd6fd3917990af0dbb868438f44184e84d515f9af84ae4861');
```

Result:

```tsx
import { bufferToRawString } from '@spore-sdk/core';

console.log(data);
// {
//   contentType: 'text/plain',
//   content: '0x74657374696e6720706c61696e2074657874',
//   clusterId: '0x21a30f2b2f4927dbd6fd3917990af0dbb868438f44184e84d515f9af84ae4861'
// }

console.log(bufferToRawString(data.content));
// testing plain string
```
