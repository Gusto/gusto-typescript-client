# SignatoryUpdateRequest

Request body for updating a signatory. Email cannot be updated.

## Example Usage

```typescript
import { SignatoryUpdateRequest } from "openapi/models";

let value: SignatoryUpdateRequest = {
  version: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `version`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | Current version of the signatory (required for optimistic concurrency).                        |
| `firstName`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `middleInitial`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `lastName`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `title`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `phone`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `birthday`                                                                                     | [Date](../types/rfcdate.md)                                                                    | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ssn`                                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | The signatory's SSN.                                                                           |
| `homeAddress`                                                                                  | [models.SignatoryUpdateRequestHomeAddress](../models/signatory-update-request-home-address.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |