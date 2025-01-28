# GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody

Pay schedule preview

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody } from "openapi/models/operations";

let value: GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `payPeriods`                                                     | [operations.PayPeriods](../../models/operations/payperiods.md)[] | :heavy_minus_sign:                                               | A list of pay periods for the previewed pay schedule             |
| `holidays`                                                       | *string*[]                                                       | :heavy_minus_sign:                                               | A list of dates for bank closures                                |