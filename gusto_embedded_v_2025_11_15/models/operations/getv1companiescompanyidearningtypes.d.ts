import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdEarningTypesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdEarningTypesResponse = {
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
    earningTypeList?: components.EarningTypeList | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdEarningTypesRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdEarningTypesRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdEarningTypesRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEarningTypesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdEarningTypesRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEarningTypesRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdEarningTypesRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdEarningTypesRequestToJSON(getV1CompaniesCompanyIdEarningTypesRequest: GetV1CompaniesCompanyIdEarningTypesRequest): string;
export declare function getV1CompaniesCompanyIdEarningTypesRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdEarningTypesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdEarningTypesResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdEarningTypesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Earning-Type-List"?: components.EarningTypeList$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdEarningTypesResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEarningTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdEarningTypesResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEarningTypesResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdEarningTypesResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdEarningTypesResponseToJSON(getV1CompaniesCompanyIdEarningTypesResponse: GetV1CompaniesCompanyIdEarningTypesResponse): string;
export declare function getV1CompaniesCompanyIdEarningTypesResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdEarningTypesResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidearningtypes.d.ts.map