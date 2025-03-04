# GetV1LocationsLocationUuidMinimumWagesResponse

## Example Usage

```typescript
import { GetV1LocationsLocationUuidMinimumWagesResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1LocationsLocationUuidMinimumWagesResponse = {
  contentType: "<value>",
  statusCode: 206,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `minimumWageList`                                                     | [components.MinimumWage](../../models/components/minimumwage.md)[]    | :heavy_minus_sign:                                                    | Example response                                                      |