# BLSOccupation

A Bureau of Labor Statistics occupation code with its title and description, used for salary estimate calculations.

## Example Usage

```typescript
import { BLSOccupation } from "openapi/models";

let value: BLSOccupation = {
  code: "15-1252",
  title: "Software Developers",
  description:
    "Research, design, and develop computer and network software or specialized utility programs.",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `code`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Bureau of Labor Statistics (BLS) occupation code.                                            | 15-1252                                                                                      |
| `title`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | Occupation title.                                                                            | Software Developers                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Occupation description.                                                                      | Research, design, and develop computer and network software or specialized utility programs. |