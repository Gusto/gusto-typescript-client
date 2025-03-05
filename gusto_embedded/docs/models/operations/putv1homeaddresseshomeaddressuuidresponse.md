# PutV1HomeAddressesHomeAddressUuidResponse

## Example Usage

```typescript
import { PutV1HomeAddressesHomeAddressUuidResponse } from "@gusto/embedded-api/models/operations";

let value: PutV1HomeAddressesHomeAddressUuidResponse = {
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
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
| `contentType`                                                                                                                                            | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | HTTP response content type for this operation                                                                                                            |                                                                                                                                                          |
| `statusCode`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | HTTP response status code for this operation                                                                                                             |                                                                                                                                                          |
| `rawResponse`                                                                                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                    | :heavy_check_mark:                                                                                                                                       | Raw HTTP response; suitable for custom response parsing                                                                                                  |                                                                                                                                                          |
| `employeeAddress`                                                                                                                                        | [components.EmployeeAddress](../../models/components/employeeaddress.md)                                                                                 | :heavy_minus_sign:                                                                                                                                       | Example response                                                                                                                                         | {<br/>"street_1": "412 Kiera Stravenue",<br/>"street_2": "Suite 391",<br/>"city": "San Francisco",<br/>"state": "CA",<br/>"zip": "94107",<br/>"country": "USA",<br/>"active": true<br/>} |