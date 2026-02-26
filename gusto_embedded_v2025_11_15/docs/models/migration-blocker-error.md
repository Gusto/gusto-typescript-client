# MigrationBlockerError

## Example Usage

```typescript
import { MigrationBlockerError } from "openapi/models";

let value: MigrationBlockerError = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `errorKey`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Error key                                                                  |
| `category`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Error category                                                             |
| `message`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | Blocker message                                                            |
| `metadata`                                                                 | [models.MigrationBlockerMetadata](../models/migration-blocker-metadata.md) | :heavy_minus_sign:                                                         | N/A                                                                        |