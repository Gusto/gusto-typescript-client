# PartnerManagedCompanyMigrateResponse

## Example Usage

```typescript
import { PartnerManagedCompanyMigrateResponse } from "openapi/models";

let value: PartnerManagedCompanyMigrateResponse = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `companyUuid`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | The company UUID                                                           |
| `migrationStatus`                                                          | [models.MigrationStatus](../models/migration-status.md)                    | :heavy_minus_sign:                                                         | The migration status. Always returns `success` for a successful migration. |