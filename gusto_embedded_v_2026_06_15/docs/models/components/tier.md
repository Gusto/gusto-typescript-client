# Tier

The Gusto product tier of the company (not applicable to Embedded partner managed companies).

## Example Usage

```typescript
import { Tier } from "@gusto/embedded-api-v-2026-06-15/models/components/company.js";

let value: Tier = "premium";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"simple" | "plus" | "premium" | "core" | "complete" | "concierge" | "contractor_only" | "basic" | Unrecognized<string>
```