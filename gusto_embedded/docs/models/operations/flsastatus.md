# FlsaStatus

The FLSA status for this compensation. Salaried ('Exempt') employees are paid a fixed salary every pay period. Salaried with overtime ('Salaried Nonexempt') employees are paid a fixed salary every pay period, and receive overtime pay when applicable. Hourly ( 'Nonexempt') employees are paid for the hours they work, and receive overtime pay when applicable. Commissioned employees ('Commission Only Exempt') earn wages based only on commission. Commissioned with overtime ('Commission Only Nonexempt') earn wages based on commission, and receive overtime pay when applicable. Owners ('Owner') are employees that own at least twenty percent of the company. If selecting `Owner`, `payment_unit` must be `"Paycheck"`.

## Example Usage

```typescript
import { FlsaStatus } from "@gusto/embedded-api/models/operations/postv1companiescompanyidpeoplebatches.js";

let value: FlsaStatus = "Owner";
```

## Values

```typescript
"Exempt" | "Salaried Nonexempt" | "Nonexempt" | "Owner" | "Commission Only Exempt" | "Commission Only Nonexempt"
```