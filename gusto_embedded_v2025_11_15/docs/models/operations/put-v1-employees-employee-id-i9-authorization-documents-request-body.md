# PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody } from "openapi/models/operations";

let value: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody = {
  documents: [
    {
      documentType: "<value>",
      documentTitle: "<value>",
      issuingAuthority: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documents`                                                                                                                                                          | [operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsDocument](../../models/operations/put-v1-employees-employee-id-i9-authorization-documents-document.md)[] | :heavy_check_mark:                                                                                                                                                   | An array of I-9 verification documents                                                                                                                               |