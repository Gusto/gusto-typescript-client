# Category

The category of the company attachment.
- `gep_notice`: A tax notice attachment
- `compliance`: A compliance attachment
- `other`: Any other attachment type


## Example Usage

```typescript
import { Category } from "@gusto/embedded-api-v-2026-06-15/models/components/companyattachment.js";

let value: Category = "other";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"gep_notice" | "compliance" | "other" | Unrecognized<string>
```