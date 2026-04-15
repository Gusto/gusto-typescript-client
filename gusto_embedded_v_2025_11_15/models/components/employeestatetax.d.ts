import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EmployeeStateTaxQuestion, EmployeeStateTaxQuestion$Outbound } from "./employeestatetaxquestion.js";
/**
 * Example response
 */
export type EmployeeStateTax = {
    /**
     * The employee's uuid
     */
    employeeUuid: string;
    /**
     * Two letter US state abbreviation
     */
    state: string;
    fileNewHireReport?: boolean | null | undefined;
    isWorkState?: boolean | undefined;
    questions: Array<EmployeeStateTaxQuestion>;
};
/** @internal */
export declare const EmployeeStateTax$inboundSchema: z.ZodType<EmployeeStateTax, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeStateTax$Outbound = {
    employee_uuid: string;
    state: string;
    file_new_hire_report?: boolean | null | undefined;
    is_work_state?: boolean | undefined;
    questions: Array<EmployeeStateTaxQuestion$Outbound>;
};
/** @internal */
export declare const EmployeeStateTax$outboundSchema: z.ZodType<EmployeeStateTax$Outbound, z.ZodTypeDef, EmployeeStateTax>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeStateTax$ {
    /** @deprecated use `EmployeeStateTax$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeStateTax, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeStateTax$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeStateTax$Outbound, z.ZodTypeDef, EmployeeStateTax>;
    /** @deprecated use `EmployeeStateTax$Outbound` instead. */
    type Outbound = EmployeeStateTax$Outbound;
}
export declare function employeeStateTaxToJSON(employeeStateTax: EmployeeStateTax): string;
export declare function employeeStateTaxFromJSON(jsonString: string): SafeParseResult<EmployeeStateTax, SDKValidationError>;
//# sourceMappingURL=employeestatetax.d.ts.map