# GetV1CompaniesCompanyIdEmployeesPaymentDetailsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdEmployeesPaymentDetailsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidemployeespaymentdetails.js";

let value: GetV1CompaniesCompanyIdEmployeesPaymentDetailsResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `employeePaymentDetailsList`                                                           | [components.EmployeePaymentDetail](../../models/components/employeepaymentdetail.md)[] | :heavy_minus_sign:                                                                     | A list of employee payment details.                                                    |