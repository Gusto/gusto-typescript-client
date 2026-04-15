# ContributionExclusion

The representation of a contribution exclusion for a company benefit.

## Example Usage

```typescript
import { ContributionExclusion } from "@gusto/embedded-api/models/components/contributionexclusion.js";

let value: ContributionExclusion = {
  contributionUuid: "082dfd3e-5b55-11f0-bb42-ab7136ba04e2",
  contributionType: "Bonus",
  excluded: true,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contributionUuid`                                           | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contribution type.                           | 082dfd3e-5b55-11f0-bb42-ab7136ba04e2                         |
| `contributionType`                                           | *string*                                                     | :heavy_check_mark:                                           | The name of the contribution type.                           | Bonus                                                        |
| `excluded`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | Whether this contribution type is excluded from the benefit. |                                                              |