# PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody

## Example Usage

```typescript
import { PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody } from "gusto_embedded/models/operations";

let value:
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody =
    {
      printingFormat: "top",
    };
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `printingFormat`                                                                                                                                                                                      | [operations.PrintingFormat](../../models/operations/printingformat.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                    | The type of check stock being printed. Check the "Types of check stock" section in this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types |
| `startingCheckNumber`                                                                                                                                                                                 | *number*                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                    | The starting check number we will start generating checks from. Use to override the sequence that will be used to generate check numbers.                                                             |