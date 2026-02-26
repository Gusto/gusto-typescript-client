# HomeAddress

The signatory's home address

## Example Usage

```typescript
import { HomeAddress } from "@gusto/embedded-api-v2025-11-15/models/operations/postv1companysignatories.js";

let value: HomeAddress = {
  street1: "<value>",
  city: "East Annabellstead",
  state: "Virginia",
  zip: "24647-4102",
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