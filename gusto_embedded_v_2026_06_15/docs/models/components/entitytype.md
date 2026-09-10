# EntityType

## Example Usage

```typescript
import { EntityType } from "@gusto/embedded-api-v-2026-06-15/models/components/company.js";

let value: EntityType = "C-Corporation";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"C-Corporation" | "S-Corporation" | "Sole proprietor" | "LLC" | "LLP" | "Limited partnership" | "Co-ownership" | "Association" | "Trusteeship" | "General partnership" | "Joint venture" | "Non-Profit" | Unrecognized<string>
```