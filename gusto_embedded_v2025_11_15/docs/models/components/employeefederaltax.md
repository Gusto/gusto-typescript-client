# EmployeeFederalTax

Federal tax information for an employee. The response structure varies based on the w4_data_type field.


## Supported Types

### `components.EmployeeFederalTaxPre2020`

```typescript
const value: components.EmployeeFederalTaxPre2020 = {
  version: "<value>",
  w4DataType: "pre_2020_w4",
  additionalWithholding: "<value>",
};
```

### `components.EmployeeFederalTaxRev2020`

```typescript
const value: components.EmployeeFederalTaxRev2020 = {
  version: "<value>",
  w4DataType: "rev_2020_w4",
  filingStatus: "<value>",
  extraWithholding: "<value>",
  twoJobs: false,
  dependentsAmount: "<value>",
  otherIncome: "<value>",
  deductions: "<value>",
};
```

