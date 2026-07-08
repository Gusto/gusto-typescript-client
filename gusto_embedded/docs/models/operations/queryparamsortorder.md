# QueryParamSortOrder

A string indicating whether to sort resulting events in ascending (asc) or descending (desc) chronological order. Events are sorted by their `timestamp`. Defaults to asc if left empty.

## Example Usage

```typescript
import { QueryParamSortOrder } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayrolls.js";

let value: QueryParamSortOrder = "asc";
```

## Values

```typescript
"asc" | "desc"
```