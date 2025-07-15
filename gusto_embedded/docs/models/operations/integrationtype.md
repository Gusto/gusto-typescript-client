# IntegrationType

The kind of integration set up for the company. Required when `aggregation` is 'integration'. Must be null if `aggregation` is not 'integration'.

## Example Usage

```typescript
import { IntegrationType } from "@gusto/embedded-api/models/operations/postpayrollspayrolluuidreportsgeneralledger.js";

let value: IntegrationType = "qbo";
```

## Values

```typescript
"xero" | "qbo"
```