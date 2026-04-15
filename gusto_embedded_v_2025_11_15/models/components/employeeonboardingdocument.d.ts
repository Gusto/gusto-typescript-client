import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Configuration for an employee onboarding documents during onboarding
 */
export type EmployeeOnboardingDocument = {
    /**
     * Whether to include Form I-9 for an employee during onboarding
     */
    i9Document?: string | undefined;
};
/** @internal */
export declare const EmployeeOnboardingDocument$inboundSchema: z.ZodType<EmployeeOnboardingDocument, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeOnboardingDocument$Outbound = {
    i9_document?: string | undefined;
};
/** @internal */
export declare const EmployeeOnboardingDocument$outboundSchema: z.ZodType<EmployeeOnboardingDocument$Outbound, z.ZodTypeDef, EmployeeOnboardingDocument>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeOnboardingDocument$ {
    /** @deprecated use `EmployeeOnboardingDocument$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeOnboardingDocument, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeOnboardingDocument$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeOnboardingDocument$Outbound, z.ZodTypeDef, EmployeeOnboardingDocument>;
    /** @deprecated use `EmployeeOnboardingDocument$Outbound` instead. */
    type Outbound = EmployeeOnboardingDocument$Outbound;
}
export declare function employeeOnboardingDocumentToJSON(employeeOnboardingDocument: EmployeeOnboardingDocument): string;
export declare function employeeOnboardingDocumentFromJSON(jsonString: string): SafeParseResult<EmployeeOnboardingDocument, SDKValidationError>;
//# sourceMappingURL=employeeonboardingdocument.d.ts.map