# RateType

[for `workers_compensation_rate`] The type of rate being collected. Either:
  - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
  - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr


## Example Usage

```typescript
import { RateType } from "openapi/models";

let value: RateType = "currency_per_hour";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"percent" | "currency_per_hour" | Unrecognized<string>
```