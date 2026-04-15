import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EmployeeStateTaxAnswer, EmployeeStateTaxAnswer$Outbound } from "./employeestatetaxanswer.js";
import { EmployeeStateTaxInputQuestionFormat, EmployeeStateTaxInputQuestionFormat$Outbound } from "./employeestatetaxinputquestionformat.js";
export type EmployeeStateTaxQuestion = {
    /**
     * A short title for the question
     */
    label: string;
    /**
     * An explaination of the question - this may contain inline html formatted links.
     */
    description: string;
    /**
     * A unique identifier of the question (for the given state) - used for updating the answer.
     */
    key: string;
    inputQuestionFormat: EmployeeStateTaxInputQuestionFormat;
    answers: Array<EmployeeStateTaxAnswer>;
};
/** @internal */
export declare const EmployeeStateTaxQuestion$inboundSchema: z.ZodType<EmployeeStateTaxQuestion, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeStateTaxQuestion$Outbound = {
    label: string;
    description: string;
    key: string;
    input_question_format: EmployeeStateTaxInputQuestionFormat$Outbound;
    answers: Array<EmployeeStateTaxAnswer$Outbound>;
};
/** @internal */
export declare const EmployeeStateTaxQuestion$outboundSchema: z.ZodType<EmployeeStateTaxQuestion$Outbound, z.ZodTypeDef, EmployeeStateTaxQuestion>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeStateTaxQuestion$ {
    /** @deprecated use `EmployeeStateTaxQuestion$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeStateTaxQuestion, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeStateTaxQuestion$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeStateTaxQuestion$Outbound, z.ZodTypeDef, EmployeeStateTaxQuestion>;
    /** @deprecated use `EmployeeStateTaxQuestion$Outbound` instead. */
    type Outbound = EmployeeStateTaxQuestion$Outbound;
}
export declare function employeeStateTaxQuestionToJSON(employeeStateTaxQuestion: EmployeeStateTaxQuestion): string;
export declare function employeeStateTaxQuestionFromJSON(jsonString: string): SafeParseResult<EmployeeStateTaxQuestion, SDKValidationError>;
//# sourceMappingURL=employeestatetaxquestion.d.ts.map