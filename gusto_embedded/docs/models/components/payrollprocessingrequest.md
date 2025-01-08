# PayrollProcessingRequest

## Example Usage

```typescript
import { PayrollProcessingRequest } from "gusto_embedded/models/components";

let value: PayrollProcessingRequest = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `status`                                                                                               | [components.PayrollProcessingRequestStatus](../../models/components/payrollprocessingrequeststatus.md) | :heavy_minus_sign:                                                                                     | The status of the payroll processing request                                                           |
| `errors`                                                                                               | [components.EntityErrorObject](../../models/components/entityerrorobject.md)[]                         | :heavy_minus_sign:                                                                                     | Errors that occurred during async payroll processing                                                   |