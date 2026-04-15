import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorDocumentsRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorDocumentsResponse = {
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
    documents?: Array<components.Document> | undefined;
};
/** @internal */
export declare const GetV1ContractorDocumentsRequest$inboundSchema: z.ZodType<GetV1ContractorDocumentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorDocumentsRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorDocumentsRequest$outboundSchema: z.ZodType<GetV1ContractorDocumentsRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorDocumentsRequest$ {
    /** @deprecated use `GetV1ContractorDocumentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorDocumentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorDocumentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorDocumentsRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentsRequest>;
    /** @deprecated use `GetV1ContractorDocumentsRequest$Outbound` instead. */
    type Outbound = GetV1ContractorDocumentsRequest$Outbound;
}
export declare function getV1ContractorDocumentsRequestToJSON(getV1ContractorDocumentsRequest: GetV1ContractorDocumentsRequest): string;
export declare function getV1ContractorDocumentsRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorDocumentsResponse$inboundSchema: z.ZodType<GetV1ContractorDocumentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorDocumentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Documents?: Array<components.Document$Outbound> | undefined;
};
/** @internal */
export declare const GetV1ContractorDocumentsResponse$outboundSchema: z.ZodType<GetV1ContractorDocumentsResponse$Outbound, z.ZodTypeDef, GetV1ContractorDocumentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorDocumentsResponse$ {
    /** @deprecated use `GetV1ContractorDocumentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorDocumentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorDocumentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorDocumentsResponse$Outbound, z.ZodTypeDef, GetV1ContractorDocumentsResponse>;
    /** @deprecated use `GetV1ContractorDocumentsResponse$Outbound` instead. */
    type Outbound = GetV1ContractorDocumentsResponse$Outbound;
}
export declare function getV1ContractorDocumentsResponseToJSON(getV1ContractorDocumentsResponse: GetV1ContractorDocumentsResponse): string;
export declare function getV1ContractorDocumentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractordocuments.d.ts.map