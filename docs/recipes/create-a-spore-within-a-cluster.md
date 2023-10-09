---
sidebar_position: 6
---

# Create a Spore Within a Cluster

Cluster is like an on-chain folder that groups spores together. In this recipe, you will learn how to create a spore within a cluster given that it can be unlocked by you.

Your target cluster can be either a public cluster or a private cluster, depending on the its lock script.

- `Private Cluster` - In the case of a private cluster,  it can be unlocked using your signature, if you possess the private key paired with that cluster's lock script.
- `Public Cluster` - In contrast, a public cluster doesn’t require a signature to unlock. In this case, anyone can unlock it, including you.


| Target Cluster      | Can I Create a Spore Within It? |
| :--- | :---: |
| Private cluster you own      | Yes       |
| Public cluster   | Yes        |
| Private cluster without key  | No        |
## Background Knowledge
- [What is a Spore? - Spore Protocol 101](/basics/spore-101#what-is-a-spore)
- [What is a Cluster? - Spore Protocol 101](/basics/spore-101#what-is-a-cluster)
- [Create a Spore - How-to Recipes](/recipes/create-spore)
- [Create a Private Cluster - How-to Recipes](/recipes/create-private-cluster)

## Create a Spore Within a Cluster

You can create a spore within a cluster by specifying the `data.clusterId` when calling the `createSpore` API from spore-sdk:

```tsx
import { createSpore } from '@spore-sdk/core';

let { txSkeleton } = await createSpore({
  data: {
    contentType: CONTENT_MIME_TYPE,
    content: CONTENT_AS_BYTES,
        // highlight-next-line
		clusterId: CLUSTER_ID,
  },
  toLock: OWNER_LOCK,
  fromInfos: [OWNER_ADDRESS],
});
```

- `data.clusterId` - The ID of the cluster where the spore intends to be created. The cluster’s ID is equivalent to the type script args of the cluster.

