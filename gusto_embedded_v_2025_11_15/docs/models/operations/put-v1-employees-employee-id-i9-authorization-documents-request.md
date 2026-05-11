# PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest } from "openapi/models/operations";

let value: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest = {
  employeeId: "<id>",
  body: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsXGustoAPIVersion](../../models/operations/put-v1-employees-employee-id-i9-authorization-documents-x-gusto-api-version.md)                                        | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `employeeId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the employee                                                                                                                                                                                                     |
| `body`                                                                                                                                                                                                                       | [models.I9AuthorizationDocumentsRequestBody](../../models/i9-authorization-documents-request-body.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |