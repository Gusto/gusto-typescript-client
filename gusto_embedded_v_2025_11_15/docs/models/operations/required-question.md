# RequiredQuestion

## Example Usage

```typescript
import { RequiredQuestion } from "openapi/models/operations";

let value: RequiredQuestion = {
  questionUuid: "74fcbd51-3843-4778-9258-0efdb5ddc700",
  responseType: "text",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `questionUuid`                                                                                                  | *string*                                                                                                        | :heavy_check_mark:                                                                                              | UUID of the question being answered                                                                             |
| `responseType`                                                                                                  | [operations.ResponseType](../../models/operations/response-type.md)                                             | :heavy_check_mark:                                                                                              | Type of response - matches the question's response_type from GET                                                |
| `textResponse`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Text response (required when response_type is text)                                                             |
| `fileResponse`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Data URL with base64-encoded file (e.g., "data:image/png;base64,..."). Required when response_type is document. |
| `fileName`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Original filename with extension (e.g., "document.pdf"). Used for document uploads.                             |