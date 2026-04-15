import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type ReportTemplate = {
    /**
     * List of columns recommended
     */
    columns?: Array<string> | undefined;
    /**
     * List of groupings recommended
     */
    groupings?: Array<string> | undefined;
    /**
     * Company UUID
     */
    companyUuid?: string | undefined;
    /**
     * Type of report template
     */
    reportType?: string | undefined;
};
/** @internal */
export declare const ReportTemplate$inboundSchema: z.ZodType<ReportTemplate, z.ZodTypeDef, unknown>;
/** @internal */
export type ReportTemplate$Outbound = {
    columns?: Array<string> | undefined;
    groupings?: Array<string> | undefined;
    company_uuid?: string | undefined;
    report_type?: string | undefined;
};
/** @internal */
export declare const ReportTemplate$outboundSchema: z.ZodType<ReportTemplate$Outbound, z.ZodTypeDef, ReportTemplate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReportTemplate$ {
    /** @deprecated use `ReportTemplate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReportTemplate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReportTemplate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReportTemplate$Outbound, z.ZodTypeDef, ReportTemplate>;
    /** @deprecated use `ReportTemplate$Outbound` instead. */
    type Outbound = ReportTemplate$Outbound;
}
export declare function reportTemplateToJSON(reportTemplate: ReportTemplate): string;
export declare function reportTemplateFromJSON(jsonString: string): SafeParseResult<ReportTemplate, SDKValidationError>;
//# sourceMappingURL=reporttemplate.d.ts.map