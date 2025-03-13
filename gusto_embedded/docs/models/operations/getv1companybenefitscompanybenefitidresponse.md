# GetV1CompanyBenefitsCompanyBenefitIdResponse

## Example Usage

```typescript
import { GetV1CompanyBenefitsCompanyBenefitIdResponse } from "@gusto/embedded-api/models/operations/getv1companybenefitscompanybenefitid.js";

let value: GetV1CompanyBenefitsCompanyBenefitIdResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `companyBenefitWithEmployeeBenefits`                                                                           | [components.CompanyBenefitWithEmployeeBenefits](../../models/components/companybenefitwithemployeebenefits.md) | :heavy_minus_sign:                                                                                             | Example response                                                                                               |