# GetV1CompaniesCompanyIdEarningTypesResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdEarningTypesResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidearningtypes.js";

let value: GetV1CompaniesCompanyIdEarningTypesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `earningTypeList`                                                        | [components.EarningTypeList](../../models/components/earningtypelist.md) | :heavy_minus_sign:                                                       | Example response                                                         |