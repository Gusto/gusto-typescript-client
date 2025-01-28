# Documents

## Example Usage

```typescript
import { Documents } from "openapi/models/operations";

let value: Documents = {
  documentType: "<value>",
  documentTitle: "<value>",
  issuingAuthority: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `documentType`                                       | *string*                                             | :heavy_check_mark:                                   | The document type                                    |
| `documentTitle`                                      | *string*                                             | :heavy_check_mark:                                   | The document title associated with the document type |
| `documentNumber`                                     | *string*                                             | :heavy_minus_sign:                                   | The document's document number                       |
| `expirationDate`                                     | *string*                                             | :heavy_minus_sign:                                   | The document's expiration date                       |
| `issuingAuthority`                                   | *string*                                             | :heavy_check_mark:                                   | The document's issuing authority                     |