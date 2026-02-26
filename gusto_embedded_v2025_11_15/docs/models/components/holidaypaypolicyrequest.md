# HolidayPayPolicyRequest

Request body for creating or updating a holiday pay policy

## Example Usage

```typescript
import { HolidayPayPolicyRequest } from "@gusto/embedded-api-v2025-11-15/models/components/holidaypaypolicyrequest.js";

let value: HolidayPayPolicyRequest = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `federalHolidays`                                                                                                      | [components.HolidayPayPolicyRequestFederalHolidays](../../models/components/holidaypaypolicyrequestfederalholidays.md) | :heavy_minus_sign:                                                                                                     | An object containing federal holiday objects, each containing a boolean selected property.                             |