# ConflictErrorObject

Conflict
  
This may happen when the resource version provided does not match the current version — retrieve the latest version and retry — or when the request conflicts with another in-progress operation on the same resource. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.

## Example Usage

```typescript
import { ConflictErrorObject } from "@gusto/embedded-api-v-2026-02-01/models/errors/conflicterrorobject.js";

// No examples available for this model
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `errors`                                                                               | [errors.ConflictErrorObjectErrors](../../models/errors/conflicterrorobjecterrors.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |