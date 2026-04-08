# InvoiceData

Representation of a partners invoice data

## Example Usage

```typescript
import { InvoiceData } from "@gusto/embedded-api/models/components/invoicedata.js";

let value: InvoiceData = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `activeCompanies`                                                          | [components.ActiveCompanies](../../models/components/activecompanies.md)[] | :heavy_minus_sign:                                                         | The list of companies that are active within the invoice period            |