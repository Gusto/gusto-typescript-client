import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    payScheduleAssignmentBody: components.PayScheduleAssignmentBody;
};
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Example response
     */
    payScheduleAssignmentPreview?: components.PayScheduleAssignmentPreview | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    "Pay-Schedule-Assignment-Body": components.PayScheduleAssignmentBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequestToJSON(postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest: PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest): string;
export declare function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Pay-Schedule-Assignment-Preview"?: components.PayScheduleAssignmentPreview$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponseToJSON(postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse: PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse): string;
export declare function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidpayschedulesassignmentpreview.d.ts.map