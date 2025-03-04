# PostV1CompaniesCompanyUuidContractorsResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidContractorsResponse } from "@gusto/embedded-api/models/operations";

let value: PostV1CompaniesCompanyUuidContractorsResponse = {
  contentType: "<value>",
  statusCode: 412,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  contractor: {
    uuid: "00810fd2-0f42-4b14-bfa8-6c2fd90be851",
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