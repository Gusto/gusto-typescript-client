# PutV1ExternalPayrollRequestBody

## Example Usage

```typescript
import { PutV1ExternalPayrollRequestBody } from "openapi/models/operations";

let value: PutV1ExternalPayrollRequestBody = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `replaceFields`                                                                                         | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | Patch update external payroll items when set to true, otherwise it will overwrite the previous changes. |
| `externalPayrollItems`                                                                                  | [operations.ExternalPayrollItem](../../models/operations/external-payroll-item.md)[]                    | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |