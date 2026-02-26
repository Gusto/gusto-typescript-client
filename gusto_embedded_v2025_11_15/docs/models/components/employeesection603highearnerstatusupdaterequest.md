# EmployeeSection603HighEarnerStatusUpdateRequest

Request body for updating an employee's Section 603 high earner status

## Example Usage

```typescript
import { EmployeeSection603HighEarnerStatusUpdateRequest } from "@gusto/embedded-api-v2025-11-15/models/components/employeesection603highearnerstatusupdaterequest.js";

let value: EmployeeSection603HighEarnerStatusUpdateRequest = {
  isHighEarner: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `isHighEarner`                                                               | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether the employee is classified as a high earner for Section 603 purposes | true                                                                         |