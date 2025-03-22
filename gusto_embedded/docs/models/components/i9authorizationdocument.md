# I9AuthorizationDocument

An employee's I-9 verification document

## Example Usage

```typescript
import { I9AuthorizationDocument } from "@gusto/embedded-api/models/components/i9authorizationdocument.js";

let value: I9AuthorizationDocument = {
  uuid: "a5c68c7f-cdf6-49ba-9f44-ec39b5697c06",
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