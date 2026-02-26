# Errors

## Example Usage

```typescript
import { Errors } from "@gusto/embedded-api-v2025-11-15/models/errors/notfounderrorobject.js";

let value: Errors = {
  errorKey: "<value>",
  category: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `errorKey`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Specifies where the error occurs. Typically this key identifies the attribute/parameter related to the error.                          |
| `category`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Specifies the type of error. The category provides error groupings and can be used to build custom error handling in your integration. |
| `message`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Provides details about the error - generally this message can be surfaced to an end user.                                              |