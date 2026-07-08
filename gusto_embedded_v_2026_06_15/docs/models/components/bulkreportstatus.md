# BulkReportStatus

Overall batch status. `pending`/`processing` while in progress; once finished, `success` (all reports succeeded), `partial_success` (some succeeded, some failed), or `failed` (none succeeded).

## Example Usage

```typescript
import { BulkReportStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/bulkreport.js";

let value: BulkReportStatus = "pending";
```

## Values

```typescript
"pending" | "processing" | "success" | "partial_success" | "failed"
```