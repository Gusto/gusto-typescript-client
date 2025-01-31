# EmployeeStateTaxAnswer

## Example Usage

```typescript
import { EmployeeStateTaxAnswer } from "@gusto/embedded-api/models/components";

let value: EmployeeStateTaxAnswer = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `value`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | The answer to the corresponding question - this may be a string, number, boolean, or null. |
| `validFrom`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | The effective date of the answer - currently always “2010-01-01”.                          |
| `validUpTo`                                                                                | *any*                                                                                      | :heavy_minus_sign:                                                                         | The effective end date of the answer - currently always null.                              |