# PayrollShowCustomWithholdings

The one-time custom withholding overrides applied to this payroll for this employee.
`federal` is null when no federal one-time override is set; `state` is an empty
array when no state one-time overrides are set.


## Example Usage

```typescript
import { PayrollShowCustomWithholdings } from "@gusto/embedded-api/models/components/payrollshow.js";

let value: PayrollShowCustomWithholdings = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `federal`                                                                                       | [components.PayrollShowFederal](../../models/components/payrollshowfederal.md)                  | :heavy_minus_sign:                                                                              | Federal one-time custom withholding override applied to this payroll.                           |
| `state`                                                                                         | [components.PayrollShowState](../../models/components/payrollshowstate.md)[]                    | :heavy_minus_sign:                                                                              | State one-time custom withholding overrides applied to this payroll, one entry per state field. |