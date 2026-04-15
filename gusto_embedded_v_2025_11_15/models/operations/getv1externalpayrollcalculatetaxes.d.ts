import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ExternalPayrollCalculateTaxesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the external payroll
     */
    externalPayrollId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ExternalPayrollCalculateTaxesResponse = {
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
    externalPayrollTaxSuggestionsList?: Array<components.ExternalPayrollTaxSuggestions> | undefined;
};
/** @internal */
export declare const GetV1ExternalPayrollCalculateTaxesRequest$inboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ExternalPayrollCalculateTaxesRequest$Outbound = {
    company_uuid: string;
    external_payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ExternalPayrollCalculateTaxesRequest$outboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesRequest$Outbound, z.ZodTypeDef, GetV1ExternalPayrollCalculateTaxesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ExternalPayrollCalculateTaxesRequest$ {
    /** @deprecated use `GetV1ExternalPayrollCalculateTaxesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ExternalPayrollCalculateTaxesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesRequest$Outbound, z.ZodTypeDef, GetV1ExternalPayrollCalculateTaxesRequest>;
    /** @deprecated use `GetV1ExternalPayrollCalculateTaxesRequest$Outbound` instead. */
    type Outbound = GetV1ExternalPayrollCalculateTaxesRequest$Outbound;
}
export declare function getV1ExternalPayrollCalculateTaxesRequestToJSON(getV1ExternalPayrollCalculateTaxesRequest: GetV1ExternalPayrollCalculateTaxesRequest): string;
export declare function getV1ExternalPayrollCalculateTaxesRequestFromJSON(jsonString: string): SafeParseResult<GetV1ExternalPayrollCalculateTaxesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ExternalPayrollCalculateTaxesResponse$inboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ExternalPayrollCalculateTaxesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "External-Payroll-Tax-Suggestions-List"?: Array<components.ExternalPayrollTaxSuggestions$Outbound> | undefined;
};
/** @internal */
export declare const GetV1ExternalPayrollCalculateTaxesResponse$outboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesResponse$Outbound, z.ZodTypeDef, GetV1ExternalPayrollCalculateTaxesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ExternalPayrollCalculateTaxesResponse$ {
    /** @deprecated use `GetV1ExternalPayrollCalculateTaxesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ExternalPayrollCalculateTaxesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesResponse$Outbound, z.ZodTypeDef, GetV1ExternalPayrollCalculateTaxesResponse>;
    /** @deprecated use `GetV1ExternalPayrollCalculateTaxesResponse$Outbound` instead. */
    type Outbound = GetV1ExternalPayrollCalculateTaxesResponse$Outbound;
}
export declare function getV1ExternalPayrollCalculateTaxesResponseToJSON(getV1ExternalPayrollCalculateTaxesResponse: GetV1ExternalPayrollCalculateTaxesResponse): string;
export declare function getV1ExternalPayrollCalculateTaxesResponseFromJSON(jsonString: string): SafeParseResult<GetV1ExternalPayrollCalculateTaxesResponse, SDKValidationError>;
//# sourceMappingURL=getv1externalpayrollcalculatetaxes.d.ts.map