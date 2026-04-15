import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorsContractorUuidRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorsContractorUuidResponse = {
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
    contractor?: components.Contractor | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidRequest$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidRequest$ {
    /** @deprecated use `GetV1ContractorsContractorUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidRequest>;
    /** @deprecated use `GetV1ContractorsContractorUuidRequest$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidRequest$Outbound;
}
export declare function getV1ContractorsContractorUuidRequestToJSON(getV1ContractorsContractorUuidRequest: GetV1ContractorsContractorUuidRequest): string;
export declare function getV1ContractorsContractorUuidRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorsContractorUuidResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Contractor?: components.Contractor$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidResponse$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidResponse$ {
    /** @deprecated use `GetV1ContractorsContractorUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidResponse>;
    /** @deprecated use `GetV1ContractorsContractorUuidResponse$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidResponse$Outbound;
}
export declare function getV1ContractorsContractorUuidResponseToJSON(getV1ContractorsContractorUuidResponse: GetV1ContractorsContractorUuidResponse): string;
export declare function getV1ContractorsContractorUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuid.d.ts.map