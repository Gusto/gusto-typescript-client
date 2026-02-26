# PostV1CompaniesAttachmentRequestBody

The binary payload of the file and the company attachment category.

## Example Usage

```typescript
import { PostV1CompaniesAttachmentRequestBody } from "@gusto/embedded-api-v2025-11-15/models/operations/postv1companiesattachment.js";

// No examples available for this model
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `document`                                                                                                                                                                                 | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [operations.Document](../../models/operations/document.md) | :heavy_check_mark:                                                                                                                                                                         | The binary payload of the file to be uploaded.                                                                                                                                             |
| `category`                                                                                                                                                                                 | [operations.Category](../../models/operations/category.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                         | The category of a company attachment.                                                                                                                                                      |