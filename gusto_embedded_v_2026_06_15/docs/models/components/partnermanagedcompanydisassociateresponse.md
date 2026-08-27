# PartnerManagedCompanyDisassociateResponse

The company that was disassociated from the partner's embedded payroll product.

## Example Usage

```typescript
import { PartnerManagedCompanyDisassociateResponse } from "@gusto/embedded-api-v-2026-06-15/models/components/partnermanagedcompanydisassociateresponse.js";

let value: PartnerManagedCompanyDisassociateResponse = {
  companyUuid: "34fc234f-8d5f-41f4-b251-077eb467fa03",
  companyName: "Watsica, Reichel and Kemmer",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `companyUuid`                          | *string*                               | :heavy_check_mark:                     | The UUID of the disassociated company. |
| `companyName`                          | *string*                               | :heavy_check_mark:                     | The name of the disassociated company. |