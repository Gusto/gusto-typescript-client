# GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse

## Example Usage

```typescript
import { GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse } from "@gusto/embedded-api/models/operations/getemployeeytdbenefitamountsfromdifferentcompany.js";

let value: GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `ytdBenefitAmountsFromDifferentCompanyList`                                                                            | [components.YtdBenefitAmountsFromDifferentCompany](../../models/components/ytdbenefitamountsfromdifferentcompany.md)[] | :heavy_minus_sign:                                                                                                     | List of Ytd Benefit Amounts From Different Company List                                                                |