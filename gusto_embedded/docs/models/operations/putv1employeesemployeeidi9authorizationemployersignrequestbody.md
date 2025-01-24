# PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody } from "gusto-embedded/models/operations";

let value: PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody = {
  signatureText: "<value>",
  signerTitle: "<value>",
  signedByIpAddress: "<value>",
  agree: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `signatureText`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | The signature                                                                          |
| `signerTitle`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The signer's job title                                                                 |
| `signedByIpAddress`                                                                    | *string*                                                                               | :heavy_check_mark:                                                                     | The IP address of the signatory who signed the form. Both IPv4 AND IPv6 are supported. |
| `agree`                                                                                | *boolean*                                                                              | :heavy_check_mark:                                                                     | Whether you agree to sign electronically                                               |
| `additionalInfo`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | Any additional notes                                                                   |
| `altProcedure`                                                                         | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether an alternative procedure authorized by DHS to examine documents was used       |