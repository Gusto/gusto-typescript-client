# PutV1HomeAddressesHomeAddressUuidResponse

## Example Usage

```typescript
import { PutV1HomeAddressesHomeAddressUuidResponse } from "@gusto/embedded-api/models/operations/putv1homeaddresseshomeaddressuuid.js";

let value: PutV1HomeAddressesHomeAddressUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `employeeAddress`                                                        | [components.EmployeeAddress](../../models/components/employeeaddress.md) | :heavy_minus_sign:                                                       | successful                                                               |