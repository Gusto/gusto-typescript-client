# CompanyBankAccountVerifyRequest

Request body for verifying a company bank account with the two micro-deposit amounts.

## Example Usage

```typescript
import { CompanyBankAccountVerifyRequest } from "@gusto/embedded-api-v-2025-11-15/models/components/companybankaccountverifyrequest.js";

let value: CompanyBankAccountVerifyRequest = {
  deposit1: 6045.09,
  deposit2: 4247.59,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `deposit1`                                               | *number*                                                 | :heavy_check_mark:                                       | The first micro-deposit amount (order does not matter).  |
| `deposit2`                                               | *number*                                                 | :heavy_check_mark:                                       | The second micro-deposit amount (order does not matter). |