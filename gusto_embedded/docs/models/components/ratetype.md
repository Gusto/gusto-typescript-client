# RateType

[for `workers_compensation_rate`] The type of rate being collected. Either:
 - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
 - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr


## Example Usage

```typescript
import { RateType } from "@gusto/embedded-api/models/components/taxrequirementmetadata.js";

let value: RateType = "percent";
```

## Values

```typescript
"percent" | "currency_per_hour"
```