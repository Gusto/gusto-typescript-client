# PutV1HomeAddressesHomeAddressUuidResponse

## Example Usage

```typescript
import { PutV1HomeAddressesHomeAddressUuidResponse } from "@gusto/embedded-api/models/operations/putv1homeaddresseshomeaddressuuid.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: PutV1HomeAddressesHomeAddressUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employeeAddress: {
    street1: "333 Kiera Stravenue",
    street2: "Suite 391",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    active: true,
    uuid: "9557fe01-f8f8-4c14-a61c-ca6221a9f118",
    employeeUuid: "da441196-43a9-4d23-ad5d-f37ce6bb99c0",
    effectiveDate: new RFCDate("2021-01-01"),
    courtesyWithholding: true,
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                       | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |                                                                                                                                                          |
| `employeeAddress`                                                                                                                                        | [components.EmployeeAddress](../../models/components/employeeaddress.md)                                                                                 | :heavy_minus_sign:                                                                                                                                       | Example response                                                                                                                                         | {<br/>"street_1": "412 Kiera Stravenue",<br/>"street_2": "Suite 391",<br/>"city": "San Francisco",<br/>"state": "CA",<br/>"zip": "94107",<br/>"country": "USA",<br/>"active": true<br/>} |