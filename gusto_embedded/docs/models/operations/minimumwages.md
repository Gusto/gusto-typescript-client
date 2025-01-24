# MinimumWages

The minimum wage record you want to apply to the compensation

## Example Usage

```typescript
import { MinimumWages } from "gusto-embedded/models/operations";

let value: MinimumWages = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uuid`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The UUID of the minimum wage record. Required if adjust_for_minimum_wage set to true |