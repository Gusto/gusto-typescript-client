# PutV1ExternalPayrollRequestBody

## Example Usage

```typescript
import { PutV1ExternalPayrollRequestBody } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1externalpayroll.js";

let value: PutV1ExternalPayrollRequestBody = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `replaceFields`                                                                                         | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | Patch update external payroll items when set to true, otherwise it will overwrite the previous changes. |
| `externalPayrollItems`                                                                                  | [operations.ExternalPayrollItems](../../models/operations/externalpayrollitems.md)[]                    | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |