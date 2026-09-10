# WebhookSubscriptionStatus

The status of the webhook subscription.

## Example Usage

```typescript
import { WebhookSubscriptionStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/webhooksubscription.js";

let value: WebhookSubscriptionStatus = "unreachable";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "verified" | "removed" | "unreachable" | Unrecognized<string>
```