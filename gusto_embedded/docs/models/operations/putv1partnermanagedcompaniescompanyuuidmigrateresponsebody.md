# PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody

Example response

## Example Usage

```typescript
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody } from "@gusto/embedded-api/models/operations/putv1partnermanagedcompaniescompanyuuidmigrate.js";

let value: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `migrationStatus`                                            | *boolean*                                                    | :heavy_minus_sign:                                           | The migration status.                                        |
| `companyUuid`                                                | *string*                                                     | :heavy_minus_sign:                                           | The company UUID                                             |
| `errors`                                                     | [operations.Errors](../../models/operations/errors.md)[]     | :heavy_minus_sign:                                           | N/A                                                          |
| `warnings`                                                   | [operations.Warnings](../../models/operations/warnings.md)[] | :heavy_minus_sign:                                           | N/A                                                          |