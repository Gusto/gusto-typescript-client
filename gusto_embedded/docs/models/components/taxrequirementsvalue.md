# TaxRequirementsValue

The value or "answer" for a tax requirement. Type depends on the requirement metadata type (e.g. string for text/account_number, boolean for radio/checkbox, number for percent/currency/tax_rate). Null when the requirement has not been answered.


## Supported Types

### `boolean`

```typescript
const value: boolean = true;
```

### `string`

```typescript
const value: string = "<value>";
```

### `number`

```typescript
const value: number = 1284.03;
```

