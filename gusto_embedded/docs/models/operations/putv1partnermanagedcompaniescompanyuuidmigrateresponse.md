# PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse

## Example Usage

```typescript
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse } from "@gusto/embedded-api/models/operations/putv1partnermanagedcompaniescompanyuuidmigrate.js";

let value: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                             | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `object`                                                                                                                                                       | [operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody](../../models/operations/putv1partnermanagedcompaniescompanyuuidmigrateresponsebody.md) | :heavy_minus_sign:                                                                                                                                             | Example response                                                                                                                                               |