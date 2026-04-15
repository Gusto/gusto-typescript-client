import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyUuidSignatoriesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyUuidSignatoriesResponse = {
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
    signatoryList?: Array<components.Signatory> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidSignatoriesRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidSignatoriesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidSignatoriesRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidSignatoriesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyUuidSignatoriesRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidSignatoriesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidSignatoriesRequest>;
    /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound;
}
export declare function getV1CompaniesCompanyUuidSignatoriesRequestToJSON(getV1CompaniesCompanyUuidSignatoriesRequest: GetV1CompaniesCompanyUuidSignatoriesRequest): string;
export declare function getV1CompaniesCompanyUuidSignatoriesRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidSignatoriesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyUuidSignatoriesResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidSignatoriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Signatory-List"?: Array<components.Signatory$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidSignatoriesResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidSignatoriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyUuidSignatoriesResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidSignatoriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidSignatoriesResponse>;
    /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound;
}
export declare function getV1CompaniesCompanyUuidSignatoriesResponseToJSON(getV1CompaniesCompanyUuidSignatoriesResponse: GetV1CompaniesCompanyUuidSignatoriesResponse): string;
export declare function getV1CompaniesCompanyUuidSignatoriesResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidSignatoriesResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyuuidsignatories.d.ts.map