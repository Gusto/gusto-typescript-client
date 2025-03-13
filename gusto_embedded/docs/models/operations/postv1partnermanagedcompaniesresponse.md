# PostV1PartnerManagedCompaniesResponse

## Example Usage

```typescript
import { PostV1PartnerManagedCompaniesResponse } from "@gusto/embedded-api/models/operations/postv1partnermanagedcompanies.js";

let value: PostV1PartnerManagedCompaniesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                           | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `object`                                                                                                                     | [operations.PostV1PartnerManagedCompaniesResponseBody](../../models/operations/postv1partnermanagedcompaniesresponsebody.md) | :heavy_minus_sign:                                                                                                           | OK                                                                                                                           |