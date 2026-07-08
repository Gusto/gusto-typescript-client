# CustomWithholdings

The one-time custom withholding overrides applied to this payroll for this employee.
`federal` is null when no federal one-time override is set; `state` is an empty
array when no state one-time overrides are set.


## Example Usage

```typescript
import { CustomWithholdings } from "@gusto/embedded-api-v-2025-11-15/models/components/payrollemployeecompensationstype.js";

let value: CustomWithholdings = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `federal`                                                                                       | [components.Federal](../../models/components/federal.md)                                        | :heavy_minus_sign:                                                                              | Federal one-time custom withholding override applied to this payroll.                           |
| `state`                                                                                         | [components.State](../../models/components/state.md)[]                                          | :heavy_minus_sign:                                                                              | State one-time custom withholding overrides applied to this payroll, one entry per state field. |