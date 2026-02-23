# PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody } from "@gusto/embedded-api/models/operations/putv1companiescompanyidpayrollspayrollidsubmit.js";

let value: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `submissionBlockers`                                                                                               | [components.PayrollSubmissionBlockerRequestType](../../models/components/payrollsubmissionblockerrequesttype.md)[] | :heavy_minus_sign:                                                                                                 | An array of submission_blockers, each with a selected unblock option.                                              |