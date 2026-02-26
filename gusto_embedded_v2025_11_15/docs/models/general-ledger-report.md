# GeneralLedgerReport

Successful response for general ledger report generation

## Example Usage

```typescript
import { GeneralLedgerReport } from "openapi/models";

let value: GeneralLedgerReport = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `payrollUuid`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The UUID of the payroll record for which the report was generated                                             |
| `aggregation`                                                                                                 | [models.Aggregation](../models/aggregation.md)                                                                | :heavy_minus_sign:                                                                                            | The breakdown level used for the report                                                                       |
| `integrationType`                                                                                             | [models.IntegrationType](../models/integration-type.md)                                                       | :heavy_minus_sign:                                                                                            | The `integration_type` used for the report, if `aggregation` was 'integration.' Otherwise, this will be null. |
| `requestUuid`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | UUID to use for polling the report status                                                                     |