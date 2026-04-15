import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorBankAccount } from "../components/contractorbankaccount.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody;
};
export type PostV1ContractorsContractorUuidBankAccountsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contractorBankAccount?: ContractorBankAccount | undefined;
};
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsAccountType$outboundSchema: z.ZodNativeEnum<typeof PostV1ContractorsContractorUuidBankAccountsAccountType>;
/** @internal */
export type PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound = {
    name: string;
    routing_number: string;
    account_number: string;
    account_type: string;
};
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsRequestBody$outboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound, z.ZodTypeDef, PostV1ContractorsContractorUuidBankAccountsRequestBody>;
export declare function postV1ContractorsContractorUuidBankAccountsRequestBodyToJSON(postV1ContractorsContractorUuidBankAccountsRequestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody): string;
/** @internal */
export type PostV1ContractorsContractorUuidBankAccountsRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsRequest$outboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsRequest$Outbound, z.ZodTypeDef, PostV1ContractorsContractorUuidBankAccountsRequest>;
export declare function postV1ContractorsContractorUuidBankAccountsRequestToJSON(postV1ContractorsContractorUuidBankAccountsRequest: PostV1ContractorsContractorUuidBankAccountsRequest): string;
/** @internal */
export declare const PostV1ContractorsContractorUuidBankAccountsResponse$inboundSchema: z.ZodType<PostV1ContractorsContractorUuidBankAccountsResponse, z.ZodTypeDef, unknown>;
export declare function postV1ContractorsContractorUuidBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<PostV1ContractorsContractorUuidBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=postv1contractorscontractoruuidbankaccounts.d.ts.map