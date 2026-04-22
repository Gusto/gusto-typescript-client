# Documents

## Example Usage

```typescript
import { Documents } from "@gusto/embedded-api-v-2025-11-15/models/components/i9authorizationdocumentsrequestbody.js";

let value: Documents = {
  documentType: "us_passport",
  documentTitle: "US Passport",
  documentNumber: "F12345678",
  expirationDate: "2026-01-01",
  issuingAuthority: "USA",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `documentType`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | The document type. Use the document options endpoint to get the possible values. | us_passport                                                                      |
| `documentTitle`                                                                  | *string*                                                                         | :heavy_check_mark:                                                               | The document title associated with the document type                             | US Passport                                                                      |
| `documentNumber`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | The document's document number                                                   | F12345678                                                                        |
| `expirationDate`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | The document's expiration date                                                   | 2026-01-01                                                                       |
| `issuingAuthority`                                                               | *string*                                                                         | :heavy_check_mark:                                                               | The document's issuing authority                                                 | USA                                                                              |