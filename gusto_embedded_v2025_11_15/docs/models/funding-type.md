# FundingType

Company's default funding type

## Example Usage

```typescript
import { FundingType } from "openapi/models";

let value: FundingType = "brex";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ach" | "reverse_wire" | "wire_in" | "brex" | Unrecognized<string>
```