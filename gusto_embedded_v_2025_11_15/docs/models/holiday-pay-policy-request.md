# HolidayPayPolicyRequest

Request body for creating or updating a holiday pay policy

## Example Usage

```typescript
import { HolidayPayPolicyRequest } from "openapi/models";

let value: HolidayPayPolicyRequest = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `federalHolidays`                                                                                         | [models.HolidayPayPolicyRequestFederalHolidays](../models/holiday-pay-policy-request-federal-holidays.md) | :heavy_minus_sign:                                                                                        | An object containing federal holiday objects, each containing a boolean selected property.                |