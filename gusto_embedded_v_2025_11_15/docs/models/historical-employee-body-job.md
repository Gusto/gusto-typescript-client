# HistoricalEmployeeBodyJob

Hire date for the historical job used to build employments and filings.

## Example Usage

```typescript
import { HistoricalEmployeeBodyJob } from "openapi/models";

let value: HistoricalEmployeeBodyJob = {
  hireDate: new Date("2020-01-01"),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `hireDate`                                                                | [Date](../types/rfcdate.md)                                               | :heavy_check_mark:                                                        | First calendar day the employee was employed in this role at the company. | 2020-01-01                                                                |