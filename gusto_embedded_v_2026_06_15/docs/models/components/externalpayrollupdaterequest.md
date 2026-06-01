# ExternalPayrollUpdateRequest

The request body for updating an external payroll with employee payroll items.

## Example Usage

```typescript
import { ExternalPayrollUpdateRequest } from "@gusto/embedded-api-v-2026-06-15/models/components/externalpayrollupdaterequest.js";

let value: ExternalPayrollUpdateRequest = {
  externalPayrollItems: [],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `replaceFields`                                                                                                                              | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Patch update external payroll items when set to true, otherwise it will overwrite the previous changes.                                      |
| `externalPayrollItems`                                                                                                                       | [components.ExternalPayrollUpdateRequestExternalPayrollItems](../../models/components/externalpayrollupdaterequestexternalpayrollitems.md)[] | :heavy_check_mark:                                                                                                                           | Payroll items for each employee in the external payroll.                                                                                     |