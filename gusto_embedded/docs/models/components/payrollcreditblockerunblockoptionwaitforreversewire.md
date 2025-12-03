# PayrollCreditBlockerUnblockOptionWaitForReverseWire

Unblock option to resolve a credit blocker by waiting for reverse wire

## Example Usage

```typescript
import { PayrollCreditBlockerUnblockOptionWaitForReverseWire } from "@gusto/embedded-api/models/components/payrollcreditblockerunblockoptionwaitforreversewire.js";

let value: PayrollCreditBlockerUnblockOptionWaitForReverseWire = {
  unblockType: "wait_for_reverse_wire",
  checkDate: "<value>",
  metadata: {},
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `unblockType`                                                                                                                                                    | *"wait_for_reverse_wire"*                                                                                                                                        | :heavy_check_mark:                                                                                                                                               | The type of unblock option for the credit blocker                                                                                                                |
| `checkDate`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The payment check date associated with the unblock option                                                                                                        |
| `metadata`                                                                                                                                                       | [components.PayrollCreditBlockerUnblockOptionWaitForReverseWireMetadata](../../models/components/payrollcreditblockerunblockoptionwaitforreversewiremetadata.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |