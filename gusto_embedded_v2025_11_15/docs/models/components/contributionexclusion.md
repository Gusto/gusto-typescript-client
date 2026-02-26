# ContributionExclusion

The representation of a contribution exclusion for a company benefit.

## Example Usage

```typescript
import { ContributionExclusion } from "@gusto/embedded-api-v2025-11-15/models/components/contributionexclusion.js";

let value: ContributionExclusion = {
  contributionUuid: "<id>",
  contributionType: "<value>",
  excluded: true,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contributionUuid`                                           | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contribution type.                           |
| `contributionType`                                           | *string*                                                     | :heavy_check_mark:                                           | The name of the contribution type.                           |
| `excluded`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | Whether this contribution type is excluded from the benefit. |