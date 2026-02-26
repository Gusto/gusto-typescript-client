# ContractorWageType

The contractor's wage type, either "Fixed" or "Hourly".

## Example Usage

```typescript
import { ContractorWageType } from "openapi/models";

let value: ContractorWageType = "Fixed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Fixed" | "Hourly" | Unrecognized<string>
```