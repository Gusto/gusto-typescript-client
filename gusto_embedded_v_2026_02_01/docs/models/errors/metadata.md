# Metadata

## Example Usage

```typescript
import { Metadata } from "@gusto/embedded-api-v-2026-02-01/models/errors/payrollbatchconflicterror.js";

let value: Metadata = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `requestUuid`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The UUID of the existing payroll cancellation batch that already used this idempotency key. |