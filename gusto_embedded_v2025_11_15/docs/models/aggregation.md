# Aggregation

The breakdown level used for the report

## Example Usage

```typescript
import { Aggregation } from "openapi/models";

let value: Aggregation = "department";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"default" | "job" | "department" | "integration" | Unrecognized<string>
```