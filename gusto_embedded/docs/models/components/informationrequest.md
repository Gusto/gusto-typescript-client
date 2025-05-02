# InformationRequest

Representation of an information request

## Example Usage

```typescript
import { InformationRequest } from "@gusto/embedded-api/models/components/informationrequest.js";

let value: InformationRequest = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Unique identifier of an information request                                                                                |
| `companyUuid`                                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Unique identifier of the company to which the information requests belongs                                                 |
| `type`                                                                                                                     | [components.InformationRequestType](../../models/components/informationrequesttype.md)                                     | :heavy_minus_sign:                                                                                                         | The type of information request                                                                                            |
| `status`                                                                                                                   | [components.InformationRequestStatus](../../models/components/informationrequeststatus.md)                                 | :heavy_minus_sign:                                                                                                         | The status of the information request                                                                                      |
| `blockingPayroll`                                                                                                          | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | If true, this information request is blocking payroll, and may require response or requires review from our Risk Ops team. |