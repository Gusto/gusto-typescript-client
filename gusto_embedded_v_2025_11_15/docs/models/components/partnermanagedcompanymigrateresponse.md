# PartnerManagedCompanyMigrateResponse

## Example Usage

```typescript
import { PartnerManagedCompanyMigrateResponse } from "@gusto/embedded-api-v-2025-11-15/models/components/partnermanagedcompanymigrateresponse.js";

let value: PartnerManagedCompanyMigrateResponse = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `companyUuid`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | The company UUID                                                           |
| `migrationStatus`                                                          | [components.MigrationStatus](../../models/components/migrationstatus.md)   | :heavy_minus_sign:                                                         | The migration status. Always returns `success` for a successful migration. |