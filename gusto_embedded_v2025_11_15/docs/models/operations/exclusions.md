# Exclusions

## Example Usage

```typescript
import { Exclusions } from "@gusto/embedded-api-v2025-11-15/models/operations/getv1peoplebatchespeoplebatchuuid.js";

let value: Exclusions = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `externalId`                               | *string*                                   | :heavy_minus_sign:                         | The external ID of the excluded item(s)    |
| `reasonCode`                               | *string*                                   | :heavy_minus_sign:                         | The reason code for exclusion              |
| `message`                                  | *string*                                   | :heavy_minus_sign:                         | Human-readable explanation for exclusion   |
| `itemCount`                                | *number*                                   | :heavy_minus_sign:                         | Number of items affected by this exclusion |