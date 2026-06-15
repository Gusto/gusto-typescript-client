# PayrollDigestResultsBlockers

## Example Usage

```typescript
import { PayrollDigestResultsBlockers } from "@gusto/embedded-api-v-2026-02-01/models/components/payrolldigestresults.js";

let value: PayrollDigestResultsBlockers = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `type`                                                        | *string*                                                      | :heavy_minus_sign:                                            | A machine-readable blocker key (e.g. `missing_bank_account`). |
| `description`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Human-readable description of the blocker.                    |