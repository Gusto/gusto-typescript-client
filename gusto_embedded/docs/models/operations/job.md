# Job

Hire date for the historical job used to build employments and filings.

## Example Usage

```typescript
import { Job } from "@gusto/embedded-api/models/operations/putv1historicalemployees.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: Job = {
  hireDate: new RFCDate("2020-01-01"),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `hireDate`                                                                | [RFCDate](../../types/rfcdate.md)                                         | :heavy_check_mark:                                                        | First calendar day the employee was employed in this role at the company. | 2020-01-01                                                                |