# FilingForm

The form used by the company for federal tax filing. One of:
- 941 (Quarterly federal tax return)
- 944 (Annual federal tax return)

## Example Usage

```typescript
import { FilingForm } from "gusto-embedded/models/operations";

let value: FilingForm = "944";
```

## Values

```typescript
"941" | "944"
```