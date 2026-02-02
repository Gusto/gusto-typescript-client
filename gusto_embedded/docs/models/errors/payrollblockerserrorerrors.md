# PayrollBlockersErrorErrors

## Example Usage

```typescript
import { PayrollBlockersErrorErrors } from "@gusto/embedded-api/models/errors/payrollblockerserror.js";

let value: PayrollBlockersErrorErrors = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `errorKey`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | The string "base"                                                                          |
| `category`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | The string "payroll_blocker"                                                               |
| `message`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Human readable description of the payroll blocker                                          |
| `metadata`                                                                                 | [errors.PayrollBlockersErrorMetadata](../../models/errors/payrollblockerserrormetadata.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |