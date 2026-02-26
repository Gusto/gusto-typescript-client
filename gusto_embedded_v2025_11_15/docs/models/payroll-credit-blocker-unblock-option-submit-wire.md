# PayrollCreditBlockerUnblockOptionSubmitWire

Unblock option to resolve a credit blocker by submitting a wire transfer

## Example Usage

```typescript
import { PayrollCreditBlockerUnblockOptionSubmitWire } from "openapi/models";

let value: PayrollCreditBlockerUnblockOptionSubmitWire = {
  unblockType: "submit_wire",
  checkDate: "<value>",
  metadata: {
    wireInAmount: "<value>",
    wireInDeadline: new Date("2026-05-20T03:54:45.526Z"),
    wireInRequestUuid: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `unblockType`                                                                                                                         | *"submit_wire"*                                                                                                                       | :heavy_check_mark:                                                                                                                    | The type of unblock option for the credit blocker                                                                                     |
| `checkDate`                                                                                                                           | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The payment check date associated with the unblock option                                                                             |
| `metadata`                                                                                                                            | [models.PayrollCreditBlockerUnblockOptionSubmitWireMetadata](../models/payroll-credit-blocker-unblock-option-submit-wire-metadata.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |