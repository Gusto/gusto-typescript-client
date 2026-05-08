# WireInRequestUpdateRequestBody

## Example Usage

```typescript
import { WireInRequestUpdateRequestBody } from "@gusto/embedded-api/models/components/wireinrequestupdaterequestbody.js";

let value: WireInRequestUpdateRequestBody = {
  dateSent: "2024-06-10",
  bankName: "Chase",
  amountSent: "314500.00",
  additionalNotes: "Wire for 2024-06-15 payroll.",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `dateSent`                        | *string*                          | :heavy_check_mark:                | The date the wire was sent        | 2024-06-10                        |
| `bankName`                        | *string*                          | :heavy_check_mark:                | Name of the bank sending the wire | Chase                             |
| `amountSent`                      | *string*                          | :heavy_check_mark:                | Amount of money sent              | 314500.00                         |
| `additionalNotes`                 | *string*                          | :heavy_minus_sign:                | Additional notes                  | Wire for 2024-06-15 payroll.      |