import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The bank account type
 */
export declare const AccountType: {
    readonly Checking: "Checking";
    readonly Savings: "Savings";
};
/**
 * The bank account type
 */
export type AccountType = ClosedEnum<typeof AccountType>;
export type PostV1CompaniesCompanyIdBankAccountsRequestBody = {
    /**
     * The bank routing number
     */
    routingNumber?: string | undefined;
    /**
     * The bank account number
     */
    accountNumber?: string | undefined;
    /**
     * The bank account type
     */
    accountType?: AccountType | undefined;
};
export type PostV1CompaniesCompanyIdBankAccountsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdBankAccountsRequestBody;
};
export type PostV1CompaniesCompanyIdBankAccountsResponse = {
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
    companyBankAccount?: components.CompanyBankAccount | undefined;
};
/** @internal */
export declare const AccountType$inboundSchema: z.ZodNativeEnum<typeof AccountType>;
/** @internal */
export declare const AccountType$outboundSchema: z.ZodNativeEnum<typeof AccountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountType$ {
    /** @deprecated use `AccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
    /** @deprecated use `AccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
}
/** @internal */
export declare const PostV1CompaniesCompanyIdBankAccountsRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdBankAccountsRequestBody$Outbound = {
    routing_number?: string | undefined;
    account_number?: string | undefined;
    account_type?: string | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdBankAccountsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdBankAccountsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdBankAccountsRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdBankAccountsRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdBankAccountsRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdBankAccountsRequestBodyToJSON(postV1CompaniesCompanyIdBankAccountsRequestBody: PostV1CompaniesCompanyIdBankAccountsRequestBody): string;
export declare function postV1CompaniesCompanyIdBankAccountsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdBankAccountsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdBankAccountsRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdBankAccountsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdBankAccountsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdBankAccountsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdBankAccountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdBankAccountsRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdBankAccountsRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdBankAccountsRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdBankAccountsRequestToJSON(postV1CompaniesCompanyIdBankAccountsRequest: PostV1CompaniesCompanyIdBankAccountsRequest): string;
export declare function postV1CompaniesCompanyIdBankAccountsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdBankAccountsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdBankAccountsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdBankAccountsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Bank-Account"?: components.CompanyBankAccount$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdBankAccountsResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdBankAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdBankAccountsResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdBankAccountsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdBankAccountsResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdBankAccountsResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdBankAccountsResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdBankAccountsResponseToJSON(postV1CompaniesCompanyIdBankAccountsResponse: PostV1CompaniesCompanyIdBankAccountsResponse): string;
export declare function postV1CompaniesCompanyIdBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidbankaccounts.d.ts.map