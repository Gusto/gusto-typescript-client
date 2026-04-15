import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorsContractorUuidBankAccountsRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorsContractorUuidBankAccountsResponse = {
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
    contractorBankAccountList?: Array<components.ContractorBankAccount> | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidBankAccountsRequest$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidBankAccountsRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidBankAccountsRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidBankAccountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidBankAccountsRequest$ {
    /** @deprecated use `GetV1ContractorsContractorUuidBankAccountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidBankAccountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidBankAccountsRequest>;
    /** @deprecated use `GetV1ContractorsContractorUuidBankAccountsRequest$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidBankAccountsRequest$Outbound;
}
export declare function getV1ContractorsContractorUuidBankAccountsRequestToJSON(getV1ContractorsContractorUuidBankAccountsRequest: GetV1ContractorsContractorUuidBankAccountsRequest): string;
export declare function getV1ContractorsContractorUuidBankAccountsRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidBankAccountsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorsContractorUuidBankAccountsResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidBankAccountsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Bank-Account-List"?: Array<components.ContractorBankAccount$Outbound> | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidBankAccountsResponse$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidBankAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidBankAccountsResponse$ {
    /** @deprecated use `GetV1ContractorsContractorUuidBankAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidBankAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidBankAccountsResponse>;
    /** @deprecated use `GetV1ContractorsContractorUuidBankAccountsResponse$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidBankAccountsResponse$Outbound;
}
export declare function getV1ContractorsContractorUuidBankAccountsResponseToJSON(getV1ContractorsContractorUuidBankAccountsResponse: GetV1ContractorsContractorUuidBankAccountsResponse): string;
export declare function getV1ContractorsContractorUuidBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuidbankaccounts.d.ts.map