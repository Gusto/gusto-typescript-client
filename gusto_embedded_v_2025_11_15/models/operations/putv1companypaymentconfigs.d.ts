import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompanyPaymentConfigsRequestBody = components.FastPaymentLimitRequiredBody | components.PaymentSpeedRequiredBody;
export type PutV1CompanyPaymentConfigsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: components.FastPaymentLimitRequiredBody | components.PaymentSpeedRequiredBody;
};
export type PutV1CompanyPaymentConfigsResponse = {
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
    paymentConfigs?: components.PaymentConfigs | undefined;
};
/** @internal */
export declare const PutV1CompanyPaymentConfigsRequestBody$inboundSchema: z.ZodType<PutV1CompanyPaymentConfigsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyPaymentConfigsRequestBody$Outbound = components.FastPaymentLimitRequiredBody$Outbound | components.PaymentSpeedRequiredBody$Outbound;
/** @internal */
export declare const PutV1CompanyPaymentConfigsRequestBody$outboundSchema: z.ZodType<PutV1CompanyPaymentConfigsRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyPaymentConfigsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyPaymentConfigsRequestBody$ {
    /** @deprecated use `PutV1CompanyPaymentConfigsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyPaymentConfigsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyPaymentConfigsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyPaymentConfigsRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyPaymentConfigsRequestBody>;
    /** @deprecated use `PutV1CompanyPaymentConfigsRequestBody$Outbound` instead. */
    type Outbound = PutV1CompanyPaymentConfigsRequestBody$Outbound;
}
export declare function putV1CompanyPaymentConfigsRequestBodyToJSON(putV1CompanyPaymentConfigsRequestBody: PutV1CompanyPaymentConfigsRequestBody): string;
export declare function putV1CompanyPaymentConfigsRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompanyPaymentConfigsRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyPaymentConfigsRequest$inboundSchema: z.ZodType<PutV1CompanyPaymentConfigsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyPaymentConfigsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: components.FastPaymentLimitRequiredBody$Outbound | components.PaymentSpeedRequiredBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyPaymentConfigsRequest$outboundSchema: z.ZodType<PutV1CompanyPaymentConfigsRequest$Outbound, z.ZodTypeDef, PutV1CompanyPaymentConfigsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyPaymentConfigsRequest$ {
    /** @deprecated use `PutV1CompanyPaymentConfigsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyPaymentConfigsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyPaymentConfigsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyPaymentConfigsRequest$Outbound, z.ZodTypeDef, PutV1CompanyPaymentConfigsRequest>;
    /** @deprecated use `PutV1CompanyPaymentConfigsRequest$Outbound` instead. */
    type Outbound = PutV1CompanyPaymentConfigsRequest$Outbound;
}
export declare function putV1CompanyPaymentConfigsRequestToJSON(putV1CompanyPaymentConfigsRequest: PutV1CompanyPaymentConfigsRequest): string;
export declare function putV1CompanyPaymentConfigsRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompanyPaymentConfigsRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyPaymentConfigsResponse$inboundSchema: z.ZodType<PutV1CompanyPaymentConfigsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyPaymentConfigsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payment-Configs"?: components.PaymentConfigs$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompanyPaymentConfigsResponse$outboundSchema: z.ZodType<PutV1CompanyPaymentConfigsResponse$Outbound, z.ZodTypeDef, PutV1CompanyPaymentConfigsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyPaymentConfigsResponse$ {
    /** @deprecated use `PutV1CompanyPaymentConfigsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyPaymentConfigsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyPaymentConfigsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyPaymentConfigsResponse$Outbound, z.ZodTypeDef, PutV1CompanyPaymentConfigsResponse>;
    /** @deprecated use `PutV1CompanyPaymentConfigsResponse$Outbound` instead. */
    type Outbound = PutV1CompanyPaymentConfigsResponse$Outbound;
}
export declare function putV1CompanyPaymentConfigsResponseToJSON(putV1CompanyPaymentConfigsResponse: PutV1CompanyPaymentConfigsResponse): string;
export declare function putV1CompanyPaymentConfigsResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyPaymentConfigsResponse, SDKValidationError>;
//# sourceMappingURL=putv1companypaymentconfigs.d.ts.map