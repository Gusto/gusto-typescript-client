import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorBankAccount } from "../components/contractorbankaccount.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorsContractorUuidBankAccountsRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorsContractorUuidBankAccountsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contractorBankAccountList?: Array<ContractorBankAccount> | undefined;
};
/** @internal */
export type GetV1ContractorsContractorUuidBankAccountsRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidBankAccountsRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidBankAccountsRequest>;
export declare function getV1ContractorsContractorUuidBankAccountsRequestToJSON(getV1ContractorsContractorUuidBankAccountsRequest: GetV1ContractorsContractorUuidBankAccountsRequest): string;
/** @internal */
export declare const GetV1ContractorsContractorUuidBankAccountsResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidBankAccountsResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorsContractorUuidBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuidbankaccounts.d.ts.map