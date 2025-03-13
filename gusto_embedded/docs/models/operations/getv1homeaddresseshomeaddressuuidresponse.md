# GetV1HomeAddressesHomeAddressUuidResponse

## Example Usage

```typescript
import { GetV1HomeAddressesHomeAddressUuidResponse } from "@gusto/embedded-api/models/operations/getv1homeaddresseshomeaddressuuid.js";

let value: GetV1HomeAddressesHomeAddressUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employeeAddress: {
    street1: "412 Kiera Stravenue",
    street2: "Suite 391",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    active: true,
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                       | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |                                                                                                                                                          |
| `employeeAddress`                                                                                                                                        | [components.EmployeeAddress](../../models/components/employeeaddress.md)                                                                                 | :heavy_minus_sign:                                                                                                                                       | Example response                                                                                                                                         | {<br/>"street_1": "412 Kiera Stravenue",<br/>"street_2": "Suite 391",<br/>"city": "San Francisco",<br/>"state": "CA",<br/>"zip": "94107",<br/>"country": "USA",<br/>"active": true<br/>} |