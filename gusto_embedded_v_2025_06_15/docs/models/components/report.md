# Report

Example response

## Example Usage

```typescript
import { Report } from "@gusto/embedded-api/models/components/report.js";

let value: Report = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `requestUuid`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | A unique identifier of the report request                                             |
| `status`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | Current status of the report, possible values are 'succeeded', 'pending', or 'failed' |
| `reportUrls`                                                                          | *string*[]                                                                            | :heavy_minus_sign:                                                                    | The array of urls to access the report                                                |