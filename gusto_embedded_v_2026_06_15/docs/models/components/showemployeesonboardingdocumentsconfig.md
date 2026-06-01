# ShowEmployeesOnboardingDocumentsConfig

Configuration for an employee onboarding documents during onboarding

## Example Usage

```typescript
import { ShowEmployeesOnboardingDocumentsConfig } from "@gusto/embedded-api-v-2026-06-15/models/components/showemployees.js";

let value: ShowEmployeesOnboardingDocumentsConfig = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `uuid`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The UUID of the onboarding documents config                   |
| `i9Document`                                                  | *boolean*                                                     | :heavy_minus_sign:                                            | Whether to include Form I-9 for an employee during onboarding |