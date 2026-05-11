# RequiredQuestions

## Example Usage

```typescript
import { RequiredQuestions } from "@gusto/embedded-api/models/components/informationrequest.js";

let value: RequiredQuestions = {
  questionUuid: "<id>",
  questionText: "<value>",
  responseType: "text",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `questionUuid`                                                     | *string*                                                           | :heavy_check_mark:                                                 | The UUID of the question                                           |
| `questionText`                                                     | *string*                                                           | :heavy_check_mark:                                                 | The text of the question                                           |
| `responseType`                                                     | [components.ResponseType](../../models/components/responsetype.md) | :heavy_check_mark:                                                 | The type of response to the question                               |