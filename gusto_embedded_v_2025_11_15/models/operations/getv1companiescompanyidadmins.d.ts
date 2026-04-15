import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdAdminsRequest = {
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
export type GetV1CompaniesCompanyIdAdminsResponse = {
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
    adminList?: Array<components.Admin> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdAdminsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdAdminsRequest$Outbound = {
    company_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdAdminsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdAdminsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdAdminsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdAdminsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdAdminsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdAdminsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdAdminsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdAdminsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdAdminsRequestToJSON(getV1CompaniesCompanyIdAdminsRequest: GetV1CompaniesCompanyIdAdminsRequest): string;
export declare function getV1CompaniesCompanyIdAdminsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdAdminsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdAdminsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdAdminsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Admin-List"?: Array<components.Admin$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdAdminsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdAdminsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdAdminsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdAdminsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdAdminsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdAdminsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdAdminsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdAdminsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdAdminsResponseToJSON(getV1CompaniesCompanyIdAdminsResponse: GetV1CompaniesCompanyIdAdminsResponse): string;
export declare function getV1CompaniesCompanyIdAdminsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdAdminsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidadmins.d.ts.map