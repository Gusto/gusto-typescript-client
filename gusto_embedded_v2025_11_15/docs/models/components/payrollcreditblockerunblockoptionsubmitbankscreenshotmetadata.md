# PayrollCreditBlockerUnblockOptionSubmitBankScreenshotMetadata

## Example Usage

```typescript
import { PayrollCreditBlockerUnblockOptionSubmitBankScreenshotMetadata } from "@gusto/embedded-api-v2025-11-15/models/components/payrollcreditblockerunblockoptionsubmitbankscreenshot.js";

let value: PayrollCreditBlockerUnblockOptionSubmitBankScreenshotMetadata = {
  informationRequestUuid: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `informationRequestUuid`                                             | *string*                                                             | :heavy_check_mark:                                                   | UUID of the information request                                      |
| `bankAccountLastFourDigits`                                          | *string*                                                             | :heavy_minus_sign:                                                   | Last 4 digits of the bank account number for the bank screenshot RFI |