# Errors

## Example Usage

```typescript
import { Errors } from "gusto_embedded/models/errors";

let value: Errors = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `errorKey`                                         | *string*                                           | :heavy_minus_sign:                                 | The string "base"                                  |
| `category`                                         | *string*                                           | :heavy_minus_sign:                                 | The string "payroll_blocker"                       |
| `message`                                          | *string*                                           | :heavy_minus_sign:                                 | Human readable description of the payroll blocker  |
| `metadata`                                         | [errors.Metadata](../../models/errors/metadata.md) | :heavy_minus_sign:                                 | N/A                                                |