# GetV1CompanyExternalPayrollsResponse

## Example Usage

```typescript
import { GetV1CompanyExternalPayrollsResponse } from "@gusto/embedded-api/models/operations/getv1companyexternalpayrolls.js";

let value: GetV1CompanyExternalPayrollsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `externalPayrollList`                                                                | [components.ExternalPayrollBasic](../../models/components/externalpayrollbasic.md)[] | :heavy_minus_sign:                                                                   | Example response                                                                     |