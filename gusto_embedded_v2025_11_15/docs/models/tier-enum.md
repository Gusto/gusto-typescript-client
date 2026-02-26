# TierEnum

The Gusto product tier of the company (not applicable to Embedded partner managed companies).

## Example Usage

```typescript
import { TierEnum } from "openapi/models";

let value: TierEnum = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"simple" | "plus" | "premium" | "core" | "complete" | "concierge" | "contractor_only" | "basic" | Unrecognized<string>
```