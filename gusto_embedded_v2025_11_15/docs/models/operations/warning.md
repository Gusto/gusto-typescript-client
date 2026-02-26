# Warning

## Example Usage

```typescript
import { Warning } from "openapi/models/operations";

let value: Warning = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `errorKey`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | Error key                                                                 |
| `category`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | Error category                                                            |
| `message`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Warning message                                                           |
| `metadata`                                                                | [operations.WarningMetadata](../../models/operations/warning-metadata.md) | :heavy_minus_sign:                                                        | N/A                                                                       |