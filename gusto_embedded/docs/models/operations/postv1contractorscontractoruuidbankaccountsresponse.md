# PostV1ContractorsContractorUuidBankAccountsResponse

## Example Usage

```typescript
import { PostV1ContractorsContractorUuidBankAccountsResponse } from "@gusto/embedded-api/models/operations/postv1contractorscontractoruuidbankaccounts.js";

let value: PostV1ContractorsContractorUuidBankAccountsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `contractorBankAccount`                                                              | [components.ContractorBankAccount](../../models/components/contractorbankaccount.md) | :heavy_minus_sign:                                                                   | Example response                                                                     |