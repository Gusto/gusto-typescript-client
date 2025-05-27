# GetV1WorkAddressesWorkAddressUuidResponse

## Example Usage

```typescript
import { GetV1WorkAddressesWorkAddressUuidResponse } from "@gusto/embedded-api/models/operations/getv1workaddressesworkaddressuuid.js";

let value: GetV1WorkAddressesWorkAddressUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `employeeWorkAddress`                                                            | [components.EmployeeWorkAddress](../../models/components/employeeworkaddress.md) | :heavy_minus_sign:                                                               | successful                                                                       |