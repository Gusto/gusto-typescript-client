# NotificationStatus

Represents the notification's status as managed by our system. It is updated based on observable system events and internal business logic, and does not reflect resolution steps taken outside our system. This field is read-only and cannot be modified via the API.

## Example Usage

```typescript
import { NotificationStatus } from "openapi/models";

let value: NotificationStatus = "expired";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "resolved" | "expired" | Unrecognized<string>
```