# PartnerManagedCompanyMigrationReadinessResponse

## Example Usage

```typescript
import { PartnerManagedCompanyMigrationReadinessResponse } from "@gusto/embedded-api-v-2025-11-15/models/components/partnermanagedcompanymigrationreadinessresponse.js";

let value: PartnerManagedCompanyMigrationReadinessResponse = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `readyToMigrate`                                             | *boolean*                                                    | :heavy_minus_sign:                                           | Indicates if the company is ready to be migrated.            |
| `companyUuid`                                                | *string*                                                     | :heavy_minus_sign:                                           | The company UUID                                             |
| `errors`                                                     | [components.Errors](../../models/components/errors.md)[]     | :heavy_minus_sign:                                           | N/A                                                          |
| `warnings`                                                   | [components.Warnings](../../models/components/warnings.md)[] | :heavy_minus_sign:                                           | N/A                                                          |