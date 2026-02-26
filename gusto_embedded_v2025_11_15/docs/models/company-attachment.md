# CompanyAttachment

The company attachment

## Example Usage

```typescript
import { CompanyAttachment } from "openapi/models";

let value: CompanyAttachment = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `uuid`                                                    | *string*                                                  | :heavy_minus_sign:                                        | UUID of the company attachment                            |
| `name`                                                    | *string*                                                  | :heavy_minus_sign:                                        | name of the file uploaded                                 |
| `category`                                                | [models.Category](../models/category.md)                  | :heavy_minus_sign:                                        | The category of the company attachment                    |
| `uploadTime`                                              | *string*                                                  | :heavy_minus_sign:                                        | The ISO 8601 timestamp of when an attachment was uploaded |