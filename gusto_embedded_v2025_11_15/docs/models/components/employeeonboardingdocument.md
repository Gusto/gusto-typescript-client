# EmployeeOnboardingDocument

Configuration for which onboarding documents (e.g. Form I-9) are required for an employee during onboarding.

## Example Usage

```typescript
import { EmployeeOnboardingDocument } from "@gusto/embedded-api-v2025-11-15/models/components/employeeonboardingdocument.js";

let value: EmployeeOnboardingDocument = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                                                                       | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | The UUID of the onboarding documents config record. Null when no config has been saved yet.                                                                  |
| `i9Document`                                                                                                                                                 | *boolean*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                           | Whether to include Form I-9 for this employee during onboarding.<br/>When true, the employee will be prompted to complete Form I-9 as part of their onboarding.<br/> |