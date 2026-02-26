# WebhooksHealthCheckStatus

The representation of a webhooks health check response

## Example Usage

```typescript
import { WebhooksHealthCheckStatus } from "@gusto/embedded-api-v2025-11-15/models/components/webhookshealthcheckstatus.js";

let value: WebhooksHealthCheckStatus = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                 | [components.WebhooksHealthCheckStatusStatus](../../models/components/webhookshealthcheckstatusstatus.md) | :heavy_minus_sign:                                                                                       | Latest health status of the webhooks system                                                              |
| `lastCheckedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | ISO8601 timestamp of the last successful health check with millisecond precision                         |