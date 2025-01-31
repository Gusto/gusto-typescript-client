# PostV1SandboxGenerateW2RequestBody

## Example Usage

```typescript
import { PostV1SandboxGenerateW2RequestBody } from "@gusto/embedded-api/models/operations";

let value: PostV1SandboxGenerateW2RequestBody = {
  employeeId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The employee UUID.                                                                           |
| `year`                                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | Must be equal to or more recent than 2015. If not specified, defaults to the previous year.<br/> |