# BulkReportCompanyStatus

This company's overall status across its `reports`:
- `success`: every report succeeded
- `partial_success`: some succeeded, some failed
- `failed`: every report failed
- `pending`: at least one report is still being generated


## Example Usage

```typescript
import { BulkReportCompanyStatus } from "@gusto/embedded-api/models/components/bulkreportcompany.js";

let value: BulkReportCompanyStatus = "failed";
```

## Values

```typescript
"pending" | "success" | "partial_success" | "failed"
```