# MigrationBlockerErrors

## Example Usage

```typescript
import { MigrationBlockerErrors } from "@gusto/embedded-api-v2025-11-15/models/errors/migrationblocker.js";

let value: MigrationBlockerErrors = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `errorKey`                                         | *string*                                           | :heavy_minus_sign:                                 | Error key                                          |
| `category`                                         | *string*                                           | :heavy_minus_sign:                                 | Error category                                     |
| `message`                                          | *string*                                           | :heavy_minus_sign:                                 | Blocker message                                    |
| `metadata`                                         | [errors.Metadata](../../models/errors/metadata.md) | :heavy_minus_sign:                                 | N/A                                                |