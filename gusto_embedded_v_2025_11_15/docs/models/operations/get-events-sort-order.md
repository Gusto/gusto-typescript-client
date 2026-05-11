# GetEventsSortOrder

A string indicating whether to sort resulting events in ascending (asc) or descending (desc) chronological order. Events are sorted by their `timestamp`. Defaults to asc if left empty.

## Example Usage

```typescript
import { GetEventsSortOrder } from "openapi/models/operations";

let value: GetEventsSortOrder = "desc";
```

## Values

```typescript
"asc" | "desc"
```