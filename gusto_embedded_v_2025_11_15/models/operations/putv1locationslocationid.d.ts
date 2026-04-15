import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Update a location
 */
export type PutV1LocationsLocationIdRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    phoneNumber?: string | undefined;
    street1?: string | undefined;
    street2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
    /**
     * For a company location, specify if this location is the company's mailing address. A company has a single mailing address, so this designation will override any previous selection.
     */
    mailingAddress?: boolean | undefined;
    /**
     * For a company location, specify if this location is the company's filing address. A company has a single filing address, so this designation will override any previous selection.
     */
    filingAddress?: boolean | undefined;
};
export type PutV1LocationsLocationIdRequest = {
    /**
     * The UUID of the location
     */
    locationId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Update a location
     */
    requestBody: PutV1LocationsLocationIdRequestBody;
};
export type PutV1LocationsLocationIdResponse = {
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
    location?: components.Location | undefined;
};
/** @internal */
export declare const PutV1LocationsLocationIdRequestBody$inboundSchema: z.ZodType<PutV1LocationsLocationIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1LocationsLocationIdRequestBody$Outbound = {
    version: string;
    phone_number?: string | undefined;
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
    mailing_address?: boolean | undefined;
    filing_address?: boolean | undefined;
};
/** @internal */
export declare const PutV1LocationsLocationIdRequestBody$outboundSchema: z.ZodType<PutV1LocationsLocationIdRequestBody$Outbound, z.ZodTypeDef, PutV1LocationsLocationIdRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1LocationsLocationIdRequestBody$ {
    /** @deprecated use `PutV1LocationsLocationIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1LocationsLocationIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1LocationsLocationIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1LocationsLocationIdRequestBody$Outbound, z.ZodTypeDef, PutV1LocationsLocationIdRequestBody>;
    /** @deprecated use `PutV1LocationsLocationIdRequestBody$Outbound` instead. */
    type Outbound = PutV1LocationsLocationIdRequestBody$Outbound;
}
export declare function putV1LocationsLocationIdRequestBodyToJSON(putV1LocationsLocationIdRequestBody: PutV1LocationsLocationIdRequestBody): string;
export declare function putV1LocationsLocationIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1LocationsLocationIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1LocationsLocationIdRequest$inboundSchema: z.ZodType<PutV1LocationsLocationIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1LocationsLocationIdRequest$Outbound = {
    location_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1LocationsLocationIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1LocationsLocationIdRequest$outboundSchema: z.ZodType<PutV1LocationsLocationIdRequest$Outbound, z.ZodTypeDef, PutV1LocationsLocationIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1LocationsLocationIdRequest$ {
    /** @deprecated use `PutV1LocationsLocationIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1LocationsLocationIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1LocationsLocationIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1LocationsLocationIdRequest$Outbound, z.ZodTypeDef, PutV1LocationsLocationIdRequest>;
    /** @deprecated use `PutV1LocationsLocationIdRequest$Outbound` instead. */
    type Outbound = PutV1LocationsLocationIdRequest$Outbound;
}
export declare function putV1LocationsLocationIdRequestToJSON(putV1LocationsLocationIdRequest: PutV1LocationsLocationIdRequest): string;
export declare function putV1LocationsLocationIdRequestFromJSON(jsonString: string): SafeParseResult<PutV1LocationsLocationIdRequest, SDKValidationError>;
/** @internal */
export declare const PutV1LocationsLocationIdResponse$inboundSchema: z.ZodType<PutV1LocationsLocationIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1LocationsLocationIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Location?: components.Location$Outbound | undefined;
};
/** @internal */
export declare const PutV1LocationsLocationIdResponse$outboundSchema: z.ZodType<PutV1LocationsLocationIdResponse$Outbound, z.ZodTypeDef, PutV1LocationsLocationIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1LocationsLocationIdResponse$ {
    /** @deprecated use `PutV1LocationsLocationIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1LocationsLocationIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1LocationsLocationIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1LocationsLocationIdResponse$Outbound, z.ZodTypeDef, PutV1LocationsLocationIdResponse>;
    /** @deprecated use `PutV1LocationsLocationIdResponse$Outbound` instead. */
    type Outbound = PutV1LocationsLocationIdResponse$Outbound;
}
export declare function putV1LocationsLocationIdResponseToJSON(putV1LocationsLocationIdResponse: PutV1LocationsLocationIdResponse): string;
export declare function putV1LocationsLocationIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1LocationsLocationIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1locationslocationid.d.ts.map