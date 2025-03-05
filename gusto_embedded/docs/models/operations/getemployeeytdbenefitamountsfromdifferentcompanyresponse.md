# GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse

## Example Usage

```typescript
import { GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse } from "@gusto/embedded-api/models/operations/getemployeeytdbenefitamountsfromdifferentcompany.js";

let value: GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse = {
  contentType: "<value>",
  statusCode: 451,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | HTTP response content type for this operation                                                                          |
| `statusCode`                                                                                                           | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | HTTP response status code for this operation                                                                           |
| `rawResponse`                                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                  | :heavy_check_mark:                                                                                                     | Raw HTTP response; suitable for custom response parsing                                                                |
| `ytdBenefitAmountsFromDifferentCompanyList`                                                                            | [components.YtdBenefitAmountsFromDifferentCompany](../../models/components/ytdbenefitamountsfromdifferentcompany.md)[] | :heavy_minus_sign:                                                                                                     | List of Ytd Benefit Amounts From Different Company List                                                                |