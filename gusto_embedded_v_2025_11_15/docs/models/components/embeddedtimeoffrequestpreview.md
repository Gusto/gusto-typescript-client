# EmbeddedTimeOffRequestPreview

Preview of the balance impact for a time off request before it is created or updated.

## Example Usage

```typescript
import { EmbeddedTimeOffRequestPreview } from "@gusto/embedded-api-v-2025-11-15/models/components/embeddedtimeoffrequestpreview.js";

let value: EmbeddedTimeOffRequestPreview = {
  balanceHours: "64.0",
  thisRequestHours: "16.0",
  otherRequestedHours: "0.0",
  remainingBalanceHours: "48.0",
  allowNegativeBalance: false,
  unlimited: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `balanceHours`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | The employee's current available balance hours for this policy. Null for unlimited policies. | 64.0                                                                                         |
| `thisRequestHours`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | The total hours for this time off request.                                                   | 16.0                                                                                         |
| `otherRequestedHours`                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | Hours from other pending or approved requests for this policy.                               | 0.0                                                                                          |
| `remainingBalanceHours`                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | The projected balance after this request is applied. Null for unlimited policies.            | 48.0                                                                                         |
| `allowNegativeBalance`                                                                       | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether the time off policy allows a negative balance.                                       | false                                                                                        |
| `unlimited`                                                                                  | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether the time off policy provides unlimited time off.                                     | false                                                                                        |