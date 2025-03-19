# HomeAddress

The signatory's home address

## Example Usage

```typescript
import { HomeAddress } from "@gusto/embedded-api/models/operations/postv1companysignatories.js";

let value: HomeAddress = {
  street1: "<value>",
  city: "Fort Santinoport",
  state: "Kentucky",
  zip: "60040",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `street1`          | *string*           | :heavy_check_mark: | N/A                |
| `street2`          | *string*           | :heavy_minus_sign: | N/A                |
| `city`             | *string*           | :heavy_check_mark: | N/A                |
| `state`            | *string*           | :heavy_check_mark: | N/A                |
| `zip`              | *string*           | :heavy_check_mark: | N/A                |