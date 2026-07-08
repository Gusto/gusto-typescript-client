# BulkReportItemResult

A single report's outcome.

## Example Usage

```typescript
import { BulkReportItemResult } from "@gusto/embedded-api-v-2026-02-01/models/components/bulkreportitemresult.js";

let value: BulkReportItemResult = {
  reportType: "custom_report",
  fileType: "image",
  status: "success",
  error: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `reportType`                                                                                           | [components.BulkReportItemResultReportType](../../models/components/bulkreportitemresultreporttype.md) | :heavy_check_mark:                                                                                     | Which report this entry refers to.                                                                     |
| `fileType`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | The report's output file type.                                                                         |
| `status`                                                                                               | [components.BulkReportItemResultStatus](../../models/components/bulkreportitemresultstatus.md)         | :heavy_check_mark:                                                                                     | The terminal state for this individual report.                                                         |
| `error`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | A user-facing error message when status is `failed`. Null on success.                                  |