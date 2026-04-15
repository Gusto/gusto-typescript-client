import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdPaySchedulesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdPaySchedulesResponse = {
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
    payScheduleList?: Array<components.PaySchedule> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesRequest$Outbound = {
    company_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesRequestToJSON(getV1CompaniesCompanyIdPaySchedulesRequest: GetV1CompaniesCompanyIdPaySchedulesRequest): string;
export declare function getV1CompaniesCompanyIdPaySchedulesRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Pay-Schedule-List"?: Array<components.PaySchedule$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesResponseToJSON(getV1CompaniesCompanyIdPaySchedulesResponse: GetV1CompaniesCompanyIdPaySchedulesResponse): string;
export declare function getV1CompaniesCompanyIdPaySchedulesResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayschedules.d.ts.map