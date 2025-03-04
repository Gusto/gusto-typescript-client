# GetV1CompaniesResponse

## Example Usage

```typescript
import { GetV1CompaniesResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1CompaniesResponse = {
  contentType: "<value>",
  statusCode: 511,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  company: {
    uuid: "d05b2803-0c35-4eb0-9299-3e989b4632fb",
    compensations: {
      hourly: [
        {
          name: "Overtime",
          multiple: 1.5,
        },
      ],
      fixed: [
        {
          name: "Bonus",
        },
      ],
      paidTimeOff: [
        {
          name: "Vacation Hours",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `company`                                                             | [components.Company](../../models/components/company.md)              | :heavy_minus_sign:                                                    | Example response                                                      |