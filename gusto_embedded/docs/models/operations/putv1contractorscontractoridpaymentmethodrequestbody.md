# PutV1ContractorsContractorIdPaymentMethodRequestBody

## Example Usage

```typescript
import { PutV1ContractorsContractorIdPaymentMethodRequestBody } from "@gusto/embedded-api/models/operations";

let value: PutV1ContractorsContractorIdPaymentMethodRequestBody = {
  version: "<value>",
  type: "Check",
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                                               | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.                       |
| `type`                                                                                                                                                                                  | [operations.PutV1ContractorsContractorIdPaymentMethodType](../../models/operations/putv1contractorscontractoridpaymentmethodtype.md)                                                    | :heavy_check_mark:                                                                                                                                                                      | The payment method type. If type is Direct Deposit, the contractor is required to have a bank account.<br/>see [Bank account endpoint](./post-v1-contractors-contractor_uuid-bank_accounts) |