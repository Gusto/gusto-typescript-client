# PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody

## Example Usage

```typescript
import { PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody } from "openapi/models/operations";

let value: PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody = {
  aggregation: "job",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aggregation`                                                                                                                                     | [operations.Aggregation](../../models/operations/aggregation.md)                                                                                  | :heavy_check_mark:                                                                                                                                | The breakdown of the report. Use 'default' for no split.                                                                                          |
| `integrationType`                                                                                                                                 | [operations.IntegrationType](../../models/operations/integration-type.md)                                                                         | :heavy_minus_sign:                                                                                                                                | The kind of integration set up for the company. Required when `aggregation` is 'integration'. Must be null if `aggregation` is not 'integration'. |