<!-- Start SDK Example Usage [usage] -->
```typescript
import { GustoEmbedded } from "gusto_embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gustoEmbedded.introspection.get({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->