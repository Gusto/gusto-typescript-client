# BulkReportItem

A single report inside a bulk batch. Required fields depend on `report_type`: `custom_report` requires `columns` and `file_type`; `general_ledger` requires `payroll_uuid` and `aggregation`.


## Supported Types

### `components.BulkReportCustomReportItem`

```typescript
const value: components.BulkReportCustomReportItem = {
  companyUuid: "12345678-abcd-ef12-3456-7890abcdef12",
  reportType: "custom_report",
  columns: [
    "gross_earnings",
  ],
  fileType: "csv",
  startDate: new RFCDate("2026-01-01"),
  endDate: new RFCDate("2026-03-31"),
};
```

### `components.BulkReportGeneralLedgerItem`

```typescript
const value: components.BulkReportGeneralLedgerItem = {
  companyUuid: "12345678-abcd-ef12-3456-7890abcdef12",
  reportType: "general_ledger",
  payrollUuid: "a42598ba-6b52-4d8c-89a7-9db2a1a480a9",
  aggregation: "job",
};
```

