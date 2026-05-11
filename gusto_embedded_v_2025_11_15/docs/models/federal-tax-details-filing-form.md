# FederalTaxDetailsFilingForm

The form used by the company for federal tax filing. One of:
- 941 (Quarterly federal tax return form)
- 944 (Annual federal tax return form)

## Example Usage

```typescript
import { FederalTaxDetailsFilingForm } from "openapi/models";

let value: FederalTaxDetailsFilingForm = "941";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"941" | "944" | Unrecognized<string>
```