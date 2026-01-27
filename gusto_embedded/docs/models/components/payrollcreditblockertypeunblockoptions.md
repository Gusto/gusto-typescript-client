# PayrollCreditBlockerTypeUnblockOptions


## Supported Types

### `components.PayrollCreditBlockerUnblockOptionSubmitWire`

```typescript
const value: components.PayrollCreditBlockerUnblockOptionSubmitWire = {
  unblockType: "submit_wire",
  checkDate: "<value>",
  metadata: {
    wireInAmount: "<value>",
    wireInDeadline: new Date("2025-02-04T09:58:20.700Z"),
    wireInRequestUuid: "<id>",
  },
};
```

### `components.PayrollCreditBlockerUnblockOptionSubmitBankScreenshot`

```typescript
const value: components.PayrollCreditBlockerUnblockOptionSubmitBankScreenshot =
  {
    unblockType: "submit_bank_screenshot",
    checkDate: "<value>",
    metadata: {
      informationRequestUuid: "<id>",
    },
  };
```

### `components.PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi`

```typescript
const value:
  components.PayrollCreditBlockerUnblockOptionRespondToHighRiskFraudRfi = {
    unblockType: "respond_to_high_risk_fraud_rfi",
    checkDate: "<value>",
    metadata: {
      informationRequestUuid: "<id>",
    },
  };
```

### `components.PayrollCreditBlockerUnblockOptionWaitForReverseWire`

```typescript
const value: components.PayrollCreditBlockerUnblockOptionWaitForReverseWire = {
  unblockType: "wait_for_reverse_wire",
  checkDate: "<value>",
  metadata: {},
};
```

