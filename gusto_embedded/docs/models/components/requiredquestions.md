# RequiredQuestions

## Example Usage

```typescript
import { RequiredQuestions } from "@gusto/embedded-api/models/components/informationrequest.js";

let value: RequiredQuestions = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `questionUuid`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The UUID of the question                                           |
| `questionText`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The text of the question                                           |
| `responseType`                                                     | [components.ResponseType](../../models/components/responsetype.md) | :heavy_minus_sign:                                                 | The type of response to the question                               |