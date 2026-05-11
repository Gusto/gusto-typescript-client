# Approver

This value will be null if the request has not been approved.

## Example Usage

```typescript
import { Approver } from "@gusto/embedded-api/models/components/embeddedtimeoffrequest.js";

let value: Approver = {
  uuid: "21d8dff4-ce09-4120-a274-3a5628bf6769",
  fullName: "Morgan Chen",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The UUID of the employee who approved the time off request.      | 21d8dff4-ce09-4120-a274-3a5628bf6769                             |
| `fullName`                                                       | *string*                                                         | :heavy_minus_sign:                                               | The full name of the employee who approved the time off request. | Morgan Chen                                                      |