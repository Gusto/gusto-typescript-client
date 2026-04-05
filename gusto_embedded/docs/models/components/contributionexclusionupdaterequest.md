# ContributionExclusionUpdateRequest

## Example Usage

```typescript
import { ContributionExclusionUpdateRequest } from "@gusto/embedded-api/models/components/contributionexclusionupdaterequest.js";

let value: ContributionExclusionUpdateRequest = {
  contributionExclusions: [
    {
      contributionUuid: "082dfd3e-5b55-11f0-bb42-ab7136ba04e2",
      contributionType: "Bonus",
      excluded: true,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `contributionExclusions`                                                               | [components.ContributionExclusion](../../models/components/contributionexclusion.md)[] | :heavy_check_mark:                                                                     | The list of contribution exclusions to update                                          |