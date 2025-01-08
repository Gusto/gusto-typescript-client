# PutV1ContractorDocumentSignRequestBody

## Example Usage

```typescript
import { PutV1ContractorDocumentSignRequestBody } from "gusto_embedded/models/operations";

let value: PutV1ContractorDocumentSignRequestBody = {
  fields: [
    {},
  ],
  agree: false,
  signedByIpAddress: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `fields`                                                 | [operations.Fields](../../models/operations/fields.md)[] | :heavy_check_mark:                                       | List of fields and the values they will be set to.       |
| `agree`                                                  | *boolean*                                                | :heavy_check_mark:                                       | Whether you agree to sign electronically                 |
| `signedByIpAddress`                                      | *string*                                                 | :heavy_check_mark:                                       | The IP address of the signatory who signed the form.     |