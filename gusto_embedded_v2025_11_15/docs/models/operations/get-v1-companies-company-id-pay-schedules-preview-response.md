# GetV1CompaniesCompanyIdPaySchedulesPreviewResponse

Pay schedule preview

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPaySchedulesPreviewResponse } from "openapi/models/operations";

let value: GetV1CompaniesCompanyIdPaySchedulesPreviewResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `payPeriods`                                                    | [operations.PayPeriod](../../models/operations/pay-period.md)[] | :heavy_minus_sign:                                              | A list of pay periods for the previewed pay schedule            |
| `holidays`                                                      | *string*[]                                                      | :heavy_minus_sign:                                              | A list of dates for bank closures                               |