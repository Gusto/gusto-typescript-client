# EmployeesAnnualFicaWageReportAcceptance

Acceptance acknowledgement for an asynchronous employees annual FICA wage report. Returned with HTTP 202; poll the report status endpoint using `request_uuid`.

## Example Usage

```typescript
import { EmployeesAnnualFicaWageReportAcceptance } from "@gusto/embedded-api-v-2025-11-15/models/components/employeesannualficawagereportacceptance.js";

let value: EmployeesAnnualFicaWageReportAcceptance = {
  requestUuid: "4c459d88-8757-4d61-82d7-55abb18ae930",
  companyUuid: "f216d772-44a8-4cec-b6ef-8f184b64febb",
  startYear: 35822,
  endYear: 125630,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `requestUuid`                                                           | *string*                                                                | :heavy_check_mark:                                                      | The UUID of the report request. Use this to poll for report completion. |
| `companyUuid`                                                           | *string*                                                                | :heavy_check_mark:                                                      | The UUID of the company.                                                |
| `startYear`                                                             | *number*                                                                | :heavy_check_mark:                                                      | The start year for the report.                                          |
| `endYear`                                                               | *number*                                                                | :heavy_check_mark:                                                      | The end year for the report.                                            |