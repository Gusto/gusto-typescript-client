import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type CreateReport = {
    /**
     * A unique identifier of the report request
     */
    requestUuid?: string | undefined;
    /**
     * Company UUID
     */
    companyUuid?: string | undefined;
    /**
     * Title of the report
     */
    customName?: string | undefined;
    /**
     * File type
     */
    fileType?: string | undefined;
};
/** @internal */
export declare const CreateReport$inboundSchema: z.ZodType<CreateReport, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateReport$Outbound = {
    request_uuid?: string | undefined;
    company_uuid?: string | undefined;
    custom_name?: string | undefined;
    file_type?: string | undefined;
};
/** @internal */
export declare const CreateReport$outboundSchema: z.ZodType<CreateReport$Outbound, z.ZodTypeDef, CreateReport>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateReport$ {
    /** @deprecated use `CreateReport$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateReport, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateReport$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateReport$Outbound, z.ZodTypeDef, CreateReport>;
    /** @deprecated use `CreateReport$Outbound` instead. */
    type Outbound = CreateReport$Outbound;
}
export declare function createReportToJSON(createReport: CreateReport): string;
export declare function createReportFromJSON(jsonString: string): SafeParseResult<CreateReport, SDKValidationError>;
//# sourceMappingURL=createreport.d.ts.map