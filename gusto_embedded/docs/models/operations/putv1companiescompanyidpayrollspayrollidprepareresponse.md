# PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse } from "@gusto/embedded-api/models/operations";

let value: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse = {
  contentType: "<value>",
  statusCode: 510,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | HTTP response content type for this operation                            |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP response status code for this operation                             |
| `rawResponse`                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)    | :heavy_check_mark:                                                       | Raw HTTP response; suitable for custom response parsing                  |
| `payrollPrepared`                                                        | [components.PayrollPrepared](../../models/components/payrollprepared.md) | :heavy_minus_sign:                                                       | A prepared payroll                                                       |