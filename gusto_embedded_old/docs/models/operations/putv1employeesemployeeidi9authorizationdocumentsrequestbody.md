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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `documents`                                                    | [operations.Documents](../../models/operations/documents.md)[] | :heavy_check_mark:                                             | An array of I-9 verification documents                         |