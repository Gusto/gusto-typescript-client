# EmployeeSection603HighEarnerStatusCreateRequest

Request body for creating an employee's Section 603 high earner status

## Example Usage

```typescript
import { EmployeeSection603HighEarnerStatusCreateRequest } from "openapi/models";

let value: EmployeeSection603HighEarnerStatusCreateRequest = {
  effectiveYear: 2026,
  isHighEarner: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `effectiveYear`                                                              | *number*                                                                     | :heavy_check_mark:                                                           | The year for which this high earner status applies                           | 2026                                                                         |
| `isHighEarner`                                                               | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether the employee is classified as a high earner for Section 603 purposes | true                                                                         |