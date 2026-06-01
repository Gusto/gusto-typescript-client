# Status

Represents the notification's status as managed by our system. It is updated based on observable system events and internal business logic, and does not reflect resolution steps taken outside our system. This field is read-only and cannot be modified via the API.

## Example Usage

```typescript
import { Status } from "@gusto/embedded-api-v-2026-06-15/models/components/notification.js";

let value: Status = "resolved";
```

## Values

```typescript
"open" | "resolved" | "expired"
```