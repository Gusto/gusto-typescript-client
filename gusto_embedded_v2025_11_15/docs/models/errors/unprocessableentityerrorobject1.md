# UnprocessableEntityErrorObject1

Unprocessable Entity
  
This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.


## Example Usage

```typescript
import { UnprocessableEntityErrorObject1 } from "@gusto/embedded-api-v2025-11-15/models/errors/unprocessableentityerrorobject1.js";

// No examples available for this model
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [components.EntityErrorObject](../../models/components/entityerrorobject.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |