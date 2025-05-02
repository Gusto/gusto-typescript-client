# PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody

Unprocessable Entity


## Supported Types

### `errors.UnprocessableEntityErrorObject1`

```typescript
const value: errors.UnprocessableEntityErrorObject1 = {
  errors: [
    {
      errorKey: "<value>",
      category: "<value>",
    },
  ],
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

### `errors.PayrollBlockersError`

```typescript
const value: errors.PayrollBlockersError = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

