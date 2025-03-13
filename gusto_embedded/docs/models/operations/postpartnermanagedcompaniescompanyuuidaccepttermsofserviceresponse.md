# PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse

## Example Usage

```typescript
import { PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse } from "@gusto/embedded-api/models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservice.js";

let value: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse =
  {
    httpMeta: {
      response: new Response("{\"message\": \"hello world\"}", {
        headers: { "Content-Type": "application/json" },
      }),
      request: new Request("https://example.com"),
    },
  };
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `object`                                                                                                                                                                               | [operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody](../../models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofserviceresponsebody.md) | :heavy_minus_sign:                                                                                                                                                                     | Example response                                                                                                                                                                       |