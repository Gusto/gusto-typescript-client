# PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody

## Example Usage

```typescript
import { PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody } from "@gusto/embedded-api/models/operations/postpayrollspayrolluuidreportsgeneralledger.js";

let value: PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody = {
  aggregation: "job",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `aggregation`                                                    | [operations.Aggregation](../../models/operations/aggregation.md) | :heavy_check_mark:                                               | The breakdown of the report. Use 'default' for no split.         |