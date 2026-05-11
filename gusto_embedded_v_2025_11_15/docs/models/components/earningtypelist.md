# EarningTypeList

Lists of default and custom earning types for a company.

## Example Usage

```typescript
import { EarningTypeList } from "@gusto/embedded-api-v-2025-11-15/models/components/earningtypelist.js";

let value: EarningTypeList = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `default`                                                          | [components.EarningType](../../models/components/earningtype.md)[] | :heavy_minus_sign:                                                 | The default earning types for the company.                         |
| `custom`                                                           | [components.EarningType](../../models/components/earningtype.md)[] | :heavy_minus_sign:                                                 | The custom earning types for the company.                          |