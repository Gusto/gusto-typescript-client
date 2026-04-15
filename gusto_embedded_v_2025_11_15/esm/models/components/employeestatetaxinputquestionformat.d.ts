import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * An allowed value to answer the question
 */
export type EmployeeStateTaxInputQuestionFormatValue = string | boolean | number;
export type Options = {
    /**
     * An allowed value to answer the question
     */
    value?: string | boolean | number | undefined;
    /**
     * A display label that corresponds to the answer value
     */
    label: string;
};
export type EmployeeStateTaxInputQuestionFormat = {
    /**
     * Describes the type of question - Text, Number, Select, Currency, Date
     */
    type: string;
    /**
     * For "Select" type questions, the allowed values and display labels.
     */
    options?: Array<Options> | undefined;
};
/** @internal */
export declare const EmployeeStateTaxInputQuestionFormatValue$inboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormatValue, z.ZodTypeDef, unknown>;
export declare function employeeStateTaxInputQuestionFormatValueFromJSON(jsonString: string): SafeParseResult<EmployeeStateTaxInputQuestionFormatValue, SDKValidationError>;
/** @internal */
export declare const Options$inboundSchema: z.ZodType<Options, z.ZodTypeDef, unknown>;
export declare function optionsFromJSON(jsonString: string): SafeParseResult<Options, SDKValidationError>;
/** @internal */
export declare const EmployeeStateTaxInputQuestionFormat$inboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormat, z.ZodTypeDef, unknown>;
export declare function employeeStateTaxInputQuestionFormatFromJSON(jsonString: string): SafeParseResult<EmployeeStateTaxInputQuestionFormat, SDKValidationError>;
//# sourceMappingURL=employeestatetaxinputquestionformat.d.ts.map