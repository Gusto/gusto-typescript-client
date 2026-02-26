# EmployeeOnboardingDocumentsConfig

Configuration for an employee onboarding documents during onboarding

## Example Usage

```typescript
import { EmployeeOnboardingDocumentsConfig } from "@gusto/embedded-api-v2025-11-15/models/components/employee.js";

let value: EmployeeOnboardingDocumentsConfig = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `uuid`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The UUID of the onboarding documents config                   |
| `i9Document`                                                  | *boolean*                                                     | :heavy_minus_sign:                                            | Whether to include Form I-9 for an employee during onboarding |