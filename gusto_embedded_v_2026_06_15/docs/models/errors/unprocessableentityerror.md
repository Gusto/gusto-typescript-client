# UnprocessableEntityError

Unprocessable Entity
  
This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.


## Example Usage

```typescript
import { UnprocessableEntityError } from "@gusto/embedded-api-v-2026-06-15/models/errors/unprocessableentityerror.js";

// No examples available for this model
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [components.EntityErrorObject](../../models/components/entityerrorobject.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |