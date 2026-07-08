# GeneralLedgerReportBody

Request body for generating a general ledger report. The report can be aggregated by different dimensions such as job or department.

## Example Usage

```typescript
import { GeneralLedgerReportBody } from "@gusto/embedded-api-v-2026-06-15/models/components/generalledgerreportbody.js";

let value: GeneralLedgerReportBody = {
  aggregation: "department",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aggregation`                                                                                                                                     | [components.GeneralLedgerReportBodyAggregation](../../models/components/generalledgerreportbodyaggregation.md)                                    | :heavy_check_mark:                                                                                                                                | The breakdown of the report. Use 'default' for no split.                                                                                          |
| `integrationType`                                                                                                                                 | [components.IntegrationType](../../models/components/integrationtype.md)                                                                          | :heavy_minus_sign:                                                                                                                                | The kind of integration set up for the company. Required when `aggregation` is 'integration'. Must be null if `aggregation` is not 'integration'. |