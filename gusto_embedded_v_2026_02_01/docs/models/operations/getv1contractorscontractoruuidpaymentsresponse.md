# GetV1ContractorsContractorUuidPaymentsResponse

## Example Usage

```typescript
import { GetV1ContractorsContractorUuidPaymentsResponse } from "@gusto/embedded-api-v-2026-02-01/models/operations/getv1contractorscontractoruuidpayments.js";

let value: GetV1ContractorsContractorUuidPaymentsResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `contractorPaymentListings`                                                                  | [components.ContractorPaymentListing](../../models/components/contractorpaymentlisting.md)[] | :heavy_minus_sign:                                                                           | A JSON array of contractor payments                                                          |