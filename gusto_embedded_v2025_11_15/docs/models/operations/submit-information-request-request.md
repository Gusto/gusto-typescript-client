# SubmitInformationRequestRequest

## Example Usage

```typescript
import { SubmitInformationRequestRequest } from "openapi/models/operations";

let value: SubmitInformationRequestRequest = {
  informationRequestUuid: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `informationRequestUuid`                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The UUID of the information request                                                                                  |
| `body`                                                                                                               | [operations.SubmitInformationRequestRequestBody](../../models/operations/submit-information-request-request-body.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |