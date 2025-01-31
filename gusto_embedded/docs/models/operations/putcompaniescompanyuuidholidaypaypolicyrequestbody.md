# PutCompaniesCompanyUuidHolidayPayPolicyRequestBody

## Example Usage

```typescript
import { PutCompaniesCompanyUuidHolidayPayPolicyRequestBody } from "@gusto/embedded-api/models/operations";

let value: PutCompaniesCompanyUuidHolidayPayPolicyRequestBody = {
  version: "<value>",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                         | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field. |
| `federalHolidays`                                                                                                                                                 | [operations.PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays](../../models/operations/putcompaniescompanyuuidholidaypaypolicyfederalholidays.md)            | :heavy_minus_sign:                                                                                                                                                | An object containing federal holiday objects, each containing a boolean selected property.                                                                        |