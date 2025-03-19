# PostV1WebhookSubscriptionRequest

## Example Usage

```typescript
import { PostV1WebhookSubscriptionRequest } from "@gusto/embedded-api/models/operations/postv1webhooksubscription.js";

let value: PostV1WebhookSubscriptionRequest = {
  requestBody: {
    url: "https://giving-orchid.net/",
    subscriptionTypes: [
      "BankAccount",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1WebhookSubscriptionRequestBody](../../models/operations/postv1webhooksubscriptionrequestbody.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |