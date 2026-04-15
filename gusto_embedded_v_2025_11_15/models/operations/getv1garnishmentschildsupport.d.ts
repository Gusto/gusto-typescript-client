import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1GarnishmentsChildSupportRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1GarnishmentsChildSupportResponse = {
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
    childSupportData?: components.ChildSupportData | undefined;
};
/** @internal */
export declare const GetV1GarnishmentsChildSupportRequest$inboundSchema: z.ZodType<GetV1GarnishmentsChildSupportRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1GarnishmentsChildSupportRequest$Outbound = {
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1GarnishmentsChildSupportRequest$outboundSchema: z.ZodType<GetV1GarnishmentsChildSupportRequest$Outbound, z.ZodTypeDef, GetV1GarnishmentsChildSupportRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1GarnishmentsChildSupportRequest$ {
    /** @deprecated use `GetV1GarnishmentsChildSupportRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1GarnishmentsChildSupportRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1GarnishmentsChildSupportRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1GarnishmentsChildSupportRequest$Outbound, z.ZodTypeDef, GetV1GarnishmentsChildSupportRequest>;
    /** @deprecated use `GetV1GarnishmentsChildSupportRequest$Outbound` instead. */
    type Outbound = GetV1GarnishmentsChildSupportRequest$Outbound;
}
export declare function getV1GarnishmentsChildSupportRequestToJSON(getV1GarnishmentsChildSupportRequest: GetV1GarnishmentsChildSupportRequest): string;
export declare function getV1GarnishmentsChildSupportRequestFromJSON(jsonString: string): SafeParseResult<GetV1GarnishmentsChildSupportRequest, SDKValidationError>;
/** @internal */
export declare const GetV1GarnishmentsChildSupportResponse$inboundSchema: z.ZodType<GetV1GarnishmentsChildSupportResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1GarnishmentsChildSupportResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Child-Support-Data"?: components.ChildSupportData$Outbound | undefined;
};
/** @internal */
export declare const GetV1GarnishmentsChildSupportResponse$outboundSchema: z.ZodType<GetV1GarnishmentsChildSupportResponse$Outbound, z.ZodTypeDef, GetV1GarnishmentsChildSupportResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1GarnishmentsChildSupportResponse$ {
    /** @deprecated use `GetV1GarnishmentsChildSupportResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1GarnishmentsChildSupportResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1GarnishmentsChildSupportResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1GarnishmentsChildSupportResponse$Outbound, z.ZodTypeDef, GetV1GarnishmentsChildSupportResponse>;
    /** @deprecated use `GetV1GarnishmentsChildSupportResponse$Outbound` instead. */
    type Outbound = GetV1GarnishmentsChildSupportResponse$Outbound;
}
export declare function getV1GarnishmentsChildSupportResponseToJSON(getV1GarnishmentsChildSupportResponse: GetV1GarnishmentsChildSupportResponse): string;
export declare function getV1GarnishmentsChildSupportResponseFromJSON(jsonString: string): SafeParseResult<GetV1GarnishmentsChildSupportResponse, SDKValidationError>;
//# sourceMappingURL=getv1garnishmentschildsupport.d.ts.map