# ContractorType

The contractor's type, either "Individual" or "Business". 

## Example Usage

```typescript
import { ContractorType } from "openapi/models";

let value: ContractorType = "Business";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Individual" | "Business" | Unrecognized<string>
```