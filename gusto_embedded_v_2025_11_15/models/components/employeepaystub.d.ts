import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The representation of an employee pay stub information.
 */
export type EmployeePayStub = {
    /**
     * The UUID of the employee pay stub.
     */
    uuid: string;
    /**
     * The check date of the pay stub.
     */
    checkDate?: string | undefined;
    /**
     * The gross pay amount for the pay stub.
     */
    grossPay?: string | undefined;
    /**
     * The net pay amount for the pay stub.
     */
    netPay?: string | undefined;
    /**
     * A unique identifier of the payroll to which the pay stub belongs.
     */
    payrollUuid?: string | undefined;
    /**
     * The check amount for the pay stub.
     */
    checkAmount?: string | undefined;
};
/** @internal */
export declare const EmployeePayStub$inboundSchema: z.ZodType<EmployeePayStub, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeePayStub$Outbound = {
    uuid: string;
    check_date?: string | undefined;
    gross_pay?: string | undefined;
    net_pay?: string | undefined;
    payroll_uuid?: string | undefined;
    check_amount?: string | undefined;
};
/** @internal */
export declare const EmployeePayStub$outboundSchema: z.ZodType<EmployeePayStub$Outbound, z.ZodTypeDef, EmployeePayStub>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeePayStub$ {
    /** @deprecated use `EmployeePayStub$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeePayStub, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeePayStub$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeePayStub$Outbound, z.ZodTypeDef, EmployeePayStub>;
    /** @deprecated use `EmployeePayStub$Outbound` instead. */
    type Outbound = EmployeePayStub$Outbound;
}
export declare function employeePayStubToJSON(employeePayStub: EmployeePayStub): string;
export declare function employeePayStubFromJSON(jsonString: string): SafeParseResult<EmployeePayStub, SDKValidationError>;
//# sourceMappingURL=employeepaystub.d.ts.map