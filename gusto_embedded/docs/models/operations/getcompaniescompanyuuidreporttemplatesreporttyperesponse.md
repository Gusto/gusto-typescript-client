# GetCompaniesCompanyUuidReportTemplatesReportTypeResponse

## Example Usage

```typescript
import { GetCompaniesCompanyUuidReportTemplatesReportTypeResponse } from "@gusto/embedded-api/models/operations/getcompaniescompanyuuidreporttemplatesreporttype.js";

let value: GetCompaniesCompanyUuidReportTemplatesReportTypeResponse = {
  contentType: "<value>",
  statusCode: 308,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | HTTP response content type for this operation                          |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP response status code for this operation                           |
| `rawResponse`                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)  | :heavy_check_mark:                                                     | Raw HTTP response; suitable for custom response parsing                |
| `reportTemplate`                                                       | [components.ReportTemplate](../../models/components/reporttemplate.md) | :heavy_minus_sign:                                                     | Example response                                                       |