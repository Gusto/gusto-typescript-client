# PutV1CompanyFormSignRequestBody

## Example Usage

```typescript
import { PutV1CompanyFormSignRequestBody } from "openapi/models/operations";

let value: PutV1CompanyFormSignRequestBody = {
  signatureText: "<value>",
  agree: false,
  signedByIpAddress: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `signatureText`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | The signature                                                                          |
| `agree`                                                                                | *boolean*                                                                              | :heavy_check_mark:                                                                     | Whether you agree to sign electronically                                               |
| `signedByIpAddress`                                                                    | *string*                                                                               | :heavy_check_mark:                                                                     | The IP address of the signatory who signed the form. Both IPv4 AND IPv6 are supported. |