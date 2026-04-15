import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1TaxLiabilitiesFinishRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type PutV1TaxLiabilitiesFinishResponse = {
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
export declare const PutV1TaxLiabilitiesFinishRequest$inboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TaxLiabilitiesFinishRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutV1TaxLiabilitiesFinishRequest$outboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishRequest$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesFinishRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TaxLiabilitiesFinishRequest$ {
    /** @deprecated use `PutV1TaxLiabilitiesFinishRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TaxLiabilitiesFinishRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishRequest$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesFinishRequest>;
    /** @deprecated use `PutV1TaxLiabilitiesFinishRequest$Outbound` instead. */
    type Outbound = PutV1TaxLiabilitiesFinishRequest$Outbound;
}
export declare function putV1TaxLiabilitiesFinishRequestToJSON(putV1TaxLiabilitiesFinishRequest: PutV1TaxLiabilitiesFinishRequest): string;
export declare function putV1TaxLiabilitiesFinishRequestFromJSON(jsonString: string): SafeParseResult<PutV1TaxLiabilitiesFinishRequest, SDKValidationError>;
/** @internal */
export declare const PutV1TaxLiabilitiesFinishResponse$inboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TaxLiabilitiesFinishResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const PutV1TaxLiabilitiesFinishResponse$outboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishResponse$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesFinishResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TaxLiabilitiesFinishResponse$ {
    /** @deprecated use `PutV1TaxLiabilitiesFinishResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TaxLiabilitiesFinishResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishResponse$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesFinishResponse>;
    /** @deprecated use `PutV1TaxLiabilitiesFinishResponse$Outbound` instead. */
    type Outbound = PutV1TaxLiabilitiesFinishResponse$Outbound;
}
export declare function putV1TaxLiabilitiesFinishResponseToJSON(putV1TaxLiabilitiesFinishResponse: PutV1TaxLiabilitiesFinishResponse): string;
export declare function putV1TaxLiabilitiesFinishResponseFromJSON(jsonString: string): SafeParseResult<PutV1TaxLiabilitiesFinishResponse, SDKValidationError>;
//# sourceMappingURL=putv1taxliabilitiesfinish.d.ts.map