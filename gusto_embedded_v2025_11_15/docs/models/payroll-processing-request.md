# PayrollProcessingRequest

## Example Usage

```typescript
import { PayrollProcessingRequest } from "openapi/models";

let value: PayrollProcessingRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `status`                                                                                | [models.PayrollProcessingRequestStatus](../models/payroll-processing-request-status.md) | :heavy_minus_sign:                                                                      | The status of the payroll processing request                                            |
| `errors`                                                                                | [models.EntityErrorObject](../models/entity-error-object.md)[]                          | :heavy_minus_sign:                                                                      | Errors that occurred during async payroll processing                                    |