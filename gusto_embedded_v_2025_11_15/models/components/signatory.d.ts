import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * |   |   |
 *
 * @remarks
 * |---|---|
 * |__Status__| __Description__ |
 * | Pass | Signatory can sign all forms |
 * | Fail | Signatory cannot sign forms |
 * | Skipped | Signatory cannot sign Form 8655 until the form is manually uploaded as wet-signed |
 * | null | Identity verification process has not been completed |
 */
export declare const IdentityVerificationStatus: {
    readonly Pass: "Pass";
    readonly Fail: "Fail";
    readonly Skipped: "Skipped";
};
/**
 * |   |   |
 *
 * @remarks
 * |---|---|
 * |__Status__| __Description__ |
 * | Pass | Signatory can sign all forms |
 * | Fail | Signatory cannot sign forms |
 * | Skipped | Signatory cannot sign Form 8655 until the form is manually uploaded as wet-signed |
 * | null | Identity verification process has not been completed |
 */
export type IdentityVerificationStatus = ClosedEnum<typeof IdentityVerificationStatus>;
export type HomeAddress = {
    street1?: string | undefined;
    street2?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
};
/**
 * The representation of a company's signatory
 */
export type Signatory = {
    uuid: string;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    title?: string | null | undefined;
    phone?: string | null | undefined;
    email?: string | undefined;
    birthday?: string | null | undefined;
    /**
     * Whether or not the signatory is also the payroll admin of the company.
     */
    isAdmin?: boolean | undefined;
    /**
     * Indicates whether the signatory has an SSN in Gusto.
     */
    hasSsn?: boolean | undefined;
    /**
     * The current version of the signatory. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * |   |   |
     *
     * @remarks
     * |---|---|
     * |__Status__| __Description__ |
     * | Pass | Signatory can sign all forms |
     * | Fail | Signatory cannot sign forms |
     * | Skipped | Signatory cannot sign Form 8655 until the form is manually uploaded as wet-signed |
     * | null | Identity verification process has not been completed |
     */
    identityVerificationStatus?: IdentityVerificationStatus | null | undefined;
    homeAddress?: HomeAddress | null | undefined;
};
/** @internal */
export declare const IdentityVerificationStatus$inboundSchema: z.ZodNativeEnum<typeof IdentityVerificationStatus>;
/** @internal */
export declare const IdentityVerificationStatus$outboundSchema: z.ZodNativeEnum<typeof IdentityVerificationStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityVerificationStatus$ {
    /** @deprecated use `IdentityVerificationStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Pass: "Pass";
        readonly Fail: "Fail";
        readonly Skipped: "Skipped";
    }>;
    /** @deprecated use `IdentityVerificationStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Pass: "Pass";
        readonly Fail: "Fail";
        readonly Skipped: "Skipped";
    }>;
}
/** @internal */
export declare const HomeAddress$inboundSchema: z.ZodType<HomeAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type HomeAddress$Outbound = {
    street_1?: string | undefined;
    street_2?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country: string;
};
/** @internal */
export declare const HomeAddress$outboundSchema: z.ZodType<HomeAddress$Outbound, z.ZodTypeDef, HomeAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HomeAddress$ {
    /** @deprecated use `HomeAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HomeAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `HomeAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HomeAddress$Outbound, z.ZodTypeDef, HomeAddress>;
    /** @deprecated use `HomeAddress$Outbound` instead. */
    type Outbound = HomeAddress$Outbound;
}
export declare function homeAddressToJSON(homeAddress: HomeAddress): string;
export declare function homeAddressFromJSON(jsonString: string): SafeParseResult<HomeAddress, SDKValidationError>;
/** @internal */
export declare const Signatory$inboundSchema: z.ZodType<Signatory, z.ZodTypeDef, unknown>;
/** @internal */
export type Signatory$Outbound = {
    uuid: string;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    title?: string | null | undefined;
    phone?: string | null | undefined;
    email?: string | undefined;
    birthday?: string | null | undefined;
    is_admin?: boolean | undefined;
    has_ssn?: boolean | undefined;
    version?: string | undefined;
    identity_verification_status?: string | null | undefined;
    home_address?: HomeAddress$Outbound | null | undefined;
};
/** @internal */
export declare const Signatory$outboundSchema: z.ZodType<Signatory$Outbound, z.ZodTypeDef, Signatory>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Signatory$ {
    /** @deprecated use `Signatory$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Signatory, z.ZodTypeDef, unknown>;
    /** @deprecated use `Signatory$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Signatory$Outbound, z.ZodTypeDef, Signatory>;
    /** @deprecated use `Signatory$Outbound` instead. */
    type Outbound = Signatory$Outbound;
}
export declare function signatoryToJSON(signatory: Signatory): string;
export declare function signatoryFromJSON(jsonString: string): SafeParseResult<Signatory, SDKValidationError>;
//# sourceMappingURL=signatory.d.ts.map