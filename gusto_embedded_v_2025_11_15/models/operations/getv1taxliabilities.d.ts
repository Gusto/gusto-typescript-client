import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1TaxLiabilitiesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1TaxLiabilitiesResponse = {
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
    taxLiabilitiesList?: Array<Array<components.TaxLiabilitiesSelections>> | undefined;
};
/** @internal */
export declare const GetV1TaxLiabilitiesRequest$inboundSchema: z.ZodType<GetV1TaxLiabilitiesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1TaxLiabilitiesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1TaxLiabilitiesRequest$outboundSchema: z.ZodType<GetV1TaxLiabilitiesRequest$Outbound, z.ZodTypeDef, GetV1TaxLiabilitiesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1TaxLiabilitiesRequest$ {
    /** @deprecated use `GetV1TaxLiabilitiesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1TaxLiabilitiesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1TaxLiabilitiesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1TaxLiabilitiesRequest$Outbound, z.ZodTypeDef, GetV1TaxLiabilitiesRequest>;
    /** @deprecated use `GetV1TaxLiabilitiesRequest$Outbound` instead. */
    type Outbound = GetV1TaxLiabilitiesRequest$Outbound;
}
export declare function getV1TaxLiabilitiesRequestToJSON(getV1TaxLiabilitiesRequest: GetV1TaxLiabilitiesRequest): string;
export declare function getV1TaxLiabilitiesRequestFromJSON(jsonString: string): SafeParseResult<GetV1TaxLiabilitiesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1TaxLiabilitiesResponse$inboundSchema: z.ZodType<GetV1TaxLiabilitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1TaxLiabilitiesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Tax-Liabilities-List"?: Array<Array<components.TaxLiabilitiesSelections$Outbound>> | undefined;
};
/** @internal */
export declare const GetV1TaxLiabilitiesResponse$outboundSchema: z.ZodType<GetV1TaxLiabilitiesResponse$Outbound, z.ZodTypeDef, GetV1TaxLiabilitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1TaxLiabilitiesResponse$ {
    /** @deprecated use `GetV1TaxLiabilitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1TaxLiabilitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1TaxLiabilitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1TaxLiabilitiesResponse$Outbound, z.ZodTypeDef, GetV1TaxLiabilitiesResponse>;
    /** @deprecated use `GetV1TaxLiabilitiesResponse$Outbound` instead. */
    type Outbound = GetV1TaxLiabilitiesResponse$Outbound;
}
export declare function getV1TaxLiabilitiesResponseToJSON(getV1TaxLiabilitiesResponse: GetV1TaxLiabilitiesResponse): string;
export declare function getV1TaxLiabilitiesResponseFromJSON(jsonString: string): SafeParseResult<GetV1TaxLiabilitiesResponse, SDKValidationError>;
//# sourceMappingURL=getv1taxliabilities.d.ts.map