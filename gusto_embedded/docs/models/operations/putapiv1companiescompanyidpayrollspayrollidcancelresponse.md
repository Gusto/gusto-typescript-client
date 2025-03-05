# PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse

## Example Usage

```typescript
import { PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse } from "@gusto/embedded-api/models/operations/putapiv1companiescompanyidpayrollspayrollidcancel.js";

let value: PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse = {
  contentType: "<value>",
  statusCode: 431,
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
| `payroll`                                                             | [components.Payroll](../../models/components/payroll.md)              | :heavy_minus_sign:                                                    | Example response                                                      |