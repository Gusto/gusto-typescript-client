# GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBody

Example response

## Example Usage

```typescript
import { GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBody } from "@gusto/embedded-api-v2025-11-15/models/operations/getv1partnermanagedcompaniescompanyuuidmigrationreadiness.js";

let value:
  GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBody = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `readyToMigrate`                                             | *boolean*                                                    | :heavy_minus_sign:                                           | Indicates if the company is ready to be migrated.            |
| `companyUuid`                                                | *string*                                                     | :heavy_minus_sign:                                           | The company UUID                                             |
| `errors`                                                     | [operations.Errors](../../models/operations/errors.md)[]     | :heavy_minus_sign:                                           | N/A                                                          |
| `warnings`                                                   | [operations.Warnings](../../models/operations/warnings.md)[] | :heavy_minus_sign:                                           | N/A                                                          |