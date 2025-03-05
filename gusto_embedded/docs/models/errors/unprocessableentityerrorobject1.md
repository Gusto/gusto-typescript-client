# UnprocessableEntityErrorObject1

Unprocessable Entity
  
This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.


## Example Usage

```typescript
import { UnprocessableEntityErrorObject1 } from "@gusto/embedded-api/models/errors/unprocessableentityerrorobject1.js";

// No examples available for this model
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `errors`                                                                       | [components.EntityErrorObject](../../models/components/entityerrorobject.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `rawResponse`                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)          | :heavy_minus_sign:                                                             | Raw HTTP response; suitable for custom response parsing                        |