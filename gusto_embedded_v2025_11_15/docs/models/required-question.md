# RequiredQuestion

## Example Usage

```typescript
import { RequiredQuestion } from "openapi/models";

let value: RequiredQuestion = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `questionUuid`                                    | *string*                                          | :heavy_minus_sign:                                | The UUID of the question                          |
| `questionText`                                    | *string*                                          | :heavy_minus_sign:                                | The text of the question                          |
| `responseType`                                    | [models.ResponseType](../models/response-type.md) | :heavy_minus_sign:                                | The type of response to the question              |