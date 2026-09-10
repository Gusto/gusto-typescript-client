# PayrollBatchConflictErrorErrors

## Example Usage

```typescript
import { PayrollBatchConflictErrorErrors } from "@gusto/embedded-api-v-2026-06-15/models/errors/payrollbatchconflicterror.js";

let value: PayrollBatchConflictErrorErrors = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `errorKey`                                         | *string*                                           | :heavy_minus_sign:                                 | The key identifying the error source.              |
| `category`                                         | *string*                                           | :heavy_minus_sign:                                 | The error category.                                |
| `message`                                          | *string*                                           | :heavy_minus_sign:                                 | Human-readable error message.                      |
| `metadata`                                         | [errors.Metadata](../../models/errors/metadata.md) | :heavy_minus_sign:                                 | N/A                                                |