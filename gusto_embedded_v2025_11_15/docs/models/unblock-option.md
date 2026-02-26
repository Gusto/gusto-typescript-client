# UnblockOption


## Supported Types

### `models.PayrollCreditBlockerUnblockOptionSubmitWire`

```typescript
const value: models.PayrollCreditBlockerUnblockOptionSubmitWire = {
  unblockType: "submit_wire",
  checkDate: "<value>",
  metadata: {
    wireInAmount: "<value>",
    wireInDeadline: new Date("2026-05-20T03:54:45.526Z"),
    wireInRequestUuid: "<id>",
  },
};
```

### `models.PayrollCreditBlockerUnblockOptionSubmitBankScreenshot`

```typescript
const value: models.PayrollCreditBlockerUnblockOptionSubmitBankScreenshot = {
  unblockType: "submit_bank_screenshot",
  checkDate: "<value>",
  metadata: {
    informationRequestUuid: "<id>",
  },
};
```

### `models.PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi`

```typescript
const value: models.PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi =
  {
    unblockType: "respond_to_high_risk_fraud_rfi",
    checkDate: "<value>",
    metadata: {
      informationRequestUuid: "<id>",
    },
  };
```

### `models.PayrollCreditBlockerUnblockOptionWaitForReverseWire`

```typescript
const value: models.PayrollCreditBlockerUnblockOptionWaitForReverseWire = {
  unblockType: "wait_for_reverse_wire",
  checkDate: "<value>",
  metadata: {},
};
```

