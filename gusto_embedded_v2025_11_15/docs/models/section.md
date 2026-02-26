# Section

The document option's section in the list of acceptable documents on the Form I-9

## Example Usage

```typescript
import { Section } from "openapi/models";

let value: Section = "C";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"A" | "A1" | "A2" | "A3" | "B" | "C" | Unrecognized<string>
```