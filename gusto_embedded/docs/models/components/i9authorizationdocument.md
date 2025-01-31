# I9AuthorizationDocument

An employee's I-9 verification document

## Example Usage

```typescript
import { I9AuthorizationDocument } from "@gusto/embedded-api/models/components";

let value: I9AuthorizationDocument = {
  uuid: "91f8c064-4c97-40ff-b308-fe945e723417",
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