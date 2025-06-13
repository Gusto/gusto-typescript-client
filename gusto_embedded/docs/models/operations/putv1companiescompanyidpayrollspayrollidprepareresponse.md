# PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse } from "@gusto/embedded-api/models/operations/putv1companiescompanyidpayrollspayrollidprepare.js";

let value: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `offCyclePayrollObject`                                                              | [components.OffCyclePayrollObject](../../models/components/offcyclepayrollobject.md) | :heavy_minus_sign:                                                                   | A prepared payroll                                                                   |