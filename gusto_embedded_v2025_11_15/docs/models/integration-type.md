# IntegrationType

The `integration_type` used for the report, if `aggregation` was 'integration.' Otherwise, this will be null.

## Example Usage

```typescript
import { IntegrationType } from "openapi/models";

let value: IntegrationType = "qbo";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"xero" | "qbo" | Unrecognized<string>
```