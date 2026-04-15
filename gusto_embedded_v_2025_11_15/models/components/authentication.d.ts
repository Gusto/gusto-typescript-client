import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type Authentication = {
    /**
     * A new access token that can be used for subsequent authenticated requests
     */
    accessToken?: string | undefined;
    /**
     * The literal string 'bearer'
     */
    tokenType?: string | undefined;
    /**
     * The TTL of this token. After this amount of time, you must hit the refresh token endpoint to continue making authenticated requests.
     */
    expiresIn?: number | undefined;
    /**
     * A token that must be passed to the refresh token endpoint to get a new authenticated token.
     */
    refreshToken?: string | undefined;
    /**
     * Datetime for when the new access token is created.
     */
    createdAt?: string | undefined;
    /**
     * All of the scopes for which the access token provides access.
     */
    scope?: string | undefined;
};
/** @internal */
export declare const Authentication$inboundSchema: z.ZodType<Authentication, z.ZodTypeDef, unknown>;
/** @internal */
export type Authentication$Outbound = {
    access_token?: string | undefined;
    token_type: string;
    expires_in: number;
    refresh_token?: string | undefined;
    created_at?: string | undefined;
    scope?: string | undefined;
};
/** @internal */
export declare const Authentication$outboundSchema: z.ZodType<Authentication$Outbound, z.ZodTypeDef, Authentication>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Authentication$ {
    /** @deprecated use `Authentication$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Authentication, z.ZodTypeDef, unknown>;
    /** @deprecated use `Authentication$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Authentication$Outbound, z.ZodTypeDef, Authentication>;
    /** @deprecated use `Authentication$Outbound` instead. */
    type Outbound = Authentication$Outbound;
}
export declare function authenticationToJSON(authentication: Authentication): string;
export declare function authenticationFromJSON(jsonString: string): SafeParseResult<Authentication, SDKValidationError>;
//# sourceMappingURL=authentication.d.ts.map