# GetCompaniesDepartmentsResponse

## Example Usage

```typescript
import { GetCompaniesDepartmentsResponse } from "@gusto/embedded-api-v2025-11-15/models/operations/getcompaniesdepartments.js";

let value: GetCompaniesDepartmentsResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `departmentList`                                                   | [components.Department](../../models/components/department.md)[]   | :heavy_minus_sign:                                                 | List of departments                                                |