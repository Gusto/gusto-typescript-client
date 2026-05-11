# ExternalPayrollUpdateRequest

The request body for updating an external payroll with employee payroll items.

## Example Usage

```typescript
import { ExternalPayrollUpdateRequest } from "openapi/models";

let value: ExternalPayrollUpdateRequest = {
  externalPayrollItems: [],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `externalPayrollItems`                                                                                                         | [models.ExternalPayrollUpdateRequestExternalPayrollItem](../models/external-payroll-update-request-external-payroll-item.md)[] | :heavy_check_mark:                                                                                                             | Payroll items for each employee in the external payroll.                                                                       |