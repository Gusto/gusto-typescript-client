<!-- Start SDK Example Usage [usage] -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getInfo({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->