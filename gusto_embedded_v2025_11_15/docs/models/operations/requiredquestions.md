# RequiredQuestions

## Example Usage

```typescript
import { RequiredQuestions } from "@gusto/embedded-api-v2025-11-15/models/operations/submitinformationrequest.js";

let value: RequiredQuestions = {
  questionUuid: "36fc8a2e-fb9e-4fa7-bcc0-c3814e005fdb",
  responseType: "document",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `questionUuid`                                                                                                  | *string*                                                                                                        | :heavy_check_mark:                                                                                              | UUID of the question being answered                                                                             |
| `responseType`                                                                                                  | [operations.ResponseType](../../models/operations/responsetype.md)                                              | :heavy_check_mark:                                                                                              | Type of response - matches the question's response_type from GET                                                |
| `textResponse`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Text response (required when response_type is text)                                                             |
| `fileResponse`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Data URL with base64-encoded file (e.g., "data:image/png;base64,..."). Required when response_type is document. |
| `fileName`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Original filename with extension (e.g., "document.pdf"). Used for document uploads.                             |