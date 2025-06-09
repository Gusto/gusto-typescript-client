# ContractorPaymentDetailsList

## Example Usage

```typescript
import { ContractorPaymentDetailsList } from "@gusto/embedded-api/models/components/contractorpaymentdetailslist.js";

let value: ContractorPaymentDetailsList = {
  contractorUuid: "<id>",
  paymentMethod: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `contractorUuid`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `paymentMethod`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `firstName`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `lastName`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `splitBy`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `splits`                                                                                                         | [components.ContractorPaymentDetailsListSplits](../../models/components/contractorpaymentdetailslistsplits.md)[] | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |