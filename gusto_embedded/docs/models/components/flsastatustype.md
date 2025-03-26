# FlsaStatusType

The FLSA status for this compensation. Salaried ('Exempt') employees are paid a fixed salary every pay period. Salaried with overtime ('Salaried Nonexempt') employees are paid a fixed salary every pay period, and receive overtime pay when applicable. Hourly ('Nonexempt') employees are paid for the hours they work, and receive overtime pay when applicable. Commissioned employees ('Commission Only Exempt') earn wages based only on commission. Commissioned with overtime ('Commission Only Nonexempt') earn wages based on commission, and receive overtime pay when applicable. Owners ('Owner') are employees that own at least twenty percent of the company. 

## Example Usage

```typescript
import { FlsaStatusType } from "@gusto/embedded-api/models/components/flsastatustype.js";

let value: FlsaStatusType = "Exempt";
```

## Values

```typescript
"Exempt" | "Salaried Nonexempt" | "Nonexempt" | "Owner" | "Commission Only Exempt" | "Commission Only Nonexempt"
```