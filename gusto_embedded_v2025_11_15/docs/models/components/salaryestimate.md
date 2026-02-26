# SalaryEstimate

A salary estimate calculation for an S-Corp owner based on occupation, experience level, location, and business revenue.

## Example Usage

```typescript
import { SalaryEstimate } from "@gusto/embedded-api-v2025-11-15/models/components/salaryestimate.js";

let value: SalaryEstimate = {
  uuid: "23ce0526-a4d7-4ff9-9c58-19f16a77c941",
  employeeUuid: "<id>",
  annualNetRevenue: "<value>",
  zipCode: "65281-1598",
  createdAt: new Date("2024-12-17T14:52:38.765Z"),
  updatedAt: new Date("2026-01-15T06:58:43.715Z"),
  occupations: [
    {
      code: "<value>",
      experienceLevel: "skilled",
      timePercentage: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `uuid`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The UUID of the salary estimate.                                                              |
| `employeeUuid`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The UUID of the employee this salary estimate is for.                                         |
| `employeeJobUuid`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the employee job this salary estimate is associated with (once accepted).         |
| `annualNetRevenue`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | The annual net revenue of the business used for salary calculations.                          |
| `zipCode`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ZIP code used for location-based salary calculations.                                     |
| `result`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | The calculated reasonable salary estimate in cents. Null if not yet calculated.               |
| `acceptedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when this salary estimate was accepted and finalized.                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when this salary estimate was created.                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when this salary estimate was last updated.                                     |
| `occupations`                                                                                 | [components.Occupations](../../models/components/occupations.md)[]                            | :heavy_check_mark:                                                                            | Array of occupations with their experience levels and time allocations.                       |