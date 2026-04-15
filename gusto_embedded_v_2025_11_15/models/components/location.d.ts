import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The representation of an address in Gusto.
 */
export type Location = {
    /**
     * The UUID of the location object.
     */
    uuid: string;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The UUID for the company to which the location belongs. Only included if the location belongs to a company.
     */
    companyUuid?: string | undefined;
    /**
     * The phone number for the location. Required for company locations. Optional for employee locations.
     */
    phoneNumber?: string | undefined;
    street1?: string | undefined;
    street2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
    /**
     * The status of the location. Inactive locations have been deleted, but may still have historical data associated with them.
     */
    active?: boolean | undefined;
    /**
     * Specifies if the location is the company's mailing address. Only included if the location belongs to a company.
     */
    mailingAddress?: boolean | undefined;
    /**
     * Specifies if the location is the company's filing address. Only included if the location belongs to a company.
     */
    filingAddress?: boolean | undefined;
    /**
     * Datetime for when location is created
     */
    createdAt?: string | undefined;
    /**
     * Datetime for when location is updated
     */
    updatedAt?: string | undefined;
};
/** @internal */
export declare const Location$inboundSchema: z.ZodType<Location, z.ZodTypeDef, unknown>;
/** @internal */
export type Location$Outbound = {
    uuid: string;
    version?: string | undefined;
    company_uuid?: string | undefined;
    phone_number?: string | undefined;
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country: string;
    active?: boolean | undefined;
    mailing_address?: boolean | undefined;
    filing_address?: boolean | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
};
/** @internal */
export declare const Location$outboundSchema: z.ZodType<Location$Outbound, z.ZodTypeDef, Location>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Location$ {
    /** @deprecated use `Location$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Location, z.ZodTypeDef, unknown>;
    /** @deprecated use `Location$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Location$Outbound, z.ZodTypeDef, Location>;
    /** @deprecated use `Location$Outbound` instead. */
    type Outbound = Location$Outbound;
}
export declare function locationToJSON(location: Location): string;
export declare function locationFromJSON(jsonString: string): SafeParseResult<Location, SDKValidationError>;
//# sourceMappingURL=location.d.ts.map