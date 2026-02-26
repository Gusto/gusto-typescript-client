# FipsCodes

## Example Usage

```typescript
import { FipsCodes } from "@gusto/embedded-api-v2025-11-15/models/components/childsupportdata.js";

let value: FipsCodes = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | FIPS code for state or county                                                                              |
| `county`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Name of county in the state for the corresponding FIPS code. When `null` the FIPS code applies state wide. |