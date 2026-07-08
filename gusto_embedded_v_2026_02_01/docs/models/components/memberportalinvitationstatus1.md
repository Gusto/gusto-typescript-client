# MemberPortalInvitationStatus1

Current status of the member portal invitation.
- `pending`: The invitation record has been created but the invitation email has not yet been delivered.
- `sent`: The invitation email has been delivered to the member.
- `verified`: The member has been verified by the member portal partner.
- `complete`: The member has fully completed their member portal registration.
- `cancelled`: The invitation has been cancelled, either via `DELETE` on this endpoint or because it was superseded.


## Example Usage

```typescript
import { MemberPortalInvitationStatus1 } from "@gusto/embedded-api-v-2026-02-01/models/components/memberportalinvitation.js";

let value: MemberPortalInvitationStatus1 = "sent";
```

## Values

```typescript
"pending" | "sent" | "verified" | "complete" | "cancelled"
```