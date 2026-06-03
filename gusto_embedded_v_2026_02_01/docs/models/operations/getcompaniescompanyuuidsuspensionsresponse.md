# GetCompaniesCompanyUuidSuspensionsResponse

## Example Usage

```typescript
import { GetCompaniesCompanyUuidSuspensionsResponse } from "@gusto/embedded-api-v-2026-02-01/models/operations/getcompaniescompanyuuidsuspensions.js";

let value: GetCompaniesCompanyUuidSuspensionsResponse = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `companySuspensionList`                                                        | [components.CompanySuspension](../../models/components/companysuspension.md)[] | :heavy_minus_sign:                                                             | Successful response                                                            |