# GeneratedDocument

Example response

## Example Usage

```typescript
import { GeneratedDocument } from "gusto_embedded/models/components";

let value: GeneratedDocument = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `requestUuid`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | A unique identifier of the Generated Document request                                    |
| `status`                                                                                 | [components.GeneratedDocumentStatus](../../models/components/generateddocumentstatus.md) | :heavy_minus_sign:                                                                       | Current status of the Generated Document                                                 |
| `documentUrls`                                                                           | *string*[]                                                                               | :heavy_minus_sign:                                                                       | The array of urls to access the documents.                                               |