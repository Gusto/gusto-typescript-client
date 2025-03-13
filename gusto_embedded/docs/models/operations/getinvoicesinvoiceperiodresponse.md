# GetInvoicesInvoicePeriodResponse

## Example Usage

```typescript
import { GetInvoicesInvoicePeriodResponse } from "@gusto/embedded-api/models/operations/getinvoicesinvoiceperiod.js";

let value: GetInvoicesInvoicePeriodResponse = {
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
| `invoiceData`                                                      | [components.InvoiceData](../../models/components/invoicedata.md)   | :heavy_minus_sign:                                                 | Example response                                                   |