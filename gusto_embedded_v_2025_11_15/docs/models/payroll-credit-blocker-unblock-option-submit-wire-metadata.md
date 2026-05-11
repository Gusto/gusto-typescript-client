# PayrollCreditBlockerUnblockOptionSubmitWireMetadata

## Example Usage

```typescript
import { PayrollCreditBlockerUnblockOptionSubmitWireMetadata } from "openapi/models";

let value: PayrollCreditBlockerUnblockOptionSubmitWireMetadata = {
  wireInAmount: "<value>",
  wireInDeadline: new Date("2026-03-11T12:51:33.124Z"),
  wireInRequestUuid: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `wireInAmount`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The amount to be wired in (decimal string)                                                    |
| `wireInDeadline`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Deadline for the wire transfer to be received                                                 |
| `wireInRequestUuid`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | UUID of the wire in request                                                                   |