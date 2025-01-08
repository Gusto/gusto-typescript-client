# ReportTemplate

Example response

## Example Usage

```typescript
import { ReportTemplate } from "gusto_embedded/models/components";

let value: ReportTemplate = {};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `columns`                     | *string*[]                    | :heavy_minus_sign:            | List of columns recommended   |
| `groupings`                   | *string*[]                    | :heavy_minus_sign:            | List of groupings recommended |
| `companyUuid`                 | *string*                      | :heavy_minus_sign:            | Company UUID                  |
| `reportType`                  | *string*                      | :heavy_minus_sign:            | Type of report template       |