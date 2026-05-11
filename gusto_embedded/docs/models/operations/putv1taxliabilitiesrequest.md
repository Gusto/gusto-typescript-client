# PutV1TaxLiabilitiesRequest

## Example Usage

```typescript
import { PutV1TaxLiabilitiesRequest } from "@gusto/embedded-api/models/operations/putv1taxliabilities.js";

let value: PutV1TaxLiabilitiesRequest = {
  companyUuid: "<id>",
  taxLiabilitySelectionsRequest: {
    liabilitySelections: [
      {
        taxId: 1,
        lastUnpaidExternalPayrollUuid: "1bf1efe1-72d4-4e6e-a181-611f3ea66435",
        unpaidLiabilityAmount: "47.5",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1TaxLiabilitiesHeaderXGustoAPIVersion](../../models/operations/putv1taxliabilitiesheaderxgustoapiversion.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `taxLiabilitySelectionsRequest`                                                                                                                                                                                              | [components.TaxLiabilitySelectionsRequest](../../models/components/taxliabilityselectionsrequest.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |