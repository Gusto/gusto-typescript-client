import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The representation of an admin user in Gusto.
 */
export type Admin = {
    /**
     * The unique id of the admin.
     */
    uuid: string;
    /**
     * The email of the admin for Gusto's system. If the email matches an existing user, this will create an admin account for them.
     */
    email?: string | undefined;
    /**
     * The first name of the admin.
     */
    firstName?: string | undefined;
    /**
     * The last name of the admin.
     */
    lastName?: string | undefined;
};
/** @internal */
export declare const Admin$inboundSchema: z.ZodType<Admin, z.ZodTypeDef, unknown>;
/** @internal */
export type Admin$Outbound = {
    uuid: string;
    email?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
};
/** @internal */
export declare const Admin$outboundSchema: z.ZodType<Admin$Outbound, z.ZodTypeDef, Admin>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Admin$ {
    /** @deprecated use `Admin$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Admin, z.ZodTypeDef, unknown>;
    /** @deprecated use `Admin$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Admin$Outbound, z.ZodTypeDef, Admin>;
    /** @deprecated use `Admin$Outbound` instead. */
    type Outbound = Admin$Outbound;
}
export declare function adminToJSON(admin: Admin): string;
export declare function adminFromJSON(jsonString: string): SafeParseResult<Admin, SDKValidationError>;
//# sourceMappingURL=admin.d.ts.map