import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdCustomFieldsRequest = {
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
export type GetV1CompaniesCompanyIdCustomFieldsResponse = {
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
    companyCustomFieldList?: components.CompanyCustomFieldList | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdCustomFieldsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound = {
    company_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdCustomFieldsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCustomFieldsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdCustomFieldsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCustomFieldsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdCustomFieldsRequestToJSON(getV1CompaniesCompanyIdCustomFieldsRequest: GetV1CompaniesCompanyIdCustomFieldsRequest): string;
export declare function getV1CompaniesCompanyIdCustomFieldsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdCustomFieldsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdCustomFieldsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdCustomFieldsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Custom-Field-List"?: components.CompanyCustomFieldList$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdCustomFieldsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCustomFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdCustomFieldsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCustomFieldsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdCustomFieldsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdCustomFieldsResponseToJSON(getV1CompaniesCompanyIdCustomFieldsResponse: GetV1CompaniesCompanyIdCustomFieldsResponse): string;
export declare function getV1CompaniesCompanyIdCustomFieldsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdCustomFieldsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidcustomfields.d.ts.map