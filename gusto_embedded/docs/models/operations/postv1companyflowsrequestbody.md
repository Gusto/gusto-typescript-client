# PostV1CompanyFlowsRequestBody

## Example Usage

```typescript
import { PostV1CompanyFlowsRequestBody } from "gusto_embedded/models/operations";

let value: PostV1CompanyFlowsRequestBody = {
  flowType: "<value>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flowType`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | flow type                                                                                                                                                |
| `entityUuid`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | UUID of the target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details. |
| `entityType`                                                                                                                                             | [operations.EntityType](../../models/operations/entitytype.md)                                                                                           | :heavy_minus_sign:                                                                                                                                       | the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details. |