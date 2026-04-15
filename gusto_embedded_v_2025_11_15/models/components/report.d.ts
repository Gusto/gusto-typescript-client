import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type Report = {
    /**
     * A unique identifier of the report request
     */
    requestUuid?: string | undefined;
    /**
     * Current status of the report, possible values are 'succeeded', 'pending', or 'failed'
     */
    status?: string | undefined;
    /**
     * The array of urls to access the report
     */
    reportUrls?: Array<string> | undefined;
};
/** @internal */
export declare const Report$inboundSchema: z.ZodType<Report, z.ZodTypeDef, unknown>;
/** @internal */
export type Report$Outbound = {
    request_uuid?: string | undefined;
    status?: string | undefined;
    report_urls?: Array<string> | undefined;
};
/** @internal */
export declare const Report$outboundSchema: z.ZodType<Report$Outbound, z.ZodTypeDef, Report>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Report$ {
    /** @deprecated use `Report$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Report, z.ZodTypeDef, unknown>;
    /** @deprecated use `Report$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Report$Outbound, z.ZodTypeDef, Report>;
    /** @deprecated use `Report$Outbound` instead. */
    type Outbound = Report$Outbound;
}
export declare function reportToJSON(report: Report): string;
export declare function reportFromJSON(jsonString: string): SafeParseResult<Report, SDKValidationError>;
//# sourceMappingURL=report.d.ts.map