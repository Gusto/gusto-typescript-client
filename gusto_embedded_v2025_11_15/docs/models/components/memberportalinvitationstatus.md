# MemberPortalInvitationStatus

Member portal invitation status information. Only included when the include param has the portal_invitations value set.

## Example Usage

```typescript
import { MemberPortalInvitationStatus } from "@gusto/embedded-api-v2025-11-15/models/components/showemployees.js";

let value: MemberPortalInvitationStatus = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [components.ShowEmployeesStatus](../../models/components/showemployeesstatus.md)              | :heavy_minus_sign:                                                                            | The current status of the member portal invitation.                                           |
| `tokenExpired`                                                                                | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the invitation token has expired.                                                     |
| `welcomeEmailSentAt`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the welcome email was sent.                                            |
| `lastPasswordResentAt`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the password reset was last resent.                                    |