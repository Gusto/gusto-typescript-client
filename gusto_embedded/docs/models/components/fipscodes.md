# FipsCodes

## Example Usage

```typescript
import { FipsCodes } from "gusto-embedded/models/components";

let value: FipsCodes = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | FIPS code for state or county                                                                              |
| `county`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Name of county in the state for the corresponding FIPS code. When `null` the FIPS code applies state wide. |