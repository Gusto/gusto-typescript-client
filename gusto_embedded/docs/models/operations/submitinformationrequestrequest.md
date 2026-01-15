# SubmitInformationRequestRequest

## Example Usage

```typescript
import { SubmitInformationRequestRequest } from "@gusto/embedded-api/models/operations/submitinformationrequest.js";

let value: SubmitInformationRequestRequest = {
  informationRequestUuid: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `informationRequestUuid`                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The UUID of the information request                                                                              |
| `requestBody`                                                                                                    | [operations.SubmitInformationRequestRequestBody](../../models/operations/submitinformationrequestrequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |