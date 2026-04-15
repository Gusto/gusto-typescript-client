import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorsContractorUuidAddressRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorsContractorUuidAddressResponse = {
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
    contractorAddress?: components.ContractorAddress | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidAddressRequest$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidAddressRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidAddressRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidAddressRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidAddressRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidAddressRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidAddressRequest$ {
    /** @deprecated use `GetV1ContractorsContractorUuidAddressRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidAddressRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidAddressRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidAddressRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidAddressRequest>;
    /** @deprecated use `GetV1ContractorsContractorUuidAddressRequest$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidAddressRequest$Outbound;
}
export declare function getV1ContractorsContractorUuidAddressRequestToJSON(getV1ContractorsContractorUuidAddressRequest: GetV1ContractorsContractorUuidAddressRequest): string;
export declare function getV1ContractorsContractorUuidAddressRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidAddressRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorsContractorUuidAddressResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidAddressResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidAddressResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Address"?: components.ContractorAddress$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidAddressResponse$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidAddressResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidAddressResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidAddressResponse$ {
    /** @deprecated use `GetV1ContractorsContractorUuidAddressResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidAddressResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidAddressResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidAddressResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidAddressResponse>;
    /** @deprecated use `GetV1ContractorsContractorUuidAddressResponse$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidAddressResponse$Outbound;
}
export declare function getV1ContractorsContractorUuidAddressResponseToJSON(getV1ContractorsContractorUuidAddressResponse: GetV1ContractorsContractorUuidAddressResponse): string;
export declare function getV1ContractorsContractorUuidAddressResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidAddressResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuidaddress.d.ts.map