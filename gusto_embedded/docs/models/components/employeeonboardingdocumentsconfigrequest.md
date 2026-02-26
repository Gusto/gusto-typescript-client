# EmployeeOnboardingDocumentsConfigRequest

Request body for updating an employee's onboarding documents configuration.

## Example Usage

```typescript
import { EmployeeOnboardingDocumentsConfigRequest } from "@gusto/embedded-api/models/components/employeeonboardingdocumentsconfigrequest.js";

let value: EmployeeOnboardingDocumentsConfigRequest = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `i9Document`                                                                                                                                                 | *boolean*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                           | Whether to include Form I-9 for this employee during onboarding.<br/>When true, the employee will be prompted to complete Form I-9 as part of their onboarding.<br/> |