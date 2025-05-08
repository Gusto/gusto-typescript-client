# ApplicableIf

## Example Usage

```typescript
import { ApplicableIf } from "@gusto/embedded-api/models/components/taxrequirement.js";

let value: ApplicableIf = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `key`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | An identifier for an individual requirement. Uniqueness is guaranteed within a requirement set. |
| `value`                                                                                         | *components.TaxRequirementApplicableIfValue*                                                    | :heavy_minus_sign:                                                                              | The required value of the requirement identified by `key`                                       |