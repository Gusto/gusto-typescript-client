# Hourly

## Example Usage

```typescript
import { Hourly } from "@gusto/embedded-api-v2025-11-15/models/components/company.js";

let value: Hourly = {
  name: "Overtime",
  multiple: 1.5,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | The name of the hourly compensation rate.                                  | Overtime                                                                   |
| `multiple`                                                                 | *number*                                                                   | :heavy_minus_sign:                                                         | The amount multiplied by the base rate of a job to calculate compensation. | 1.5                                                                        |