# ResponseType

The type of response to the question

## Example Usage

```typescript
import { ResponseType } from "openapi/models";

let value: ResponseType = "radio_button";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "document" | "persona" | "radio_button" | Unrecognized<string>
```