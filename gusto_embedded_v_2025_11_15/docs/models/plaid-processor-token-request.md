# PlaidProcessorTokenRequest

Request body for creating a verified company bank account from a Plaid processor token.

## Example Usage

```typescript
import { PlaidProcessorTokenRequest } from "openapi/models";

let value: PlaidProcessorTokenRequest = {
  ownerType: "Company",
  ownerId: "<id>",
  processorToken: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `ownerType`                                 | [models.OwnerType](../models/owner-type.md) | :heavy_check_mark:                          | The owner type of the bank account          |
| `ownerId`                                   | *string*                                    | :heavy_check_mark:                          | The owner UUID of the bank account          |
| `processorToken`                            | *string*                                    | :heavy_check_mark:                          | The Plaid processor token                   |