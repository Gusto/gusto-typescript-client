# CompanyEntityType

The tax payer type of the company.

## Example Usage

```typescript
import { CompanyEntityType } from "openapi/models";

let value: CompanyEntityType = "Joint venture";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"C-Corporation" | "S-Corporation" | "Sole proprietor" | "LLC" | "LLP" | "Limited partnership" | "Co-ownership" | "Association" | "Trusteeship" | "General partnership" | "Joint venture" | "Non-Profit" | Unrecognized<string>
```