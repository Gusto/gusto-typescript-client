import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse = {
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
    payScheduleAssignment?: components.PayScheduleAssignment | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesAssignmentsRequestToJSON(getV1CompaniesCompanyIdPaySchedulesAssignmentsRequest: GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest): string;
export declare function getV1CompaniesCompanyIdPaySchedulesAssignmentsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Pay-Schedule-Assignment"?: components.PayScheduleAssignment$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesAssignmentsResponseToJSON(getV1CompaniesCompanyIdPaySchedulesAssignmentsResponse: GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse): string;
export declare function getV1CompaniesCompanyIdPaySchedulesAssignmentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayschedulesassignments.d.ts.map