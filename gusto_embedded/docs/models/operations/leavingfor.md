# LeavingFor

The competitor the company is switching to. Required if `reason` is `'switching_provider'`.

> 🚧 Switching to Gusto requires Customer Support
> If `'gusto_com'` is provided, this change must be completed by Gusto Customer Support and cannot be performed via the API. This endpoint will return a 422 error in that case.


## Example Usage

```typescript
import { LeavingFor } from "@gusto/embedded-api/models/operations/postcompaniescompanyuuidsuspensions.js";

let value: LeavingFor = "rippling";
```

## Values

```typescript
"accountant" | "adp" | "adp_total_source" | "bamboo_hr" | "bank_or_financial_institution" | "check" | "gusto_com" | "homebase" | "insperity" | "intuit_or_quickbooks" | "justworks" | "manual" | "namely" | "onpay" | "other" | "patriot" | "paychex" | "paycom" | "paylocity" | "rippling" | "square" | "surepayroll" | "trinet" | "zenefits"
```