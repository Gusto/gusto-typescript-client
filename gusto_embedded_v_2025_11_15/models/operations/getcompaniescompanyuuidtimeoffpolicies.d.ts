import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCompaniesCompanyUuidTimeOffPoliciesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetCompaniesCompanyUuidTimeOffPoliciesResponse = {
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
    timeOffPolicyList?: Array<components.TimeOffPolicy> | undefined;
};
/** @internal */
export declare const GetCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema: z.ZodType<GetCompaniesCompanyUuidTimeOffPoliciesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetCompaniesCompanyUuidTimeOffPoliciesRequest$outboundSchema: z.ZodType<GetCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidTimeOffPoliciesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesCompanyUuidTimeOffPoliciesRequest$ {
    /** @deprecated use `GetCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesCompanyUuidTimeOffPoliciesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesCompanyUuidTimeOffPoliciesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidTimeOffPoliciesRequest>;
    /** @deprecated use `GetCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound` instead. */
    type Outbound = GetCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound;
}
export declare function getCompaniesCompanyUuidTimeOffPoliciesRequestToJSON(getCompaniesCompanyUuidTimeOffPoliciesRequest: GetCompaniesCompanyUuidTimeOffPoliciesRequest): string;
export declare function getCompaniesCompanyUuidTimeOffPoliciesRequestFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidTimeOffPoliciesRequest, SDKValidationError>;
/** @internal */
export declare const GetCompaniesCompanyUuidTimeOffPoliciesResponse$inboundSchema: z.ZodType<GetCompaniesCompanyUuidTimeOffPoliciesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Policy-List"?: Array<components.TimeOffPolicy$Outbound> | undefined;
};
/** @internal */
export declare const GetCompaniesCompanyUuidTimeOffPoliciesResponse$outboundSchema: z.ZodType<GetCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidTimeOffPoliciesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesCompanyUuidTimeOffPoliciesResponse$ {
    /** @deprecated use `GetCompaniesCompanyUuidTimeOffPoliciesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesCompanyUuidTimeOffPoliciesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesCompanyUuidTimeOffPoliciesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidTimeOffPoliciesResponse>;
    /** @deprecated use `GetCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound` instead. */
    type Outbound = GetCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound;
}
export declare function getCompaniesCompanyUuidTimeOffPoliciesResponseToJSON(getCompaniesCompanyUuidTimeOffPoliciesResponse: GetCompaniesCompanyUuidTimeOffPoliciesResponse): string;
export declare function getCompaniesCompanyUuidTimeOffPoliciesResponseFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidTimeOffPoliciesResponse, SDKValidationError>;
//# sourceMappingURL=getcompaniescompanyuuidtimeoffpolicies.d.ts.map