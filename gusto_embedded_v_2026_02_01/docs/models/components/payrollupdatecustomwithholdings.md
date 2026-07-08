# PayrollUpdateCustomWithholdings

Optional per-payroll one-time custom withholdings for federal and/or state income tax.
When provided, the supplied override takes precedence over any persistent withholding schedule for this run.
This field is in limited release; if your application does not have access, requests including it are silently ignored.


## Example Usage

```typescript
import { PayrollUpdateCustomWithholdings } from "@gusto/embedded-api-v-2026-02-01/models/components/payrollupdate.js";

let value: PayrollUpdateCustomWithholdings = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `federal`                                                                          | [components.PayrollUpdateFederal](../../models/components/payrollupdatefederal.md) | :heavy_minus_sign:                                                                 | Federal one-time custom withholding override.                                      |
| `state`                                                                            | [components.PayrollUpdateState](../../models/components/payrollupdatestate.md)[]   | :heavy_minus_sign:                                                                 | State one-time custom withholding overrides, one entry per state field.            |