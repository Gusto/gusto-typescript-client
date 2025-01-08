# PostPayrollsGrossUpPayrollUuidRequestBody

## Example Usage

```typescript
import { PostPayrollsGrossUpPayrollUuidRequestBody } from "gusto_embedded/models/operations";

let value: PostPayrollsGrossUpPayrollUuidRequestBody = {
  employeeUuid: "<id>",
  netPay: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `employeeUuid`        | *string*              | :heavy_check_mark:    | Employee UUID         |
| `netPay`              | *string*              | :heavy_check_mark:    | Employee net earnings |