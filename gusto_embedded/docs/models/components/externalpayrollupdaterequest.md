# ExternalPayrollUpdateRequest

The request body for updating an external payroll with employee payroll items.

## Example Usage

```typescript
import { ExternalPayrollUpdateRequest } from "@gusto/embedded-api/models/components/externalpayrollupdaterequest.js";

let value: ExternalPayrollUpdateRequest = {
  externalPayrollItems: [],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `externalPayrollItems`                                                                                                                       | [components.ExternalPayrollUpdateRequestExternalPayrollItems](../../models/components/externalpayrollupdaterequestexternalpayrollitems.md)[] | :heavy_check_mark:                                                                                                                           | Payroll items for each employee in the external payroll.                                                                                     |