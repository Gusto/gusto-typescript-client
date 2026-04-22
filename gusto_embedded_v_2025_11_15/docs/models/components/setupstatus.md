# SetupStatus

The current status of the state tax setup.
- `not_started`: No requirements have been filled
- `in_progress`: Some requirements have been filled, or default rates are applied
- `complete`: All requirements have been filled without default rates


## Example Usage

```typescript
import { SetupStatus } from "@gusto/embedded-api-v-2025-11-15/models/components/taxrequirementstateslist.js";

let value: SetupStatus = "complete";
```

## Values

```typescript
"not_started" | "in_progress" | "complete"
```