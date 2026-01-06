# PayrollCreditBlockerUnblockOptionSubmitWire

Unblock option to resolve a credit blocker by submitting a wire transfer

## Example Usage

```typescript
import { PayrollCreditBlockerUnblockOptionSubmitWire } from "@gusto/embedded-api/models/components/payrollcreditblockerunblockoptionsubmitwire.js";

let value: PayrollCreditBlockerUnblockOptionSubmitWire = {
  unblockType: "submit_wire",
  checkDate: "<value>",
  metadata: {
    wireInAmount: "<value>",
    wireInDeadline: new Date("2025-02-04T09:58:20.700Z"),
    wireInRequestUuid: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `unblockType`                                                                                                                                    | *"submit_wire"*                                                                                                                                  | :heavy_check_mark:                                                                                                                               | The type of unblock option for the credit blocker                                                                                                |
| `checkDate`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The payment check date associated with the unblock option                                                                                        |
| `metadata`                                                                                                                                       | [components.PayrollCreditBlockerUnblockOptionSubmitWireMetadata](../../models/components/payrollcreditblockerunblockoptionsubmitwiremetadata.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |