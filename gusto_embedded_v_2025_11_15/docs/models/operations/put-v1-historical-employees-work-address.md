# PutV1HistoricalEmployeesWorkAddress

Primary work location for this historical employment row.

## Example Usage

```typescript
import { PutV1HistoricalEmployeesWorkAddress } from "openapi/models/operations";

let value: PutV1HistoricalEmployeesWorkAddress = {
  locationUuid: "1da85d35-1910-40a7-9c1f-8e2b3d4c5a6f",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `locationUuid`                                                       | *string*                                                             | :heavy_check_mark:                                                   | UUID of a company work location from the company locations response. | 1da85d35-1910-40a7-9c1f-8e2b3d4c5a6f                                 |