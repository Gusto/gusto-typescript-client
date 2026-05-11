# Result

## Example Usage

```typescript
import { Result } from "openapi/models";

let value: Result = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `externalId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | The external ID provided in the batch request.                                               |
| `role`                                                                                       | [models.Role](../models/role.md)                                                             | :heavy_minus_sign:                                                                           | The type of person created.                                                                  |
| `status`                                                                                     | [models.PeopleBatchResultsStatusEmployee](../models/people-batch-results-status-employee.md) | :heavy_minus_sign:                                                                           | The status of this batch item.                                                               |
| `idx`                                                                                        | *number*                                                                                     | :heavy_minus_sign:                                                                           | The index of this item in the original batch request.                                        |
| `uuid`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The UUID of the created person.                                                              |
| `employeeUuid`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | The UUID of the created employee (if role is employee).                                      |
| `errors`                                                                                     | [models.PeopleBatchResultsError2](../models/people-batch-results-error2.md)[]                | :heavy_minus_sign:                                                                           | Errors encountered while processing this batch item.                                         |