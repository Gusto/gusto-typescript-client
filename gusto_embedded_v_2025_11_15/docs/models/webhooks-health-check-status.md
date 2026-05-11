# WebhooksHealthCheckStatus

The representation of a webhooks health check response

## Example Usage

```typescript
import { WebhooksHealthCheckStatus } from "openapi/models";

let value: WebhooksHealthCheckStatus = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [models.WebhooksHealthCheckStatusStatus](../models/webhooks-health-check-status-status.md)    | :heavy_minus_sign:                                                                            | Latest health status of the webhooks system                                                   |
| `lastCheckedAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | ISO8601 timestamp of the last successful health check with millisecond precision              |