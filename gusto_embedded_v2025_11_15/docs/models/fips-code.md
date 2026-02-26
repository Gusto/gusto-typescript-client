# FipsCode

## Example Usage

```typescript
import { FipsCode } from "openapi/models";

let value: FipsCode = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | FIPS code for state or county                                                                              |
| `county`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Name of county in the state for the corresponding FIPS code. When `null` the FIPS code applies state wide. |