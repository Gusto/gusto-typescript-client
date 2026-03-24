# PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody } from "@gusto/embedded-api/models/operations/putv1companiescompanyidpayrollspayrollidprepare.js";

let value: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `employeeUuids`                                                                             | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | An array of employee UUIDs. If passed, only those employees payroll items will be prepared. |