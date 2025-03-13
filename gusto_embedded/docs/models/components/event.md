# Event

Representation of an Event

## Example Usage

```typescript
import { Event } from "@gusto/embedded-api/models/components/event.js";

let value: Event = {
  uuid: "4ec39b56-97c0-4659-8c12-ab9f72a998f2",
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