# Event

Representation of an Event

## Example Usage

```typescript
import { Event } from "openapi/models/components";

let value: Event = {
  uuid: "081bb2fb-4bb5-4659-ae2e-0a6cb7a8c784",
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