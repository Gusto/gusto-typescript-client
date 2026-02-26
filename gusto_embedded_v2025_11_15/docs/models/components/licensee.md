# Licensee

The licensed payroll processor

## Example Usage

```typescript
import { Licensee } from "@gusto/embedded-api-v2025-11-15/models/components/payrollreceipt.js";

let value: Licensee = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "Gusto, Zenpayroll Inc." |
| `address`                                        | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "525 20th St"            |
| `city`                                           | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "San Francisco"          |
| `state`                                          | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "CA"                     |
| `postalCode`                                     | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "94107"                  |
| `phoneNumber`                                    | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "4157778888"             |