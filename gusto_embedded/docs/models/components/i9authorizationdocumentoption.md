# I9AuthorizationDocumentOption

An employee's I-9 verification document option based on the authorization status

## Example Usage

```typescript
import { I9AuthorizationDocumentOption } from "@gusto/embedded-api/models/components/i9authorizationdocumentoption.js";

let value: I9AuthorizationDocumentOption = {
  section: "A",
  description: "midst um orange yippee energetically whether thunderbolt",
  documentType: "<value>",
  documentTitle: [
    "<value 1>",
  ],
  commonChoice: true,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `section`                                                                         | [components.Section](../../models/components/section.md)                          | :heavy_check_mark:                                                                | The document option's section in the list of acceptable documents on the Form I-9 |
| `description`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | The document option's description                                                 |
| `documentType`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | The document option's document type                                               |
| `documentTitle`                                                                   | *string*[]                                                                        | :heavy_check_mark:                                                                | The document option's document titles                                             |
| `commonChoice`                                                                    | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether the document is a common choice for I-9 verification                      |