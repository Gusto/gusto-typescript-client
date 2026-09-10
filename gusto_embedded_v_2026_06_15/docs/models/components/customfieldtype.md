# CustomFieldType

Input type for the custom field.

## Example Usage

```typescript
import { CustomFieldType } from "@gusto/embedded-api-v-2026-06-15/models/components/customfieldtype.js";

let value: CustomFieldType = "text";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"text" | "currency" | "number" | "date" | "radio" | Unrecognized<string>
```