<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.introspection.getInfo({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->