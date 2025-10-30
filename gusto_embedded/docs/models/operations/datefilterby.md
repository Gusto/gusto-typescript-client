# DateFilterBy

Specifies which date field to use when filtering payrolls with start_date and end_date. This field applies only to regular processed payrolls and defaults to pay period if not provided.

## Example Usage

```typescript
import { DateFilterBy } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayrolls.js";

let value: DateFilterBy = "check_date";
```

## Values

```typescript
"check_date"
```