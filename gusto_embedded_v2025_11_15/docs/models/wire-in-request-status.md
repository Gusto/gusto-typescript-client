# WireInRequestStatus

Status of the wire in

## Example Usage

```typescript
import { WireInRequestStatus } from "openapi/models";

let value: WireInRequestStatus = "awaiting_funds";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"awaiting_funds" | "pending_review" | "approved" | "canceled" | Unrecognized<string>
```