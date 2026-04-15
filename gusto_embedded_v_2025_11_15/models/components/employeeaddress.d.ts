import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type EmployeeAddress = {
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
     * The UUID of the employee address
     */
    uuid?: string | undefined;
    /**
     * The UUID of the employee
     */
    employeeUuid?: string | undefined;
    /**
     * The date the employee started living at the address.
     */
    effectiveDate?: RFCDate | undefined;
    /**
     * Determines if home taxes should be withheld and paid for employee.
     */
    courtesyWithholding?: boolean | undefined;
};
/** @internal */
export declare const EmployeeAddress$inboundSchema: z.ZodType<EmployeeAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeAddress$Outbound = {
    version?: string | undefined;
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country: string;
    active?: boolean | undefined;
    uuid?: string | undefined;
    employee_uuid?: string | undefined;
    effective_date?: string | undefined;
    courtesy_withholding?: boolean | undefined;
};
/** @internal */
export declare const EmployeeAddress$outboundSchema: z.ZodType<EmployeeAddress$Outbound, z.ZodTypeDef, EmployeeAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeAddress$ {
    /** @deprecated use `EmployeeAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeAddress$Outbound, z.ZodTypeDef, EmployeeAddress>;
    /** @deprecated use `EmployeeAddress$Outbound` instead. */
    type Outbound = EmployeeAddress$Outbound;
}
export declare function employeeAddressToJSON(employeeAddress: EmployeeAddress): string;
export declare function employeeAddressFromJSON(jsonString: string): SafeParseResult<EmployeeAddress, SDKValidationError>;
//# sourceMappingURL=employeeaddress.d.ts.map