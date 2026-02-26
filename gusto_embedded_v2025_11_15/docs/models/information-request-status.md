# InformationRequestStatus

The status of the information request

## Example Usage

```typescript
import { InformationRequestStatus } from "openapi/models";

let value: InformationRequestStatus = "approved";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending_response" | "pending_review" | "approved" | Unrecognized<string>
```