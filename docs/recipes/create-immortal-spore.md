---
sidebar_position: 2
---

# Create an Immortal Spore

`Immortal` is an internal Spore Extension that can be enabled on Spores to unlock immortality. The immortal spores are indestructible and persist permanently on-chain, immune even to their owner's destruction.

## Background Knowledge
- [What is a Spore? - Spore Protocol 101](/basics/spore-101#what-is-a-spore)
- [Spore SDK - Resources](/resources/spore-sdk)

## Create an Immortal Spore

You can create an immortal spore by specifying `immortal: true` under `data.contentTypeParameters` when calling the `createSpore` API from spore-sdk:

```tsx
import { createSpore } from '@spore-sdk/core';

let { txSkeleton } = await createSpore({
  data: {
    contentType: CONTENT_MIME_TYPE,
    content: CONTENT_AS_BYTES,
    contentTypeParameters: {
      immortal: true,
    },
  },
  toLock: OWNER_LOCK,
  fromInfos: [OWNER_ADDRESS],
});
```

- `data.contentTypeParameters` - A key-value object for applying additional parameters to the spore's content type. The parameters will be converted to a string and merged into the `data.contentType` prop.

## Extras

### Behind the `contentTypeParameters`

The `data.contentTypeParameters` prop in the `createSpore` API simplifies the process of applying parameters to the `contentType` in SporeData. During processing, it is automatically converted to a string and merged into the `data.contentType` prop.

For example, when attempting to create an immortal `.jpg` Spore, you can pass the required extension parameters to `data.contentTypeParameters`. In our case the parameter is `immortal`, like this:

```tsx
await createSpore({
  data: {
    content: CONTENT_AS_BYTES,
    contentType: 'image/jpeg',
    contentTypeParameters: {
      immortal: true,
    },
  },
  ...
});
```

The above function call is equivalent to the following:

```tsx
await createSpore({
  data: {
    content: CONTENT_AS_BYTES,
    contentType: 'image/jpeg;immortal=true',
  },
  ...
});
```