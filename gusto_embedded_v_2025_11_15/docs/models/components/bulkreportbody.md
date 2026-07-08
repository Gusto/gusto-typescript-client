# BulkReportBody

Each `batch` item is a `custom_report` or a `general_ledger` report.

## Example Usage

```typescript
import { BulkReportBody } from "@gusto/embedded-api-v-2025-11-15/models/components/bulkreportbody.js";
import { RFCDate } from "@gusto/embedded-api-v-2025-11-15/types/rfcdate.js";

let value: BulkReportBody = {
  batch: [
    {
      companyUuid: "12345678-abcd-ef12-3456-7890abcdef12",
      reportType: "custom_report",
      columns: [
        "employee_first_name",
      ],
      groupings: [
        "employee",
      ],
      fileType: "csv",
      customName: "Q1 Payroll Export",
      withTotals: false,
      dateFilterType: "check_date",
      startDate: new RFCDate("2026-01-01"),
      endDate: new RFCDate("2026-03-31"),
      paymentMethod: "check",
      employmentType: "exempt",
      employmentStatus: "active_full_time",
    },
    {
      companyUuid: "12345678-abcd-ef12-3456-7890abcdef12",
      reportType: "general_ledger",
      payrollUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
      aggregation: "default",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `batch`                                                                                                      | *components.BulkReportItem*[]                                                                                | :heavy_check_mark:                                                                                           | One report per item. Up to 25 items per batch, across any combination of companies the partner is mapped to. |