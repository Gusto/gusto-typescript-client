# Errors

## Example Usage

```typescript
import { Errors } from "@gusto/embedded-api/models/operations/getv1peoplebatchespeoplebatchuuid.js";

let value: Errors = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `errorKey`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The key identifying the error source                                                                                       |
| `category`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The error category                                                                                                         |
| `message`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Human-readable error message                                                                                               |
| `errors`                                                                                                                   | [operations.GetV1PeopleBatchesPeopleBatchUuidErrors](../../models/operations/getv1peoplebatchespeoplebatchuuiderrors.md)[] | :heavy_minus_sign:                                                                                                         | Nested errors for sub-operations                                                                                           |