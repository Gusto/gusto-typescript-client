# CustomFieldType

Input type for the custom field.

## Example Usage

```typescript
import { CustomFieldType } from "openapi/models";

let value: CustomFieldType = "text";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"text" | "currency" | "number" | "date" | "radio" | Unrecognized<string>
```