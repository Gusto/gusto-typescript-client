# FilingStatus

Determines which tax return form an individual will use. One of: Single, Married, Head of Household, Exempt from withholding.

## Example Usage

```typescript
import { FilingStatus } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidfederaltaxes.js";

let value: FilingStatus = "Single";
```

## Values

```typescript
"Single" | "Married" | "Head of Household" | "Exempt from withholding"
```