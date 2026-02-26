# QueryParamSortOrder

A string indicating whether to sort resulting events in ascending (asc) or descending (desc) chronological order. Events are sorted by their `timestamp`. Defaults to asc if left empty.

## Example Usage

```typescript
import { QueryParamSortOrder } from "@gusto/embedded-api-v2025-11-15/models/operations/getevents.js";

let value: QueryParamSortOrder = "desc";
```

## Values

```typescript
"asc" | "desc"
```