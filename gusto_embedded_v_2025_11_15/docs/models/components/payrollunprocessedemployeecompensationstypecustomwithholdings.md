# PayrollUnprocessedEmployeeCompensationsTypeCustomWithholdings

The one-time custom withholding overrides applied to this payroll for this employee.
`federal` is null when no federal one-time override is set; `state` is an empty
array when no state one-time overrides are set.


## Example Usage

```typescript
import { PayrollUnprocessedEmployeeCompensationsTypeCustomWithholdings } from "@gusto/embedded-api-v-2025-11-15/models/components/payrollunprocessedemployeecompensationstype.js";

let value: PayrollUnprocessedEmployeeCompensationsTypeCustomWithholdings = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `federal`                                                                                                                                      | [components.PayrollUnprocessedEmployeeCompensationsTypeFederal](../../models/components/payrollunprocessedemployeecompensationstypefederal.md) | :heavy_minus_sign:                                                                                                                             | Federal one-time custom withholding override applied to this payroll.                                                                          |
| `state`                                                                                                                                        | [components.PayrollUnprocessedEmployeeCompensationsTypeState](../../models/components/payrollunprocessedemployeecompensationstypestate.md)[]   | :heavy_minus_sign:                                                                                                                             | State one-time custom withholding overrides applied to this payroll, one entry per state field.                                                |