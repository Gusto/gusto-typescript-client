# GetV1EmployeesOnboardingDocumentsConfig

Configuration for an employee onboarding documents during onboarding

## Example Usage

```typescript
import { GetV1EmployeesOnboardingDocumentsConfig } from "@gusto/embedded-api/models/operations/getv1employees.js";

let value: GetV1EmployeesOnboardingDocumentsConfig = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `uuid`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The UUID of the onboarding documents config                   |
| `i9Document`                                                  | *boolean*                                                     | :heavy_minus_sign:                                            | Whether to include Form I-9 for an employee during onboarding |