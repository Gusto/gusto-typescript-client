import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdBankAccountsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdBankAccountsResponse = {
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
    companyBankAccountList?: Array<components.CompanyBankAccount> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdBankAccountsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdBankAccountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdBankAccountsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdBankAccountsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdBankAccountsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdBankAccountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdBankAccountsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdBankAccountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdBankAccountsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdBankAccountsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdBankAccountsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdBankAccountsRequestToJSON(getV1CompaniesCompanyIdBankAccountsRequest: GetV1CompaniesCompanyIdBankAccountsRequest): string;
export declare function getV1CompaniesCompanyIdBankAccountsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdBankAccountsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdBankAccountsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdBankAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdBankAccountsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Bank-Account-List"?: Array<components.CompanyBankAccount$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdBankAccountsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdBankAccountsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdBankAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdBankAccountsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdBankAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdBankAccountsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdBankAccountsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdBankAccountsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdBankAccountsResponseToJSON(getV1CompaniesCompanyIdBankAccountsResponse: GetV1CompaniesCompanyIdBankAccountsResponse): string;
export declare function getV1CompaniesCompanyIdBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidbankaccounts.d.ts.map