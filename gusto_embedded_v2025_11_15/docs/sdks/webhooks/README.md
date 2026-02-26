# Webhooks

## Overview

### Available Operations

* [createSubscription](#createsubscription) - Create a webhook subscription
* [listSubscriptions](#listsubscriptions) - List webhook subscriptions
* [updateSubscription](#updatesubscription) - Update a webhook subscription
* [getSubscription](#getsubscription) - Get a webhook subscription
* [deleteSubscription](#deletesubscription) - Delete a webhook subscription
* [verify](#verify) - Verify the webhook subscription
* [requestVerificationToken](#requestverificationtoken) - Request the webhook subscription verification_token
* [getV1WebhooksHealthCheck](#getv1webhookshealthcheck) - Get the webhooks health status

## createSubscription

Create a webhook subscription to receive events of the specified subscription_types whenever there is a state change.

> 📘 System Access Authentication
>
> This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).

scope: `webhook_subscriptions:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-v1-webhook-subscription" method="post" path="/v1/webhook_subscriptions" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.createSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      url: "https://slow-median.com",
      subscriptionTypes: [
        "Location",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksCreateSubscription } from "openapi/funcs/webhooks-create-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksCreateSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      url: "https://slow-median.com",
      subscriptionTypes: [
        "Location",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksCreateSubscription failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-v1-webhook-subscription" method="post" path="/v1/webhook_subscriptions" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.createSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      url: "https://partner-app.com/subscriber",
      subscriptionTypes: [
        "Company",
        "Employee",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksCreateSubscription } from "openapi/funcs/webhooks-create-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksCreateSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      url: "https://partner-app.com/subscriber",
      subscriptionTypes: [
        "Company",
        "Employee",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksCreateSubscription failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-v1-webhook-subscription" method="post" path="/v1/webhook_subscriptions" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.createSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      url: "https://slow-median.com",
      subscriptionTypes: [
        "Location",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksCreateSubscription } from "openapi/funcs/webhooks-create-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksCreateSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      url: "https://slow-median.com",
      subscriptionTypes: [
        "Location",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksCreateSubscription failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-v1-webhook-subscription" method="post" path="/v1/webhook_subscriptions" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.createSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      url: "https://slow-median.com",
      subscriptionTypes: [
        "Location",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksCreateSubscription } from "openapi/funcs/webhooks-create-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksCreateSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      url: "https://slow-median.com",
      subscriptionTypes: [
        "Location",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksCreateSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1WebhookSubscriptionRequest](../../models/operations/post-v1-webhook-subscription-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostV1WebhookSubscriptionSecurity](../../models/operations/post-v1-webhook-subscription-security.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WebhookSubscription](../../models/webhook-subscription.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## listSubscriptions

Returns all webhook subscriptions associated with the provided Partner API token.

> 📘 System Access Authentication
>
> This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).

scope: `webhook_subscriptions:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-webhook-subscriptions" method="get" path="/v1/webhook_subscriptions" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.listSubscriptions({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksListSubscriptions } from "openapi/funcs/webhooks-list-subscriptions.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksListSubscriptions(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksListSubscriptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1WebhookSubscriptionsRequest](../../models/operations/get-v1-webhook-subscriptions-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetV1WebhookSubscriptionsSecurity](../../models/operations/get-v1-webhook-subscriptions-security.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WebhookSubscription[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## updateSubscription

Updates the Webhook Subscription associated with the provided UUID.

> 📘 System Access Authentication
>
> This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).

scope: `webhook_subscriptions:write`


### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-webhook-subscription-uuid" method="put" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.updateSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      subscriptionTypes: [
        "Payroll",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksUpdateSubscription } from "openapi/funcs/webhooks-update-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksUpdateSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      subscriptionTypes: [
        "Payroll",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksUpdateSubscription failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-webhook-subscription-uuid" method="put" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.updateSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      subscriptionTypes: [
        "Company",
        "Employee",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksUpdateSubscription } from "openapi/funcs/webhooks-update-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksUpdateSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      subscriptionTypes: [
        "Company",
        "Employee",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksUpdateSubscription failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-webhook-subscription-uuid" method="put" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.updateSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      subscriptionTypes: [
        "Payroll",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksUpdateSubscription } from "openapi/funcs/webhooks-update-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksUpdateSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      subscriptionTypes: [
        "Payroll",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksUpdateSubscription failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-webhook-subscription-uuid" method="put" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.updateSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      subscriptionTypes: [
        "Payroll",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksUpdateSubscription } from "openapi/funcs/webhooks-update-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksUpdateSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      subscriptionTypes: [
        "Payroll",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksUpdateSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1WebhookSubscriptionUuidRequest](../../models/operations/put-v1-webhook-subscription-uuid-request.md)                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PutV1WebhookSubscriptionUuidSecurity](../../models/operations/put-v1-webhook-subscription-uuid-security.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WebhookSubscription](../../models/webhook-subscription.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## getSubscription

Returns the Webhook Subscription associated with the provided UUID.

> 📘 System Access Authentication
>
> This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).

scope: `webhook_subscriptions:read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-webhook-subscription-uuid" method="get" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.getSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksGetSubscription } from "openapi/funcs/webhooks-get-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksGetSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksGetSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1WebhookSubscriptionUuidRequest](../../models/operations/get-v1-webhook-subscription-uuid-request.md)                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetV1WebhookSubscriptionUuidSecurity](../../models/operations/get-v1-webhook-subscription-uuid-security.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WebhookSubscription](../../models/webhook-subscription.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## deleteSubscription

Deletes the Webhook Subscription associated with the provided UUID.

> 📘 System Access Authentication
>
> This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).

scope: `webhook_subscriptions:write`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-webhook-subscription-uuid" method="delete" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  await sdk.webhooks.deleteSubscription({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksDeleteSubscription } from "openapi/funcs/webhooks-delete-subscription.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksDeleteSubscription(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("webhooksDeleteSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1WebhookSubscriptionUuidRequest](../../models/operations/delete-v1-webhook-subscription-uuid-request.md)                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteV1WebhookSubscriptionUuidSecurity](../../models/operations/delete-v1-webhook-subscription-uuid-security.md)                                                  | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## verify

When a webhook subscription is created, a `verification_token` is POSTed to the registered webhook subscription URL. This `verify` endpoint needs to be called with `verification_token` before webhook events can be sent to the registered webhook URL.

Use the /v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token API to resend the `verification_token` to the Subscriber.

> 📘 System Access Authentication
>
> This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).

scope: `webhook_subscriptions:write`


### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-verify-webhook-subscription-uuid" method="put" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.verify({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      verificationToken: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksVerify } from "openapi/funcs/webhooks-verify.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksVerify(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      verificationToken: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksVerify failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-verify-webhook-subscription-uuid" method="put" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.verify({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      verificationToken: "asefasedfe23e234easd",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksVerify } from "openapi/funcs/webhooks-verify.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksVerify(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      verificationToken: "asefasedfe23e234easd",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksVerify failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-verify-webhook-subscription-uuid" method="put" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.verify({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      verificationToken: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksVerify } from "openapi/funcs/webhooks-verify.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksVerify(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      verificationToken: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksVerify failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-verify-webhook-subscription-uuid" method="put" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.verify({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      verificationToken: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksVerify } from "openapi/funcs/webhooks-verify.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksVerify(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
    body: {
      verificationToken: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksVerify failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1VerifyWebhookSubscriptionUuidRequest](../../models/operations/put-v1-verify-webhook-subscription-uuid-request.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PutV1VerifyWebhookSubscriptionUuidSecurity](../../models/operations/put-v1-verify-webhook-subscription-uuid-security.md)                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WebhookSubscription](../../models/webhook-subscription.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## requestVerificationToken

Request that the webhook subscription `verification_token` be POSTed to the Subscription URL.

> 📘 System Access Authentication
>
> This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).

scope: `webhook_subscriptions:read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-webhook-subscription-verification-token-uuid" method="get" path="/v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  await sdk.webhooks.requestVerificationToken({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksRequestVerificationToken } from "openapi/funcs/webhooks-request-verification-token.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksRequestVerificationToken(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    webhookSubscriptionUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("webhooksRequestVerificationToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest](../../models/operations/get-v1-webhook-subscription-verification-token-uuid-request.md)                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetV1WebhookSubscriptionVerificationTokenUuidSecurity](../../models/operations/get-v1-webhook-subscription-verification-token-uuid-security.md)                    | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## getV1WebhooksHealthCheck

Returns the health status (`healthy`, `unhealthy`, or `unknown`) of the webhooks system based on the last ten minutes of activity.

📘 System Access Authentication

This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)

scope: `webhook_subscriptions:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-webhooks-health_check" method="get" path="/v1/webhooks/health_check" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.webhooks.getV1WebhooksHealthCheck({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { webhooksGetV1WebhooksHealthCheck } from "openapi/funcs/webhooks-get-v1-webhooks-health-check.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await webhooksGetV1WebhooksHealthCheck(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksGetV1WebhooksHealthCheck failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1WebhooksHealthCheckRequest](../../models/operations/get-v1-webhooks-health-check-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetV1WebhooksHealthCheckSecurity](../../models/operations/get-v1-webhooks-health-check-security.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WebhooksHealthCheckStatus](../../models/webhooks-health-check-status.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |