# WarningObject

## Example Usage

```typescript
import { WarningObject } from "@gusto/embedded-api/models/components/warningobject.js";

let value: WarningObject = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `errorKey`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Specifies where the warning occurs. Typically identifies the attribute or parameter related to the warning. |
| `category`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Specifies the type of warning. Can be used to build custom warning handling.                                |
| `message`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Provides details about the warning. The message can be surfaced directly to the end user.                   |