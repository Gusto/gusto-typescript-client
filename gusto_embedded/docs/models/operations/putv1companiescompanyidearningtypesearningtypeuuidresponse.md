# PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse } from "@gusto/embedded-api/models/operations";

let value: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse = {
  contentType: "<value>",
  statusCode: 302,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `earningType`                                                         | [components.EarningType](../../models/components/earningtype.md)      | :heavy_minus_sign:                                                    | Example response                                                      |