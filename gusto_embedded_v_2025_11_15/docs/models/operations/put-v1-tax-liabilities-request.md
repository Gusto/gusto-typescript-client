# PutV1TaxLiabilitiesRequest

## Example Usage

```typescript
import { PutV1TaxLiabilitiesRequest } from "openapi/models/operations";

let value: PutV1TaxLiabilitiesRequest = {
  companyUuid: "<id>",
  body: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1TaxLiabilitiesXGustoAPIVersion](../../models/operations/put-v1-tax-liabilities-x-gusto-api-version.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `body`                                                                                                                                                                                                                       | [models.TaxLiabilitySelectionsRequest](../../models/tax-liability-selections-request.md)                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |