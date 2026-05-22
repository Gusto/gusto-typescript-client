# SignatoryCreateRequestHomeAddress

The signatory's home address.

## Example Usage

```typescript
import { SignatoryCreateRequestHomeAddress } from "@gusto/embedded-api/models/components/signatorycreaterequest.js";

let value: SignatoryCreateRequestHomeAddress = {
  street1: "<value>",
  city: "Port Annabel",
  state: "Tennessee",
  zip: "34573",
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
| `country`          | *string*           | :heavy_minus_sign: | N/A                |