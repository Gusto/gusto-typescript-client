# PutV1ContractorsContractorIdPaymentMethodType

The payment method type. If type is Direct Deposit, the contractor is required to have a bank account.
see [Bank account endpoint](./post-v1-contractors-contractor_uuid-bank_accounts)

## Example Usage

```typescript
import { PutV1ContractorsContractorIdPaymentMethodType } from "gusto_embedded/models/operations";

let value: PutV1ContractorsContractorIdPaymentMethodType = "Check";
```

## Values

```typescript
"Direct Deposit" | "Check"
```