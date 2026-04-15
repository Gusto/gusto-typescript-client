import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type EmployeeCheckNumberMapping = {
    /**
     * The UUID for an employee
     */
    employeeUuid?: string | undefined;
    /**
     * The check number for the relevant employee
     */
    checkNumber?: number | undefined;
};
/**
 * Example response
 */
export type PayrollCheck = {
    /**
     * A unique identifier of the payroll.
     */
    payrollUuid?: string | undefined;
    /**
     * The format the checks will be printed.
     */
    printingFormat?: string | undefined;
    /**
     * The starting check number for the checks being printed.
     */
    startingCheckNumber?: string | undefined;
    /**
     * A unique identifier of the Generated Document request
     */
    requestUuid?: string | undefined;
    /**
     * Current status of the Generated Document
     */
    status?: string | undefined;
    /**
     * An array of mapping employee uuids to their check numbers
     */
    employeeCheckNumberMapping?: Array<EmployeeCheckNumberMapping> | undefined;
};
/** @internal */
export declare const EmployeeCheckNumberMapping$inboundSchema: z.ZodType<EmployeeCheckNumberMapping, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeCheckNumberMapping$Outbound = {
    employee_uuid?: string | undefined;
    check_number?: number | undefined;
};
/** @internal */
export declare const EmployeeCheckNumberMapping$outboundSchema: z.ZodType<EmployeeCheckNumberMapping$Outbound, z.ZodTypeDef, EmployeeCheckNumberMapping>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeCheckNumberMapping$ {
    /** @deprecated use `EmployeeCheckNumberMapping$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeCheckNumberMapping, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeCheckNumberMapping$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeCheckNumberMapping$Outbound, z.ZodTypeDef, EmployeeCheckNumberMapping>;
    /** @deprecated use `EmployeeCheckNumberMapping$Outbound` instead. */
    type Outbound = EmployeeCheckNumberMapping$Outbound;
}
export declare function employeeCheckNumberMappingToJSON(employeeCheckNumberMapping: EmployeeCheckNumberMapping): string;
export declare function employeeCheckNumberMappingFromJSON(jsonString: string): SafeParseResult<EmployeeCheckNumberMapping, SDKValidationError>;
/** @internal */
export declare const PayrollCheck$inboundSchema: z.ZodType<PayrollCheck, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollCheck$Outbound = {
    payroll_uuid?: string | undefined;
    printing_format?: string | undefined;
    starting_check_number?: string | undefined;
    request_uuid?: string | undefined;
    status?: string | undefined;
    employee_check_number_mapping?: Array<EmployeeCheckNumberMapping$Outbound> | undefined;
};
/** @internal */
export declare const PayrollCheck$outboundSchema: z.ZodType<PayrollCheck$Outbound, z.ZodTypeDef, PayrollCheck>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollCheck$ {
    /** @deprecated use `PayrollCheck$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollCheck, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollCheck$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollCheck$Outbound, z.ZodTypeDef, PayrollCheck>;
    /** @deprecated use `PayrollCheck$Outbound` instead. */
    type Outbound = PayrollCheck$Outbound;
}
export declare function payrollCheckToJSON(payrollCheck: PayrollCheck): string;
export declare function payrollCheckFromJSON(jsonString: string): SafeParseResult<PayrollCheck, SDKValidationError>;
//# sourceMappingURL=payrollcheck.d.ts.map