import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyUuidContractorsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * A string to search for in the object's names
     */
    searchTerm?: string | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyUuidContractorsResponse = {
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
    contractorList?: Array<components.Contractor> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidContractorsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidContractorsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyUuidContractorsRequest$Outbound = {
    company_uuid: string;
    page?: number | undefined;
    per?: number | undefined;
    search_term?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidContractorsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidContractorsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidContractorsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyUuidContractorsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyUuidContractorsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidContractorsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyUuidContractorsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidContractorsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidContractorsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyUuidContractorsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyUuidContractorsRequest$Outbound;
}
export declare function getV1CompaniesCompanyUuidContractorsRequestToJSON(getV1CompaniesCompanyUuidContractorsRequest: GetV1CompaniesCompanyUuidContractorsRequest): string;
export declare function getV1CompaniesCompanyUuidContractorsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidContractorsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyUuidContractorsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidContractorsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyUuidContractorsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-List"?: Array<components.Contractor$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidContractorsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidContractorsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidContractorsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyUuidContractorsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyUuidContractorsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidContractorsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyUuidContractorsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidContractorsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidContractorsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyUuidContractorsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyUuidContractorsResponse$Outbound;
}
export declare function getV1CompaniesCompanyUuidContractorsResponseToJSON(getV1CompaniesCompanyUuidContractorsResponse: GetV1CompaniesCompanyUuidContractorsResponse): string;
export declare function getV1CompaniesCompanyUuidContractorsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidContractorsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyuuidcontractors.d.ts.map