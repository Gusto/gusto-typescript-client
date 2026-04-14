# PutV1CompaniesCompanyUuidHolidayPayPolicyRequestBody

Request body for creating or updating a holiday pay policy

## Example Usage

```typescript
import { PutV1CompaniesCompanyUuidHolidayPayPolicyRequestBody } from "@gusto/embedded-api/models/operations/putv1companiescompanyuuidholidaypaypolicy.js";

let value: PutV1CompaniesCompanyUuidHolidayPayPolicyRequestBody = {
  version: "56d00c178bc7393b2a206ed6a86afcb4",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                         | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field. | 56d00c178bc7393b2a206ed6a86afcb4                                                                                                                                  |
| `federalHolidays`                                                                                                                                                 | [operations.FederalHolidays](../../models/operations/federalholidays.md)                                                                                          | :heavy_minus_sign:                                                                                                                                                | An object containing federal holiday objects, each containing a boolean selected property.                                                                        |                                                                                                                                                                   |