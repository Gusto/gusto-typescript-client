# CreateReport

Example response

## Example Usage

```typescript
import { CreateReport } from "gusto_embedded/models/components";

let value: CreateReport = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `requestUuid`                             | *string*                                  | :heavy_minus_sign:                        | A unique identifier of the report request |
| `companyUuid`                             | *string*                                  | :heavy_minus_sign:                        | Company UUID                              |
| `customName`                              | *string*                                  | :heavy_minus_sign:                        | Title of the report                       |
| `fileType`                                | *string*                                  | :heavy_minus_sign:                        | File type                                 |