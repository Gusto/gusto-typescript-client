import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1ContractorsContractorUuidAddressRequestBody;
};
export type PutV1ContractorsContractorUuidAddressResponse = {
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
export declare const PutV1ContractorsContractorUuidAddressRequestBody$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequestBody, z.ZodTypeDef, unknown>;
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
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidAddressRequestBody$ {
    /** @deprecated use `PutV1ContractorsContractorUuidAddressRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidAddressRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidAddressRequestBody>;
    /** @deprecated use `PutV1ContractorsContractorUuidAddressRequestBody$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidAddressRequestBody$Outbound;
}
export declare function putV1ContractorsContractorUuidAddressRequestBodyToJSON(putV1ContractorsContractorUuidAddressRequestBody: PutV1ContractorsContractorUuidAddressRequestBody): string;
export declare function putV1ContractorsContractorUuidAddressRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidAddressRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorsContractorUuidAddressRequest$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorUuidAddressRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ContractorsContractorUuidAddressRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidAddressRequest$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidAddressRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidAddressRequest$ {
    /** @deprecated use `PutV1ContractorsContractorUuidAddressRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidAddressRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidAddressRequest>;
    /** @deprecated use `PutV1ContractorsContractorUuidAddressRequest$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidAddressRequest$Outbound;
}
export declare function putV1ContractorsContractorUuidAddressRequestToJSON(putV1ContractorsContractorUuidAddressRequest: PutV1ContractorsContractorUuidAddressRequest): string;
export declare function putV1ContractorsContractorUuidAddressRequestFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidAddressRequest, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorsContractorUuidAddressResponse$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorUuidAddressResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Address"?: components.ContractorAddress$Outbound | undefined;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidAddressResponse$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressResponse$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidAddressResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidAddressResponse$ {
    /** @deprecated use `PutV1ContractorsContractorUuidAddressResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidAddressResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidAddressResponse$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidAddressResponse>;
    /** @deprecated use `PutV1ContractorsContractorUuidAddressResponse$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidAddressResponse$Outbound;
}
export declare function putV1ContractorsContractorUuidAddressResponseToJSON(putV1ContractorsContractorUuidAddressResponse: PutV1ContractorsContractorUuidAddressResponse): string;
export declare function putV1ContractorsContractorUuidAddressResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidAddressResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorscontractoruuidaddress.d.ts.map