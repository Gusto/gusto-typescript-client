import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdPaySchedulesAssignRequest = {
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
export type PostV1CompaniesCompanyIdPaySchedulesAssignResponse = {
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
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesAssignRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    "Pay-Schedule-Assignment-Body": components.PayScheduleAssignmentBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPaySchedulesAssignRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPaySchedulesAssignRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdPaySchedulesAssignRequestToJSON(postV1CompaniesCompanyIdPaySchedulesAssignRequest: PostV1CompaniesCompanyIdPaySchedulesAssignRequest): string;
export declare function postV1CompaniesCompanyIdPaySchedulesAssignRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesAssignRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesAssignResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPaySchedulesAssignResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPaySchedulesAssignResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdPaySchedulesAssignResponseToJSON(postV1CompaniesCompanyIdPaySchedulesAssignResponse: PostV1CompaniesCompanyIdPaySchedulesAssignResponse): string;
export declare function postV1CompaniesCompanyIdPaySchedulesAssignResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesAssignResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidpayschedulesassign.d.ts.map