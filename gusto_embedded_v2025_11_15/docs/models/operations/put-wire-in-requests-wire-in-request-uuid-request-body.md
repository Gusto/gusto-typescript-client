# PutWireInRequestsWireInRequestUuidRequestBody

## Example Usage

```typescript
import { PutWireInRequestsWireInRequestUuidRequestBody } from "openapi/models/operations";

let value: PutWireInRequestsWireInRequestUuidRequestBody = {
  dateSent: "<value>",
  bankName: "<value>",
  amountSent: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `dateSent`                        | *string*                          | :heavy_check_mark:                | The date the wire was sent        |
| `bankName`                        | *string*                          | :heavy_check_mark:                | Name of the bank sending the wire |
| `amountSent`                      | *string*                          | :heavy_check_mark:                | Amount of money sent              |
| `additionalNotes`                 | *string*                          | :heavy_minus_sign:                | Additional notes                  |