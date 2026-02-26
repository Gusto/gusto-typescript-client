# FederalTaxDetailsStatus

The status of EIN verification:
- `pending`: The EIN verification process has not completed (or the company does not yet have an EIN).
- `verified`: The EIN has been successfully verified as a valid EIN with the IRS.
- `failed`: The company's EIN did not pass verification. Common issues are being entered incorrectly or not matching the company's legal name.

## Example Usage

```typescript
import { FederalTaxDetailsStatus } from "@gusto/embedded-api-v2025-11-15/models/components/federaltaxdetails.js";

let value: FederalTaxDetailsStatus = "pending";
```

## Values

```typescript
"pending" | "verified" | "failed"
```