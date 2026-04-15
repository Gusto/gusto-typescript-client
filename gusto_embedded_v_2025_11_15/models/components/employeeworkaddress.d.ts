import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * List of employee work addresses
 */
export type EmployeeWorkAddress = {
    /**
     * The unique identifier of this work address.
     */
    uuid: string;
    /**
     * The date the employee began working at this location.
     */
    effectiveDate?: string | undefined;
    /**
     * Signifies if this address is the active work address for the current date
     */
    active?: boolean | undefined;
    /**
     * UUID reference to the company location for this work address.
     */
    locationUuid?: string | undefined;
    /**
     * UUID reference to the employee for this work address.
     */
    employeeUuid?: string | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    street1?: string | undefined;
    street2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
};
/** @internal */
export declare const EmployeeWorkAddress$inboundSchema: z.ZodType<EmployeeWorkAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeWorkAddress$Outbound = {
    uuid: string;
    effective_date?: string | undefined;
    active?: boolean | undefined;
    location_uuid?: string | undefined;
    employee_uuid?: string | undefined;
    version: string;
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country: string;
};
/** @internal */
export declare const EmployeeWorkAddress$outboundSchema: z.ZodType<EmployeeWorkAddress$Outbound, z.ZodTypeDef, EmployeeWorkAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeWorkAddress$ {
    /** @deprecated use `EmployeeWorkAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeWorkAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeWorkAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeWorkAddress$Outbound, z.ZodTypeDef, EmployeeWorkAddress>;
    /** @deprecated use `EmployeeWorkAddress$Outbound` instead. */
    type Outbound = EmployeeWorkAddress$Outbound;
}
export declare function employeeWorkAddressToJSON(employeeWorkAddress: EmployeeWorkAddress): string;
export declare function employeeWorkAddressFromJSON(jsonString: string): SafeParseResult<EmployeeWorkAddress, SDKValidationError>;
//# sourceMappingURL=employeeworkaddress.d.ts.map