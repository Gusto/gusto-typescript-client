# GetV1CompaniesCompanyUuidContractorsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyUuidContractorsResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1CompaniesCompanyUuidContractorsResponse = {
  contentType: "<value>",
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  contractorList: [
    {
      uuid: "0f984e4d-fc81-4773-b652-7480ed8df1af",
      hourlyRate: "50.0",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `contractorList`                                                      | [components.Contractor](../../models/components/contractor.md)[]      | :heavy_minus_sign:                                                    | Example response                                                      |