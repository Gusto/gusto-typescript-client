# I9AuthorizationDocumentsRequestBody

Request body for creating an employee's I-9 authorization verification documents.

## Example Usage

```typescript
import { I9AuthorizationDocumentsRequestBody } from "@gusto/embedded-api/models/components/i9authorizationdocumentsrequestbody.js";

let value: I9AuthorizationDocumentsRequestBody = {
  documents: [
    {
      documentType: "us_passport",
      documentTitle: "US Passport",
      documentNumber: "F12345678",
      expirationDate: "2026-01-01",
      issuingAuthority: "USA",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documents`                                                                                                                                           | [components.Documents](../../models/components/documents.md)[]                                                                                        | :heavy_check_mark:                                                                                                                                    | An array of I-9 verification documents. Every request must contain the complete list of documents for the employee, as previous records are replaced. |