# BulkReportGeneralLedgerItem

A general ledger report entry in a bulk batch.

## Example Usage

```typescript
import { BulkReportGeneralLedgerItem } from "@gusto/embedded-api-v-2026-06-15/models/components/bulkreportgeneralledgeritem.js";

let value: BulkReportGeneralLedgerItem = {
  companyUuid: "12345678-abcd-ef12-3456-7890abcdef12",
  reportType: "general_ledger",
  payrollUuid: "a42598ba-6b52-4d8c-89a7-9db2a1a480a9",
  aggregation: "job",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | UUID of the company to generate the report for. The partner must be mapped to this company.                           | 12345678-abcd-ef12-3456-7890abcdef12                                                                                  |
| `reportType`                                                                                                          | *"general_ledger"*                                                                                                    | :heavy_check_mark:                                                                                                    | Identifies this batch item as a general ledger report.                                                                | general_ledger                                                                                                        |
| `payrollUuid`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The UUID of the payroll to generate the general ledger for.                                                           |                                                                                                                       |
| `aggregation`                                                                                                         | [components.Aggregation](../../models/components/aggregation.md)                                                      | :heavy_check_mark:                                                                                                    | The breakdown of the report. Use `default` for no split.                                                              |                                                                                                                       |
| `integrationType`                                                                                                     | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The kind of integration set up for the company. Required when `aggregation` is `integration`; must be null otherwise. |                                                                                                                       |