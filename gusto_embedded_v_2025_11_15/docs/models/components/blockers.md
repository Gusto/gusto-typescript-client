# Blockers

## Example Usage

```typescript
import { Blockers } from "@gusto/embedded-api-v-2025-11-15/models/components/employeeonboardingstatus.js";

let value: Blockers = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                    | [components.Field](../../models/components/field.md)                                                       | :heavy_minus_sign:                                                                                         | The employee field affected.                                                                               |
| `category`                                                                                                 | [components.EmployeeOnboardingStatusCategory](../../models/components/employeeonboardingstatuscategory.md) | :heavy_minus_sign:                                                                                         | Category of the blocker. See the array-level description for resolution guidance.                          |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Human-readable description of the blocker.                                                                 |