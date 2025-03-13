# GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse

## Example Usage

```typescript
import { GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse } from "@gusto/embedded-api/models/operations/getv1companybenefitscompanybenefitidemployeebenefits.js";

let value: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `employeeBenefitList`                                                      | [components.EmployeeBenefit](../../models/components/employeebenefit.md)[] | :heavy_minus_sign:                                                         | Example response                                                           |