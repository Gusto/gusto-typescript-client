# PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse

## Example Usage

```typescript
import { PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse } from "@gusto/embedded-api/models/operations/postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecks.js";

let value:
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse = {
    httpMeta: {
      response: new Response("{\"message\": \"hello world\"}", {
        headers: { "Content-Type": "application/json" },
      }),
      request: new Request("https://example.com"),
    },
  };
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `payrollCheck`                                                     | [components.PayrollCheck](../../models/components/payrollcheck.md) | :heavy_minus_sign:                                                 | Example response                                                   |