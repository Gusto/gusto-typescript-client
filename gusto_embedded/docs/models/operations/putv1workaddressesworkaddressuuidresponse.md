# PutV1WorkAddressesWorkAddressUuidResponse

## Example Usage

```typescript
import { PutV1WorkAddressesWorkAddressUuidResponse } from "@gusto/embedded-api/models/operations/putv1workaddressesworkaddressuuid.js";

let value: PutV1WorkAddressesWorkAddressUuidResponse = {
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