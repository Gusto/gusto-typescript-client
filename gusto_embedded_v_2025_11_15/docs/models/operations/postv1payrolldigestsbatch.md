# PostV1PayrollDigestsBatch

## Example Usage

```typescript
import { PostV1PayrollDigestsBatch } from "@gusto/embedded-api-v-2025-11-15/models/operations/postv1payrolldigests.js";

let value: PostV1PayrollDigestsBatch = {
  entityType: "company",
  uuid: "a46fb2bd-5e43-4a60-b6ea-da244884f3b8",
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityType`                                                                                                                                                  | [operations.PostV1PayrollDigestsEntityType](../../models/operations/postv1payrolldigestsentitytype.md)                                                        | :heavy_check_mark:                                                                                                                                            | The type of entity to look up.                                                                                                                                | company                                                                                                                                                       |
| `uuid`                                                                                                                                                        | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The UUID of a company that the partner is mapped to. Companies that the partner is not authorized to access will appear in the response's `exclusions` array. |                                                                                                                                                               |