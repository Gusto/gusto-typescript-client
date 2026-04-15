import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ContractorAddress = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
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
     * The UUID of the contractor
     */
    contractorUuid?: string | undefined;
};
/** @internal */
export declare const ContractorAddress$inboundSchema: z.ZodType<ContractorAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorAddress$Outbound = {
    version?: string | undefined;
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country: string;
    active?: boolean | undefined;
    contractor_uuid?: string | undefined;
};
/** @internal */
export declare const ContractorAddress$outboundSchema: z.ZodType<ContractorAddress$Outbound, z.ZodTypeDef, ContractorAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorAddress$ {
    /** @deprecated use `ContractorAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorAddress$Outbound, z.ZodTypeDef, ContractorAddress>;
    /** @deprecated use `ContractorAddress$Outbound` instead. */
    type Outbound = ContractorAddress$Outbound;
}
export declare function contractorAddressToJSON(contractorAddress: ContractorAddress): string;
export declare function contractorAddressFromJSON(jsonString: string): SafeParseResult<ContractorAddress, SDKValidationError>;
//# sourceMappingURL=contractoraddress.d.ts.map