import * as z from "zod";
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
/** @internal */
export type EmployeeStateTaxInputQuestionFormatValue$Outbound = string | boolean | number;
/** @internal */
export declare const EmployeeStateTaxInputQuestionFormatValue$outboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormatValue$Outbound, z.ZodTypeDef, EmployeeStateTaxInputQuestionFormatValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeStateTaxInputQuestionFormatValue$ {
    /** @deprecated use `EmployeeStateTaxInputQuestionFormatValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormatValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeStateTaxInputQuestionFormatValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormatValue$Outbound, z.ZodTypeDef, EmployeeStateTaxInputQuestionFormatValue>;
    /** @deprecated use `EmployeeStateTaxInputQuestionFormatValue$Outbound` instead. */
    type Outbound = EmployeeStateTaxInputQuestionFormatValue$Outbound;
}
export declare function employeeStateTaxInputQuestionFormatValueToJSON(employeeStateTaxInputQuestionFormatValue: EmployeeStateTaxInputQuestionFormatValue): string;
export declare function employeeStateTaxInputQuestionFormatValueFromJSON(jsonString: string): SafeParseResult<EmployeeStateTaxInputQuestionFormatValue, SDKValidationError>;
/** @internal */
export declare const Options$inboundSchema: z.ZodType<Options, z.ZodTypeDef, unknown>;
/** @internal */
export type Options$Outbound = {
    value?: string | boolean | number | undefined;
    label: string;
};
/** @internal */
export declare const Options$outboundSchema: z.ZodType<Options$Outbound, z.ZodTypeDef, Options>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Options$ {
    /** @deprecated use `Options$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Options, z.ZodTypeDef, unknown>;
    /** @deprecated use `Options$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Options$Outbound, z.ZodTypeDef, Options>;
    /** @deprecated use `Options$Outbound` instead. */
    type Outbound = Options$Outbound;
}
export declare function optionsToJSON(options: Options): string;
export declare function optionsFromJSON(jsonString: string): SafeParseResult<Options, SDKValidationError>;
/** @internal */
export declare const EmployeeStateTaxInputQuestionFormat$inboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormat, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeStateTaxInputQuestionFormat$Outbound = {
    type: string;
    options?: Array<Options$Outbound> | undefined;
};
/** @internal */
export declare const EmployeeStateTaxInputQuestionFormat$outboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormat$Outbound, z.ZodTypeDef, EmployeeStateTaxInputQuestionFormat>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeStateTaxInputQuestionFormat$ {
    /** @deprecated use `EmployeeStateTaxInputQuestionFormat$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormat, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeStateTaxInputQuestionFormat$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeStateTaxInputQuestionFormat$Outbound, z.ZodTypeDef, EmployeeStateTaxInputQuestionFormat>;
    /** @deprecated use `EmployeeStateTaxInputQuestionFormat$Outbound` instead. */
    type Outbound = EmployeeStateTaxInputQuestionFormat$Outbound;
}
export declare function employeeStateTaxInputQuestionFormatToJSON(employeeStateTaxInputQuestionFormat: EmployeeStateTaxInputQuestionFormat): string;
export declare function employeeStateTaxInputQuestionFormatFromJSON(jsonString: string): SafeParseResult<EmployeeStateTaxInputQuestionFormat, SDKValidationError>;
//# sourceMappingURL=employeestatetaxinputquestionformat.d.ts.map