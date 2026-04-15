import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorAddress } from "../components/contractoraddress.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1ContractorsContractorUuidAddressRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    street1?: string | undefined;
    street2?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
};
export type PutV1ContractorsContractorUuidAddressRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1ContractorsContractorUuidAddressRequestBody;
};
export type PutV1ContractorsContractorUuidAddressResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contractorAddress?: ContractorAddress | undefined;
};
/** @internal */
export type PutV1ContractorsContractorUuidAddressRequestBody$Outbound = {
    version: string;
    street_1?: string | undefined;
    street_2?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidAddressRequestBody$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidAddressRequestBody>;
export declare function putV1ContractorsContractorUuidAddressRequestBodyToJSON(putV1ContractorsContractorUuidAddressRequestBody: PutV1ContractorsContractorUuidAddressRequestBody): string;
/** @internal */
export type PutV1ContractorsContractorUuidAddressRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ContractorsContractorUuidAddressRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidAddressRequest$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidAddressRequest>;
export declare function putV1ContractorsContractorUuidAddressRequestToJSON(putV1ContractorsContractorUuidAddressRequest: PutV1ContractorsContractorUuidAddressRequest): string;
/** @internal */
export declare const PutV1ContractorsContractorUuidAddressResponse$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressResponse, z.ZodTypeDef, unknown>;
export declare function putV1ContractorsContractorUuidAddressResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidAddressResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorscontractoruuidaddress.d.ts.map