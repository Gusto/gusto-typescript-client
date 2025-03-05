# PostV1PlaidProcessorTokenRequestBody

## Example Usage

```typescript
import { PostV1PlaidProcessorTokenRequestBody } from "@gusto/embedded-api/models/operations/postv1plaidprocessortoken.js";

let value: PostV1PlaidProcessorTokenRequestBody = {
  ownerType: "Company",
  ownerId: "<id>",
  processorToken: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ownerType`                                                  | [operations.OwnerType](../../models/operations/ownertype.md) | :heavy_check_mark:                                           | The owner type of the bank account                           |
| `ownerId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The owner UUID of the bank account                           |
| `processorToken`                                             | *string*                                                     | :heavy_check_mark:                                           | The Plaid processor token                                    |