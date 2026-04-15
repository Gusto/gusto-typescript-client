import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const PostV1ContractorsContractorUuidBankAccountsAccountType: {
    readonly Checking: "Checking";
    readonly Savings: "Savings";
};
export type PostV1ContractorsContractorUuidBankAccountsAccountType = ClosedEnum<typeof PostV1ContractorsContractorUuidBankAccountsAccountType>;
export type PostV1ContractorsContractorUuidBankAccountsRequestBody = {
    name: string;
    routingNumber: string;
    accountNumber: string;
    accountType: PostV1ContractorsContractorUuidBankAccountsAccountType;
};
export type PostV1ContractorsContractorUuidBankAccountsRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody;
};
export type PostV1ContractorsContractorUuidBankAccountsResponse = {
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
    contractorBankAccount?: components.ContractorBankAccount | undefined;
};
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsAccountType$inboundSchema: z.ZodNativeEnum<typeof PostV1ContractorsContractorUuidBankAccountsAccountType>;
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsAccountType$outboundSchema: z.ZodNativeEnum<typeof PostV1ContractorsContractorUuidBankAccountsAccountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1ContractorsContractorUuidBankAccountsAccountType$ {
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsAccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsAccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
}
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsRequestBody$inboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound = {
    name: string;
    routing_number: string;
    account_number: string;
    account_type: string;
};
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsRequestBody$outboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound, z.ZodTypeDef, PostV1ContractorsContractorUuidBankAccountsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1ContractorsContractorUuidBankAccountsRequestBody$ {
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound, z.ZodTypeDef, PostV1ContractorsContractorUuidBankAccountsRequestBody>;
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound` instead. */
    type Outbound = PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound;
}
export declare function postV1ContractorsContractorUuidBankAccountsRequestBodyToJSON(postV1ContractorsContractorUuidBankAccountsRequestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody): string;
export declare function postV1ContractorsContractorUuidBankAccountsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1ContractorsContractorUuidBankAccountsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsRequest$inboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1ContractorsContractorUuidBankAccountsRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsRequest$outboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequest$Outbound, z.ZodTypeDef, PostV1ContractorsContractorUuidBankAccountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1ContractorsContractorUuidBankAccountsRequest$ {
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequest$Outbound, z.ZodTypeDef, PostV1ContractorsContractorUuidBankAccountsRequest>;
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequest$Outbound` instead. */
    type Outbound = PostV1ContractorsContractorUuidBankAccountsRequest$Outbound;
}
export declare function postV1ContractorsContractorUuidBankAccountsRequestToJSON(postV1ContractorsContractorUuidBankAccountsRequest: PostV1ContractorsContractorUuidBankAccountsRequest): string;
export declare function postV1ContractorsContractorUuidBankAccountsRequestFromJSON(jsonString: string): SafeParseResult<PostV1ContractorsContractorUuidBankAccountsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsResponse$inboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1ContractorsContractorUuidBankAccountsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Bank-Account"?: components.ContractorBankAccount$Outbound | undefined;
};
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsResponse$outboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsResponse$Outbound, z.ZodTypeDef, PostV1ContractorsContractorUuidBankAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1ContractorsContractorUuidBankAccountsResponse$ {
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsResponse$Outbound, z.ZodTypeDef, PostV1ContractorsContractorUuidBankAccountsResponse>;
    /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsResponse$Outbound` instead. */
    type Outbound = PostV1ContractorsContractorUuidBankAccountsResponse$Outbound;
}
export declare function postV1ContractorsContractorUuidBankAccountsResponseToJSON(postV1ContractorsContractorUuidBankAccountsResponse: PostV1ContractorsContractorUuidBankAccountsResponse): string;
export declare function postV1ContractorsContractorUuidBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<PostV1ContractorsContractorUuidBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=postv1contractorscontractoruuidbankaccounts.d.ts.map