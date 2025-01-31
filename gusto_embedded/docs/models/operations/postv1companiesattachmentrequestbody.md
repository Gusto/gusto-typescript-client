# PostV1CompaniesAttachmentRequestBody

The binary payload of the file and the company attachment category.

## Example Usage

```typescript
import { PostV1CompaniesAttachmentRequestBody } from "@gusto/embedded-api/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `category`                                                                                                                                                                                 | [operations.Category](../../models/operations/category.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                         | The category of a company attachment.                                                                                                                                                      |
| `document`                                                                                                                                                                                 | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [operations.Document](../../models/operations/document.md) | :heavy_check_mark:                                                                                                                                                                         | The binary payload of the file to be uploaded.                                                                                                                                             |