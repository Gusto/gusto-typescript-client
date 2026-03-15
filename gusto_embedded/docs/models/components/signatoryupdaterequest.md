# SignatoryUpdateRequest

Request body for updating a signatory. Email cannot be updated.

## Example Usage

```typescript
import { SignatoryUpdateRequest } from "@gusto/embedded-api/models/components/signatoryupdaterequest.js";

let value: SignatoryUpdateRequest = {
  version: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `version`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Current version of the signatory (required for optimistic concurrency).                                      |
| `firstName`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `lastName`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `title`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `phone`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `birthday`                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                            | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `homeAddress`                                                                                                | [components.SignatoryUpdateRequestHomeAddress](../../models/components/signatoryupdaterequesthomeaddress.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |