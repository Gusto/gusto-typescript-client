# PutV1LocationsLocationIdRequest

## Example Usage

```typescript
import { PutV1LocationsLocationIdRequest } from "openapi/models/operations";

let value: PutV1LocationsLocationIdRequest = {
  locationId: "<id>",
  body: {
    version: "56d00c178bc7393b2a206ed6a86afcb4",
    phoneNumber: "8009360383",
    street1: "300 3rd Street",
    street2: "Apartment 318",
    city: "San Francisco",
    zip: "94107",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1LocationsLocationIdXGustoAPIVersion](../../models/operations/put-v1-locations-location-id-x-gusto-api-version.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `locationId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the location                                                                                                                                                                                                     |
| `body`                                                                                                                                                                                                                       | [operations.PutV1LocationsLocationIdRequestBody](../../models/operations/put-v1-locations-location-id-request-body.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |