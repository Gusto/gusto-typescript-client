# CustomFieldType

Input type for the custom field.

## Example Usage

```typescript
import { CustomFieldType } from "openapi/models";

let value: CustomFieldType = "text";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "currency" | "number" | "date" | "radio" | Unrecognized<string>
```