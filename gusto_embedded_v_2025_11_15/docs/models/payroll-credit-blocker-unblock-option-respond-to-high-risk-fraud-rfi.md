# PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi

Unblock option to resolve a credit blocker by responding to high risk fraud RFI

## Example Usage

```typescript
import { PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi } from "openapi/models";

let value: PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi = {
  unblockType: "respond_to_high_risk_fraud_rfi",
  checkDate: "<value>",
  metadata: {
    informationRequestUuid: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `unblockType`                                                                                                                                                           | *"respond_to_high_risk_fraud_rfi"*                                                                                                                                      | :heavy_check_mark:                                                                                                                                                      | The type of unblock option for the credit blocker                                                                                                                       |
| `checkDate`                                                                                                                                                             | *string*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | The payment check date associated with the unblock option                                                                                                               |
| `metadata`                                                                                                                                                              | [models.PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfiMetadata](../models/payroll-credit-blocker-unblock-option-respond-to-high-risk-fraud-rfi-metadata.md) | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |