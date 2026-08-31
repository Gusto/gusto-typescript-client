# ReverseWireTransactionStatus

Current status of the reverse wire transaction.
- `pending_processing`: The reverse wire has been initiated and is awaiting processing by the banking network.
- `processed`: The reverse wire was successfully settled and funds have been received.
- `rejected`: The reverse wire was rejected by the receiving bank (e.g. invalid account, insufficient funds).
- `failed`: The reverse wire failed during processing due to a system or network error.


## Example Usage

```typescript
import { ReverseWireTransactionStatus } from "@gusto/embedded-api-v-2025-11-15/models/components/reversewiretransaction.js";

let value: ReverseWireTransactionStatus = "pending_processing";
```

## Values

```typescript
"pending_processing" | "processed" | "rejected" | "failed"
```