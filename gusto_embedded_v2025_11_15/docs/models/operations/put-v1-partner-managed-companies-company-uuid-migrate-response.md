# PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse

Example response

## Example Usage

```typescript
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse } from "openapi/models/operations";

let value: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `companyUuid`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | The company UUID                                                          |
| `migrationStatus`                                                         | [operations.MigrationStatus](../../models/operations/migration-status.md) | :heavy_minus_sign:                                                        | The migration status. 'success' is the only valid return value.           |