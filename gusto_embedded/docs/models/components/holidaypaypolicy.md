# HolidayPayPolicy

Representation of a Holiday Pay Policy

## Example Usage

```typescript
import { HolidayPayPolicy } from "@gusto/embedded-api/models/components";

let value: HolidayPayPolicy = {
  version: "<value>",
  companyUuid: "<id>",
  federalHolidays: [
    {},
  ],
  employees: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                                     | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field. |
| `companyUuid`                                                                                                                                                                 | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | A unique identifier for the company owning the holiday pay policy                                                                                                             |
| `federalHolidays`                                                                                                                                                             | [components.FederalHolidays](../../models/components/federalholidays.md)[]                                                                                                    | :heavy_check_mark:                                                                                                                                                            | List of the eleven supported federal holidays and their details                                                                                                               |
| `employees`                                                                                                                                                                   | [components.HolidayPayPolicyEmployees](../../models/components/holidaypaypolicyemployees.md)[]                                                                                | :heavy_check_mark:                                                                                                                                                            | List of employee uuids under a time off policy                                                                                                                                |