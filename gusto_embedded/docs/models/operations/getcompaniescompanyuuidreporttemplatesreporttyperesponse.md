# GetCompaniesCompanyUuidReportTemplatesReportTypeResponse

## Example Usage

```typescript
import { GetCompaniesCompanyUuidReportTemplatesReportTypeResponse } from "@gusto/embedded-api/models/operations/getcompaniescompanyuuidreporttemplatesreporttype.js";

let value: GetCompaniesCompanyUuidReportTemplatesReportTypeResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `httpMeta`                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `reportTemplate`                                                       | [components.ReportTemplate](../../models/components/reporttemplate.md) | :heavy_minus_sign:                                                     | Example response                                                       |