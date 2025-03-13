# GetV1PaymentReceiptsPayrollsPayrollUuidResponse

## Example Usage

```typescript
import { GetV1PaymentReceiptsPayrollsPayrollUuidResponse } from "@gusto/embedded-api/models/operations/getv1paymentreceiptspayrollspayrolluuid.js";

let value: GetV1PaymentReceiptsPayrollsPayrollUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `httpMeta`                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `payrollReceipt`                                                       | [components.PayrollReceipt](../../models/components/payrollreceipt.md) | :heavy_minus_sign:                                                     | Example response                                                       |