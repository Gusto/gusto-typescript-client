# I9AuthorizationDocument

An employee's I-9 verification document

## Example Usage

```typescript
import { I9AuthorizationDocument } from "openapi/models";

let value: I9AuthorizationDocument = {
  uuid: "2e4cb251-e6fb-4470-b57f-1c8429163bcb",
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