# PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidi9authorizationdocuments.js";

let value: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest = {
  employeeId: "<id>",
  i9AuthorizationDocumentsRequestBody: {
    documents: [
      {
        documentType: "us_passport",
        documentTitle: "US Passport",
        documentNumber: "F12345678",
        expirationDate: "2026-01-01",
        issuingAuthority: "USA",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsHeaderXGustoAPIVersion](../../models/operations/putv1employeesemployeeidi9authorizationdocumentsheaderxgustoapiversion.md)                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `employeeId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the employee                                                                                                                                                                                                     |
| `i9AuthorizationDocumentsRequestBody`                                                                                                                                                                                        | [components.I9AuthorizationDocumentsRequestBody](../../models/components/i9authorizationdocumentsrequestbody.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |