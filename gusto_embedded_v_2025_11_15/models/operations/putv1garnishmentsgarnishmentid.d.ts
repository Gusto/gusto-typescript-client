import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1GarnishmentsGarnishmentIdRequestBody = {
    /**
     * Whether or not this garnishment is currently active.
     */
    active?: boolean | undefined;
    /**
     * The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. "8.00".
     */
    amount?: string | undefined;
    /**
     * The description of the garnishment.
     */
    description?: string | undefined;
    /**
     * Whether the garnishment is court ordered.
     */
    courtOrdered?: boolean | undefined;
    /**
     * The number of times to apply the garnishment. Ignored if recurring is true.
     */
    times?: number | null | undefined;
    /**
     * Whether the garnishment should recur indefinitely.
     */
    recurring?: boolean | undefined;
    /**
     * The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. "200.00".
     */
    annualMaximum?: string | null | undefined;
    /**
     * The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. "16.00".
     */
    payPeriodMaximum?: string | null | undefined;
    /**
     * Whether the amount should be treated as a percentage to be deducted per pay period.
     */
    deductAsPercentage?: boolean | undefined;
    /**
     * A maximum total deduction for the lifetime of this garnishment. A null value indicates no maximum.
     */
    totalAmount?: string | undefined;
    /**
     * Additional child support order details
     */
    childSupport?: components.GarnishmentChildSupport | null | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
};
export type PutV1GarnishmentsGarnishmentIdRequest = {
    /**
     * The UUID of the garnishment
     */
    garnishmentId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1GarnishmentsGarnishmentIdRequestBody;
};
export type PutV1GarnishmentsGarnishmentIdResponse = {
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
export declare const PutV1GarnishmentsGarnishmentIdRequestBody$inboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1GarnishmentsGarnishmentIdRequestBody$Outbound = {
    active: boolean;
    amount?: string | undefined;
    description?: string | undefined;
    court_ordered?: boolean | undefined;
    times: number | null;
    recurring: boolean;
    annual_maximum: string | null;
    pay_period_maximum: string | null;
    deduct_as_percentage: boolean;
    total_amount?: string | undefined;
    child_support?: components.GarnishmentChildSupport$Outbound | null | undefined;
    version: string;
};
/** @internal */
export declare const PutV1GarnishmentsGarnishmentIdRequestBody$outboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequestBody$Outbound, z.ZodTypeDef, PutV1GarnishmentsGarnishmentIdRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1GarnishmentsGarnishmentIdRequestBody$ {
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequestBody$Outbound, z.ZodTypeDef, PutV1GarnishmentsGarnishmentIdRequestBody>;
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequestBody$Outbound` instead. */
    type Outbound = PutV1GarnishmentsGarnishmentIdRequestBody$Outbound;
}
export declare function putV1GarnishmentsGarnishmentIdRequestBodyToJSON(putV1GarnishmentsGarnishmentIdRequestBody: PutV1GarnishmentsGarnishmentIdRequestBody): string;
export declare function putV1GarnishmentsGarnishmentIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1GarnishmentsGarnishmentIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1GarnishmentsGarnishmentIdRequest$inboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1GarnishmentsGarnishmentIdRequest$Outbound = {
    garnishment_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1GarnishmentsGarnishmentIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1GarnishmentsGarnishmentIdRequest$outboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequest$Outbound, z.ZodTypeDef, PutV1GarnishmentsGarnishmentIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1GarnishmentsGarnishmentIdRequest$ {
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequest$Outbound, z.ZodTypeDef, PutV1GarnishmentsGarnishmentIdRequest>;
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequest$Outbound` instead. */
    type Outbound = PutV1GarnishmentsGarnishmentIdRequest$Outbound;
}
export declare function putV1GarnishmentsGarnishmentIdRequestToJSON(putV1GarnishmentsGarnishmentIdRequest: PutV1GarnishmentsGarnishmentIdRequest): string;
export declare function putV1GarnishmentsGarnishmentIdRequestFromJSON(jsonString: string): SafeParseResult<PutV1GarnishmentsGarnishmentIdRequest, SDKValidationError>;
/** @internal */
export declare const PutV1GarnishmentsGarnishmentIdResponse$inboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1GarnishmentsGarnishmentIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Garnishment?: components.Garnishment$Outbound | undefined;
};
/** @internal */
export declare const PutV1GarnishmentsGarnishmentIdResponse$outboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdResponse$Outbound, z.ZodTypeDef, PutV1GarnishmentsGarnishmentIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1GarnishmentsGarnishmentIdResponse$ {
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdResponse$Outbound, z.ZodTypeDef, PutV1GarnishmentsGarnishmentIdResponse>;
    /** @deprecated use `PutV1GarnishmentsGarnishmentIdResponse$Outbound` instead. */
    type Outbound = PutV1GarnishmentsGarnishmentIdResponse$Outbound;
}
export declare function putV1GarnishmentsGarnishmentIdResponseToJSON(putV1GarnishmentsGarnishmentIdResponse: PutV1GarnishmentsGarnishmentIdResponse): string;
export declare function putV1GarnishmentsGarnishmentIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1GarnishmentsGarnishmentIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1garnishmentsgarnishmentid.d.ts.map