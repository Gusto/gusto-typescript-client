# Job

Hire date for the historical job used to build employments and filings.

## Example Usage

```typescript
import { Job } from "@gusto/embedded-api-v-2026-06-15/models/operations/putv1historicalemployees.js";

let value: Job = {
  hireDate: new Date("2020-01-01"),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `hireDate`                                                                | [Date](../../types/rfcdate.md)                                            | :heavy_check_mark:                                                        | First calendar day the employee was employed in this role at the company. | 2020-01-01                                                                |