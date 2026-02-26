# GeneratedDocument

Example response

## Example Usage

```typescript
import { GeneratedDocument } from "openapi/models";

let value: GeneratedDocument = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `requestUuid`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | A unique identifier of the Generated Document request                    |
| `status`                                                                 | [models.GeneratedDocumentStatus](../models/generated-document-status.md) | :heavy_minus_sign:                                                       | Current status of the Generated Document                                 |
| `documentUrls`                                                           | *string*[]                                                               | :heavy_minus_sign:                                                       | The array of urls to access the documents.                               |