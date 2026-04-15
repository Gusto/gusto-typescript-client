import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody = {
    /**
     * The dollar amount of the first micro-deposit
     */
    deposit1: number;
    /**
     * The dollar amount of the second micro-deposit
     */
    deposit2: number;
};
export type PutV1CompaniesCompanyIdBankAccountsVerifyRequest = {
    /**
     * The UUID of the bank account
     */
    bankAccountUuid: string;
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody;
};
export type PutV1CompaniesCompanyIdBankAccountsVerifyResponse = {
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
export declare const PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound = {
    deposit_1: number;
    deposit_2: number;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$ {
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody>;
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound;
}
export declare function putV1CompaniesCompanyIdBankAccountsVerifyRequestBodyToJSON(putV1CompaniesCompanyIdBankAccountsVerifyRequestBody: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody): string;
export declare function putV1CompaniesCompanyIdBankAccountsVerifyRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdBankAccountsVerifyRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound = {
    bank_account_uuid: string;
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdBankAccountsVerifyRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdBankAccountsVerifyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdBankAccountsVerifyRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdBankAccountsVerifyRequest>;
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound;
}
export declare function putV1CompaniesCompanyIdBankAccountsVerifyRequestToJSON(putV1CompaniesCompanyIdBankAccountsVerifyRequest: PutV1CompaniesCompanyIdBankAccountsVerifyRequest): string;
export declare function putV1CompaniesCompanyIdBankAccountsVerifyRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdBankAccountsVerifyRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdBankAccountsVerifyResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdBankAccountsVerifyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Bank-Account"?: components.CompanyBankAccount$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdBankAccountsVerifyResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdBankAccountsVerifyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdBankAccountsVerifyResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdBankAccountsVerifyResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdBankAccountsVerifyResponse>;
    /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdBankAccountsVerifyResponse$Outbound;
}
export declare function putV1CompaniesCompanyIdBankAccountsVerifyResponseToJSON(putV1CompaniesCompanyIdBankAccountsVerifyResponse: PutV1CompaniesCompanyIdBankAccountsVerifyResponse): string;
export declare function putV1CompaniesCompanyIdBankAccountsVerifyResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdBankAccountsVerifyResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidbankaccountsverify.d.ts.map