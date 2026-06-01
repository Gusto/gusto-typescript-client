# PayrollDigestConflictErrorMetadata

## Example Usage

```typescript
import { PayrollDigestConflictErrorMetadata } from "@gusto/embedded-api-v-2025-11-15/models/errors/payrolldigestconflicterror.js";

let value: PayrollDigestConflictErrorMetadata = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `requestUuid`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | The UUID of the existing payroll digest batch that already used this idempotency key. |