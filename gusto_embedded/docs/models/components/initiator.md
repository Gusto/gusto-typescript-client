# Initiator

## Example Usage

```typescript
import { Initiator } from "@gusto/embedded-api/models/components/embeddedtimeoffrequest.js";

let value: Initiator = {
  uuid: "51924fa0-26c6-4d4c-8832-3ef0b422c67e",
  fullName: "Alex Johnson",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `uuid`                                                            | *string*                                                          | :heavy_minus_sign:                                                | The UUID of the employee who initiated the time off request.      | 51924fa0-26c6-4d4c-8832-3ef0b422c67e                              |
| `fullName`                                                        | *string*                                                          | :heavy_minus_sign:                                                | The full name of the employee who initiated the time off request. | Alex Johnson                                                      |