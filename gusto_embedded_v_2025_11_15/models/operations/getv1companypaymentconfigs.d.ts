import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyPaymentConfigsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyPaymentConfigsResponse = {
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
export declare const GetV1CompanyPaymentConfigsRequest$inboundSchema: z.ZodType<GetV1CompanyPaymentConfigsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyPaymentConfigsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyPaymentConfigsRequest$outboundSchema: z.ZodType<GetV1CompanyPaymentConfigsRequest$Outbound, z.ZodTypeDef, GetV1CompanyPaymentConfigsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyPaymentConfigsRequest$ {
    /** @deprecated use `GetV1CompanyPaymentConfigsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyPaymentConfigsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyPaymentConfigsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyPaymentConfigsRequest$Outbound, z.ZodTypeDef, GetV1CompanyPaymentConfigsRequest>;
    /** @deprecated use `GetV1CompanyPaymentConfigsRequest$Outbound` instead. */
    type Outbound = GetV1CompanyPaymentConfigsRequest$Outbound;
}
export declare function getV1CompanyPaymentConfigsRequestToJSON(getV1CompanyPaymentConfigsRequest: GetV1CompanyPaymentConfigsRequest): string;
export declare function getV1CompanyPaymentConfigsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyPaymentConfigsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyPaymentConfigsResponse$inboundSchema: z.ZodType<GetV1CompanyPaymentConfigsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyPaymentConfigsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payment-Configs"?: components.PaymentConfigs$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompanyPaymentConfigsResponse$outboundSchema: z.ZodType<GetV1CompanyPaymentConfigsResponse$Outbound, z.ZodTypeDef, GetV1CompanyPaymentConfigsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyPaymentConfigsResponse$ {
    /** @deprecated use `GetV1CompanyPaymentConfigsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyPaymentConfigsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyPaymentConfigsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyPaymentConfigsResponse$Outbound, z.ZodTypeDef, GetV1CompanyPaymentConfigsResponse>;
    /** @deprecated use `GetV1CompanyPaymentConfigsResponse$Outbound` instead. */
    type Outbound = GetV1CompanyPaymentConfigsResponse$Outbound;
}
export declare function getV1CompanyPaymentConfigsResponseToJSON(getV1CompanyPaymentConfigsResponse: GetV1CompanyPaymentConfigsResponse): string;
export declare function getV1CompanyPaymentConfigsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyPaymentConfigsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companypaymentconfigs.d.ts.map