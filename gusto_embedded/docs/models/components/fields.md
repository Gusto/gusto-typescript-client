# Fields

## Example Usage

```typescript
import { Fields } from "gusto_embedded/models/components";

let value: Fields = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `key`                                          | *string*                                       | :heavy_minus_sign:                             | Unique identifier of the field                 |
| `value`                                        | *string*                                       | :heavy_minus_sign:                             | Auto-filled value of the field                 |
| `x`                                            | *number*                                       | :heavy_minus_sign:                             | X-coordinate location of the field on the page |
| `y`                                            | *number*                                       | :heavy_minus_sign:                             | Y-coordinate location of the field on the page |
| `width`                                        | *number*                                       | :heavy_minus_sign:                             | Width of the field                             |
| `height`                                       | *number*                                       | :heavy_minus_sign:                             | Height of the field                            |
| `pageNumber`                                   | *number*                                       | :heavy_minus_sign:                             | Page number of the field                       |
| `dataType`                                     | *string*                                       | :heavy_minus_sign:                             | The field's data type                          |
| `required`                                     | *boolean*                                      | :heavy_minus_sign:                             | Whether the field is required                  |