# GetVersionEmployeesTimeOffActivitiesResponse

## Example Usage

```typescript
import { GetVersionEmployeesTimeOffActivitiesResponse } from "@gusto/embedded-api/models/operations/getversionemployeestimeoffactivities.js";

let value: GetVersionEmployeesTimeOffActivitiesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `timeOffActivity`                                                        | [components.TimeOffActivity](../../models/components/timeoffactivity.md) | :heavy_minus_sign:                                                       | Example response                                                         |