# CreateBulkReport

## Example Usage

```typescript
import { CreateBulkReport } from "@gusto/embedded-api-v-2026-06-15/models/components/createbulkreport.js";

let value: CreateBulkReport = {
  uuid: "00e7fbfb-19b5-4bf0-878d-4e520b2de866",
  status: "failed",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                                                                                                               | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Unique identifier of the bulk report batch.                                                                                                                                                          |
| `status`                                                                                                                                                                                             | [components.Status](../../models/components/status.md)                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                   | The batch's processing state.<br/>- `pending`: accepted, not yet started<br/>- `processing`: reports are being generated<br/>- `completed`: all reports finished<br/>- `failed`: the batch failed before completing<br/> |