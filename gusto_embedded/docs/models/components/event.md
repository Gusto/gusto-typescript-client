# Event

Representation of an Event

## Example Usage

```typescript
import { Event } from "@gusto/embedded-api/models/components/event.js";

let value: Event = {
  uuid: "bfc69484-b4fa-410f-a353-ea885963a5c6",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `uuid`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | Unique identifier for the event.                                                |
| `eventType`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Description of the event (e.g., payroll.submitted, or company.form.signed).     |
| `resourceType`                                                                  | [components.ResourceType](../../models/components/resourcetype.md)              | :heavy_minus_sign:                                                              | Name of the parent resource of the described entity.                            |
| `resourceUuid`                                                                  | *string*                                                                        | :heavy_minus_sign:                                                              | Unique identifier for the parent resource.                                      |
| `entityType`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | Name of the entity that the event corresponds to.                               |
| `entityUuid`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | Unique identifier for the entity.                                               |
| `timestamp`                                                                     | *number*                                                                        | :heavy_minus_sign:                                                              | Time at which this event was created. Measured in seconds since the Unix epoch. |