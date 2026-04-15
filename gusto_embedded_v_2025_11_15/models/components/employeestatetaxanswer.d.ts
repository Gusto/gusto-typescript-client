import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The answer to the corresponding question - this may be a string, number, boolean, or null.
 */
export type Value = string | number | boolean;
export type EmployeeStateTaxAnswer = {
    /**
     * The answer to the corresponding question - this may be a string, number, boolean, or null.
     */
    value?: string | number | boolean | null | undefined;
    /**
     * The effective date of the answer - currently always “2010-01-01”.
     */
    validFrom?: string | undefined;
    /**
     * The effective end date of the answer - currently always null.
     */
    validUpTo?: any | null | undefined;
};
/** @internal */
export declare const Value$inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown>;
/** @internal */
export type Value$Outbound = string | number | boolean;
/** @internal */
export declare const Value$outboundSchema: z.ZodType<Value$Outbound, z.ZodTypeDef, Value>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Value$ {
    /** @deprecated use `Value$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown>;
    /** @deprecated use `Value$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Value$Outbound, z.ZodTypeDef, Value>;
    /** @deprecated use `Value$Outbound` instead. */
    type Outbound = Value$Outbound;
}
export declare function valueToJSON(value: Value): string;
export declare function valueFromJSON(jsonString: string): SafeParseResult<Value, SDKValidationError>;
/** @internal */
export declare const EmployeeStateTaxAnswer$inboundSchema: z.ZodType<EmployeeStateTaxAnswer, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeStateTaxAnswer$Outbound = {
    value?: string | number | boolean | null | undefined;
    valid_from?: string | undefined;
    valid_up_to?: any | null | undefined;
};
/** @internal */
export declare const EmployeeStateTaxAnswer$outboundSchema: z.ZodType<EmployeeStateTaxAnswer$Outbound, z.ZodTypeDef, EmployeeStateTaxAnswer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeStateTaxAnswer$ {
    /** @deprecated use `EmployeeStateTaxAnswer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeStateTaxAnswer, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeStateTaxAnswer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeStateTaxAnswer$Outbound, z.ZodTypeDef, EmployeeStateTaxAnswer>;
    /** @deprecated use `EmployeeStateTaxAnswer$Outbound` instead. */
    type Outbound = EmployeeStateTaxAnswer$Outbound;
}
export declare function employeeStateTaxAnswerToJSON(employeeStateTaxAnswer: EmployeeStateTaxAnswer): string;
export declare function employeeStateTaxAnswerFromJSON(jsonString: string): SafeParseResult<EmployeeStateTaxAnswer, SDKValidationError>;
//# sourceMappingURL=employeestatetaxanswer.d.ts.map