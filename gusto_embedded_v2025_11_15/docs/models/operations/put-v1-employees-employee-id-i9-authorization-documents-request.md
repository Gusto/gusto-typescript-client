# PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest } from "openapi/models/operations";

let value: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest = {
  employeeId: "<id>",
  body: {
    documents: [
      {
        documentType: "<value>",
        documentTitle: "<value>",
        issuingAuthority: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the employee                                                                                                                                                                                                     |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [models.VersionHeader](../../models/version-header.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `body`                                                                                                                                                                                                                       | [operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody](../../models/operations/put-v1-employees-employee-id-i9-authorization-documents-request-body.md)                                                    | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |