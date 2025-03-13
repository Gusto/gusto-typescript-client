# I9AuthorizationDocument

An employee's I-9 verification document

## Example Usage

```typescript
import { I9AuthorizationDocument } from "@gusto/embedded-api/models/components/i9authorizationdocument.js";

let value: I9AuthorizationDocument = {
  uuid: "d717d709-fd9e-4d79-abd0-c7ac8261bfc6",
  documentType: "<value>",
  documentTitle: "<value>",
  issuingAuthority: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `uuid`                                    | *string*                                  | :heavy_check_mark:                        | The UUID of the I-9 verification document |
| `documentType`                            | *string*                                  | :heavy_check_mark:                        | The document's document type              |
| `documentTitle`                           | *string*                                  | :heavy_check_mark:                        | The document's document title             |
| `expirationDate`                          | *string*                                  | :heavy_minus_sign:                        | The document's expiration date            |
| `issuingAuthority`                        | *string*                                  | :heavy_check_mark:                        | The document's issuing authority          |