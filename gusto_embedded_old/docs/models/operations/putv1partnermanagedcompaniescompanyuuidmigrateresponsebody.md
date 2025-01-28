# PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody

Example response

## Example Usage

```typescript
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody } from "openapi/models/operations";

let value: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `companyUuid`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | The company UUID                                                         |
| `migrationStatus`                                                        | [operations.MigrationStatus](../../models/operations/migrationstatus.md) | :heavy_minus_sign:                                                       | The migration status. 'success' is the only valid return value.          |