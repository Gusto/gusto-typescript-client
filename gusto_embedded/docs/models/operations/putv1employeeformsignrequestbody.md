# PutV1EmployeeFormSignRequestBody

## Example Usage

```typescript
import { PutV1EmployeeFormSignRequestBody } from "gusto_embedded/models/operations";

let value: PutV1EmployeeFormSignRequestBody = {
  signatureText: "<value>",
  agree: false,
  signedByIpAddress: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `signatureText`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | The signature                                                                          |
| `agree`                                                                                | *boolean*                                                                              | :heavy_check_mark:                                                                     | whether you agree to sign electronically                                               |
| `signedByIpAddress`                                                                    | *string*                                                                               | :heavy_check_mark:                                                                     | The IP address of the signatory who signed the form. Both IPv4 AND IPv6 are supported. |