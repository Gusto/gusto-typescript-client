# WorkAddress

Primary work location for this historical employment row.

## Example Usage

```typescript
import { WorkAddress } from "@gusto/embedded-api/models/operations/putv1historicalemployees.js";

let value: WorkAddress = {
  locationUuid: "1da85d35-1910-40a7-9c1f-8e2b3d4c5a6f",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `locationUuid`                                                       | *string*                                                             | :heavy_check_mark:                                                   | UUID of a company work location from the company locations response. | 1da85d35-1910-40a7-9c1f-8e2b3d4c5a6f                                 |