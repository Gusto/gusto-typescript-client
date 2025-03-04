# PaymentMethodBankAccount

Representation of a bank account item

## Example Usage

```typescript
import { PaymentMethodBankAccount } from "@gusto/embedded-api/models/components";

let value: PaymentMethodBankAccount = {
  uuid: "b8ed099f-0830-49cc-8060-33354f5e2c07",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The bank account ID                                                                                                                      |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The bank account name                                                                                                                    |
| `hiddenAccountNumber`                                                                                                                    | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Masked bank account number                                                                                                               |
| `priority`                                                                                                                               | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The order of priority for each payment split, with priority 1 being the first bank account paid. Priority must be unique and sequential. |
| `splitAmount`                                                                                                                            | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The cents amount allocated for each payment split                                                                                        |