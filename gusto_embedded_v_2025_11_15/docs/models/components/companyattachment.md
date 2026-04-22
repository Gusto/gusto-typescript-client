# CompanyAttachment

The company attachment

## Example Usage

```typescript
import { CompanyAttachment } from "@gusto/embedded-api-v-2025-11-15/models/components/companyattachment.js";

let value: CompanyAttachment = {
  uuid: "65fbc8b3-87ec-4c84-b0ce-9a9907f6ac80",
  name: "<value>",
  category: "compliance",
  uploadTime: "<value>",
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                                                                        | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | UUID of the company attachment                                                                                                                                |
| `name`                                                                                                                                                        | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | name of the file uploaded                                                                                                                                     |
| `category`                                                                                                                                                    | [components.Category](../../models/components/category.md)                                                                                                    | :heavy_check_mark:                                                                                                                                            | The category of the company attachment.<br/>- `gep_notice`: A tax notice attachment<br/>- `compliance`: A compliance attachment<br/>- `other`: Any other attachment type<br/> |
| `uploadTime`                                                                                                                                                  | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The ISO 8601 timestamp of when an attachment was uploaded                                                                                                     |