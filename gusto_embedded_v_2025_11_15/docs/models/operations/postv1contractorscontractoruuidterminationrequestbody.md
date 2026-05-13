# PostV1ContractorsContractorUuidTerminationRequestBody

## Example Usage

```typescript
import { PostV1ContractorsContractorUuidTerminationRequestBody } from "@gusto/embedded-api-v-2025-11-15/models/operations/postv1contractorscontractoruuidtermination.js";
import { RFCDate } from "@gusto/embedded-api-v-2025-11-15/types/rfcdate.js";

let value: PostV1ContractorsContractorUuidTerminationRequestBody = {
  endDate: new RFCDate("2025-06-15"),
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `endDate`                         | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | The date of dismissal             | 2025-06-15                        |