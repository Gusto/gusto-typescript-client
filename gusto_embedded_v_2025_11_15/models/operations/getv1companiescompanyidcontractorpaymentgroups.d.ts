import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdContractorPaymentGroupsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The time period for which to retrieve contractor payment groups. Defaults to 6 months ago.
     */
    startDate?: string | undefined;
    /**
     * The time period for which to retrieve contractor payment groups. Defaults to today's date.
     */
    endDate?: string | undefined;
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
export type GetV1CompaniesCompanyIdContractorPaymentGroupsResponse = {
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
     * List of Contractor Payment Groups
     */
    contractorPaymentGroupList?: Array<components.ContractorPaymentGroupMinimal> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound = {
    company_id: string;
    start_date?: string | undefined;
    end_date?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentGroupsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentGroupsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdContractorPaymentGroupsRequestToJSON(getV1CompaniesCompanyIdContractorPaymentGroupsRequest: GetV1CompaniesCompanyIdContractorPaymentGroupsRequest): string;
export declare function getV1CompaniesCompanyIdContractorPaymentGroupsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentGroupsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment-Group-List"?: Array<components.ContractorPaymentGroupMinimal$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentGroupsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentGroupsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentGroupsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdContractorPaymentGroupsResponseToJSON(getV1CompaniesCompanyIdContractorPaymentGroupsResponse: GetV1CompaniesCompanyIdContractorPaymentGroupsResponse): string;
export declare function getV1CompaniesCompanyIdContractorPaymentGroupsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdContractorPaymentGroupsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidcontractorpaymentgroups.d.ts.map