# RequiredQuestion

## Example Usage

```typescript
import { RequiredQuestion } from "openapi/models";

let value: RequiredQuestion = {
  questionUuid: "<id>",
  questionText: "<value>",
  responseType: "document",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `questionUuid`                                    | *string*                                          | :heavy_check_mark:                                | The UUID of the question                          |
| `questionText`                                    | *string*                                          | :heavy_check_mark:                                | The text of the question                          |
| `responseType`                                    | [models.ResponseType](../models/response-type.md) | :heavy_check_mark:                                | The type of response to the question              |