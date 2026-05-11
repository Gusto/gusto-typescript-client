# DepartmentUpdateRequestBody

## Example Usage

```typescript
import { DepartmentUpdateRequestBody } from "@gusto/embedded-api/models/components/departmentupdaterequestbody.js";

let value: DepartmentUpdateRequestBody = {
  version: "56d00c178bc7393b2a206ed6a86afcb4",
  title: "Stage Hand",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                         | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field. | 56d00c178bc7393b2a206ed6a86afcb4                                                                                                                                  |
| `title`                                                                                                                                                           | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | Name of the department                                                                                                                                            | Stage Hand                                                                                                                                                        |