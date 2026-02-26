# InformationRequestType

The type of information request

## Example Usage

```typescript
import { InformationRequestType } from "openapi/models";

let value: InformationRequestType = "payment_error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"company_onboarding" | "account_protection" | "payment_request" | "payment_error" | Unrecognized<string>
```