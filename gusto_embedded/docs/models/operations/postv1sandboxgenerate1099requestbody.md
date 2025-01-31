# PostV1SandboxGenerate1099RequestBody

## Example Usage

```typescript
import { PostV1SandboxGenerate1099RequestBody } from "@gusto/embedded-api/models/operations";

let value: PostV1SandboxGenerate1099RequestBody = {
  contractorId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `contractorId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | The contractor UUID.                                                                         |
| `year`                                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | Must be equal to or more recent than 2015. If not specified, defaults to the previous year.<br/> |