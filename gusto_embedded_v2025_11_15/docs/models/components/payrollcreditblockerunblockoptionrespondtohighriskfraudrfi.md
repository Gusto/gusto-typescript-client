# PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi

Unblock option to resolve a credit blocker by responding to high risk fraud RFI

## Example Usage

```typescript
import { PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi } from "@gusto/embedded-api-v2025-11-15/models/components/payrollcreditblockerunblockoptionrespondtohighriskfraudrfi.js";

let value: PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi = {
  unblockType: "respond_to_high_risk_fraud_rfi",
  checkDate: "<value>",
  metadata: {
    informationRequestUuid: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `unblockType`                                                                                                                                                                  | *"respond_to_high_risk_fraud_rfi"*                                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of unblock option for the credit blocker                                                                                                                              |
| `checkDate`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The payment check date associated with the unblock option                                                                                                                      |
| `metadata`                                                                                                                                                                     | [components.PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfiMetadata](../../models/components/payrollcreditblockerunblockoptionrespondtohighriskfraudrfimetadata.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |