# HistoricalEmployeeBodyTermination

End of the historical employment period.

## Example Usage

```typescript
import { HistoricalEmployeeBodyTermination } from "openapi/models";

let value: HistoricalEmployeeBodyTermination = {
  effectiveDate: new Date("2022-01-01"),
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `effectiveDate`                                                                                                                                  | [Date](../types/rfcdate.md)                                                                                                                      | :heavy_check_mark:                                                                                                                               | Last day of employment (termination date). This is recorded on the employment; use the calendar date the person stopped working for the company. | 2022-01-01                                                                                                                                       |