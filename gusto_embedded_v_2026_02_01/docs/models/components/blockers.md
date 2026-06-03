# Blockers

## Example Usage

```typescript
import { Blockers } from "@gusto/embedded-api-v-2026-02-01/models/components/payrolldigestresults.js";

let value: Blockers = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `type`                                                        | *string*                                                      | :heavy_minus_sign:                                            | A machine-readable blocker key (e.g. `missing_bank_account`). |
| `description`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Human-readable description of the blocker.                    |