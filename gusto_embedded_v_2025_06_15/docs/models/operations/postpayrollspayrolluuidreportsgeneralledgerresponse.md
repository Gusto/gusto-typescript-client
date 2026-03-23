# PostPayrollsPayrollUuidReportsGeneralLedgerResponse

## Example Usage

```typescript
import { PostPayrollsPayrollUuidReportsGeneralLedgerResponse } from "@gusto/embedded-api/models/operations/postpayrollspayrolluuidreportsgeneralledger.js";

let value: PostPayrollsPayrollUuidReportsGeneralLedgerResponse = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `generalLedgerReport`                                                            | [components.GeneralLedgerReport](../../models/components/generalledgerreport.md) | :heavy_minus_sign:                                                               | Successful response for general ledger report generation                         |