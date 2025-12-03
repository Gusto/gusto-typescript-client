# PayrollCreditBlockerUnblockOptionSubmitBankScreenshot

Unblock option to resolve a credit blocker by submitting a bank screenshot

## Example Usage

```typescript
import { PayrollCreditBlockerUnblockOptionSubmitBankScreenshot } from "@gusto/embedded-api/models/components/payrollcreditblockerunblockoptionsubmitbankscreenshot.js";

let value: PayrollCreditBlockerUnblockOptionSubmitBankScreenshot = {
  unblockType: "submit_bank_screenshot",
  checkDate: "<value>",
  metadata: {
    informationRequestUuid: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `unblockType`                                                                                                                                                        | *"submit_bank_screenshot"*                                                                                                                                           | :heavy_check_mark:                                                                                                                                                   | The type of unblock option for the credit blocker                                                                                                                    |
| `checkDate`                                                                                                                                                          | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The payment check date associated with the unblock option                                                                                                            |
| `metadata`                                                                                                                                                           | [components.PayrollCreditBlockerUnblockOptionSubmitBankScreenshotMetadata](../../models/components/payrollcreditblockerunblockoptionsubmitbankscreenshotmetadata.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |