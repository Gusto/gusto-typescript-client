import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1CompensationsCompensationIdRequest = {
    /**
     * The UUID of the compensation
     */
    compensationId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1CompensationsCompensationIdResponse = {
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
};
/** @internal */
export declare const DeleteV1CompensationsCompensationIdRequest$inboundSchema: z.ZodType<DeleteV1CompensationsCompensationIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompensationsCompensationIdRequest$Outbound = {
    compensation_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompensationsCompensationIdRequest$outboundSchema: z.ZodType<DeleteV1CompensationsCompensationIdRequest$Outbound, z.ZodTypeDef, DeleteV1CompensationsCompensationIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompensationsCompensationIdRequest$ {
    /** @deprecated use `DeleteV1CompensationsCompensationIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompensationsCompensationIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompensationsCompensationIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompensationsCompensationIdRequest$Outbound, z.ZodTypeDef, DeleteV1CompensationsCompensationIdRequest>;
    /** @deprecated use `DeleteV1CompensationsCompensationIdRequest$Outbound` instead. */
    type Outbound = DeleteV1CompensationsCompensationIdRequest$Outbound;
}
export declare function deleteV1CompensationsCompensationIdRequestToJSON(deleteV1CompensationsCompensationIdRequest: DeleteV1CompensationsCompensationIdRequest): string;
export declare function deleteV1CompensationsCompensationIdRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1CompensationsCompensationIdRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1CompensationsCompensationIdResponse$inboundSchema: z.ZodType<DeleteV1CompensationsCompensationIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompensationsCompensationIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1CompensationsCompensationIdResponse$outboundSchema: z.ZodType<DeleteV1CompensationsCompensationIdResponse$Outbound, z.ZodTypeDef, DeleteV1CompensationsCompensationIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompensationsCompensationIdResponse$ {
    /** @deprecated use `DeleteV1CompensationsCompensationIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompensationsCompensationIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompensationsCompensationIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompensationsCompensationIdResponse$Outbound, z.ZodTypeDef, DeleteV1CompensationsCompensationIdResponse>;
    /** @deprecated use `DeleteV1CompensationsCompensationIdResponse$Outbound` instead. */
    type Outbound = DeleteV1CompensationsCompensationIdResponse$Outbound;
}
export declare function deleteV1CompensationsCompensationIdResponseToJSON(deleteV1CompensationsCompensationIdResponse: DeleteV1CompensationsCompensationIdResponse): string;
export declare function deleteV1CompensationsCompensationIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompensationsCompensationIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1compensationscompensationid.d.ts.map