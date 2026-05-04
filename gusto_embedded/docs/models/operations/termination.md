# Termination

End of the historical employment period.

## Example Usage

```typescript
import { Termination } from "@gusto/embedded-api/models/operations/putv1historicalemployees.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: Termination = {
  effectiveDate: new RFCDate("2022-01-01"),
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `effectiveDate`                                                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                                                                | :heavy_check_mark:                                                                                                                               | Last day of employment (termination date). This is recorded on the employment; use the calendar date the person stopped working for the company. | 2022-01-01                                                                                                                                       |