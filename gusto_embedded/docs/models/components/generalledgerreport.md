# GeneralLedgerReport

Successful response for general ledger report generation

## Example Usage

```typescript
import { GeneralLedgerReport } from "@gusto/embedded-api/models/components/generalledgerreport.js";

let value: GeneralLedgerReport = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `payrollUuid`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The UUID of the payroll record for which the report was generated |
| `aggregation`                                                     | [components.Aggregation](../../models/components/aggregation.md)  | :heavy_minus_sign:                                                | The breakdown level used for the report                           |
| `requestUuid`                                                     | *string*                                                          | :heavy_minus_sign:                                                | UUID to use for polling the report status                         |