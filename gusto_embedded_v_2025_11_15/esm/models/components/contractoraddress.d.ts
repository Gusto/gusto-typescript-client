import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ContractorAddress = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    street1?: string | null | undefined;
    street2?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    zip?: string | null | undefined;
    country: string | null;
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
export declare function contractorAddressFromJSON(jsonString: string): SafeParseResult<ContractorAddress, SDKValidationError>;
//# sourceMappingURL=contractoraddress.d.ts.map