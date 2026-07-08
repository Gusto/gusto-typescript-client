# Metadata

## Example Usage

```typescript
import { Metadata } from "@gusto/embedded-api-v-2025-11-15/models/errors/payrollbatchconflicterror.js";

let value: Metadata = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `requestUuid`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The UUID of the existing payroll cancellation batch that already used this idempotency key. |