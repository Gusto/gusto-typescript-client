# EmployeeSection603HighEarnerStatus

The representation of an employee's Section 603 high earner status for a specific year. Section 603 of the SECURE 2.0 Act requires employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold to have their catch-up contributions to pre-tax retirement benefits designated as post-tax contributions.

## Example Usage

```typescript
import { EmployeeSection603HighEarnerStatus } from "@gusto/embedded-api/models/components/employeesection603highearnerstatus.js";

let value: EmployeeSection603HighEarnerStatus = {
  id: "<id>",
  effectiveYear: 459040,
  isHighEarner: true,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The unique identifier of the Section 603 high earner status record                                                                   |
| `effectiveYear`                                                                                                                      | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The year for which this high earner status applies                                                                                   |
| `isHighEarner`                                                                                                                       | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | Whether the employee is classified as a high earner for Section 603 purposes. Can be null if the status has not yet been determined. |