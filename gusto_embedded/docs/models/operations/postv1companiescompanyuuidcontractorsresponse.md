# PostV1CompaniesCompanyUuidContractorsResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidContractorsResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyuuidcontractors.js";

let value: PostV1CompaniesCompanyUuidContractorsResponse = {
  contentType: "<value>",
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  contractor: {
    uuid: "0810fd20-f42b-414f-ba86-c2fd90be851c",
    hourlyRate: "50.0",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `contractor`                                                          | [components.Contractor](../../models/components/contractor.md)        | :heavy_minus_sign:                                                    | Example response                                                      |