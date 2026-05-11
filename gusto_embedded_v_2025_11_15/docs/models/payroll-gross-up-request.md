# PayrollGrossUpRequest

Request body for calculating gross up amount

## Example Usage

```typescript
import { PayrollGrossUpRequest } from "openapi/models";

let value: PayrollGrossUpRequest = {
  employeeUuid: "<id>",
  netPay: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `employeeUuid`           | *string*                 | :heavy_check_mark:       | The UUID of the employee |
| `netPay`                 | *string*                 | :heavy_check_mark:       | Employee net earnings    |