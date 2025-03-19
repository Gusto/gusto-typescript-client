# GetCompaniesCompanyUuidSuspensionsResponse

## Example Usage

```typescript
import { GetCompaniesCompanyUuidSuspensionsResponse } from "@gusto/embedded-api/models/operations/getcompaniescompanyuuidsuspensions.js";

let value: GetCompaniesCompanyUuidSuspensionsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `companySuspensionList`                                                        | [components.CompanySuspension](../../models/components/companysuspension.md)[] | :heavy_minus_sign:                                                             | Example response                                                               |