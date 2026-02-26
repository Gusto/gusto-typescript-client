# Exclusion

## Example Usage

```typescript
import { Exclusion } from "openapi/models/operations";

let value: Exclusion = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `externalId`                               | *string*                                   | :heavy_minus_sign:                         | The external ID of the excluded item(s)    |
| `reasonCode`                               | *string*                                   | :heavy_minus_sign:                         | The reason code for exclusion              |
| `message`                                  | *string*                                   | :heavy_minus_sign:                         | Human-readable explanation for exclusion   |
| `itemCount`                                | *number*                                   | :heavy_minus_sign:                         | Number of items affected by this exclusion |