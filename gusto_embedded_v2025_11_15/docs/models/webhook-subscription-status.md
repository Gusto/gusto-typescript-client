# WebhookSubscriptionStatus

The status of the webhook subscription.

## Example Usage

```typescript
import { WebhookSubscriptionStatus } from "openapi/models";

let value: WebhookSubscriptionStatus = "unreachable";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "verified" | "removed" | "unreachable" | Unrecognized<string>
```