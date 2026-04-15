import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1GarnishmentsGarnishmentIdRequest = {
    /**
     * The UUID of the garnishment
     */
    garnishmentId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1GarnishmentsGarnishmentIdResponse = {
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
    garnishment?: components.Garnishment | undefined;
};
/** @internal */
export declare const GetV1GarnishmentsGarnishmentIdRequest$inboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1GarnishmentsGarnishmentIdRequest$Outbound = {
    garnishment_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1GarnishmentsGarnishmentIdRequest$outboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdRequest$Outbound, z.ZodTypeDef, GetV1GarnishmentsGarnishmentIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1GarnishmentsGarnishmentIdRequest$ {
    /** @deprecated use `GetV1GarnishmentsGarnishmentIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1GarnishmentsGarnishmentIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdRequest$Outbound, z.ZodTypeDef, GetV1GarnishmentsGarnishmentIdRequest>;
    /** @deprecated use `GetV1GarnishmentsGarnishmentIdRequest$Outbound` instead. */
    type Outbound = GetV1GarnishmentsGarnishmentIdRequest$Outbound;
}
export declare function getV1GarnishmentsGarnishmentIdRequestToJSON(getV1GarnishmentsGarnishmentIdRequest: GetV1GarnishmentsGarnishmentIdRequest): string;
export declare function getV1GarnishmentsGarnishmentIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1GarnishmentsGarnishmentIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1GarnishmentsGarnishmentIdResponse$inboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1GarnishmentsGarnishmentIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Garnishment?: components.Garnishment$Outbound | undefined;
};
/** @internal */
export declare const GetV1GarnishmentsGarnishmentIdResponse$outboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdResponse$Outbound, z.ZodTypeDef, GetV1GarnishmentsGarnishmentIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1GarnishmentsGarnishmentIdResponse$ {
    /** @deprecated use `GetV1GarnishmentsGarnishmentIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1GarnishmentsGarnishmentIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdResponse$Outbound, z.ZodTypeDef, GetV1GarnishmentsGarnishmentIdResponse>;
    /** @deprecated use `GetV1GarnishmentsGarnishmentIdResponse$Outbound` instead. */
    type Outbound = GetV1GarnishmentsGarnishmentIdResponse$Outbound;
}
export declare function getV1GarnishmentsGarnishmentIdResponseToJSON(getV1GarnishmentsGarnishmentIdResponse: GetV1GarnishmentsGarnishmentIdResponse): string;
export declare function getV1GarnishmentsGarnishmentIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1GarnishmentsGarnishmentIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1garnishmentsgarnishmentid.d.ts.map