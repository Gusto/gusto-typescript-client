import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Garnishment } from "../components/garnishment.js";
import { GarnishmentChildSupport, GarnishmentChildSupport$Outbound } from "../components/garnishmentchildsupport.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    totalAmount?: string | null | undefined;
    /**
     * Additional child support order details
     */
    childSupport?: GarnishmentChildSupport | null | undefined;
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
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1GarnishmentsGarnishmentIdRequestBody;
};
export type PutV1GarnishmentsGarnishmentIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    garnishment?: Garnishment | undefined;
};
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
    total_amount?: string | null | undefined;
    child_support?: GarnishmentChildSupport$Outbound | null | undefined;
    version: string;
};
/** @internal */
export declare const PutV1GarnishmentsGarnishmentIdRequestBody$outboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequestBody$Outbound, z.ZodTypeDef, PutV1GarnishmentsGarnishmentIdRequestBody>;
export declare function putV1GarnishmentsGarnishmentIdRequestBodyToJSON(putV1GarnishmentsGarnishmentIdRequestBody: PutV1GarnishmentsGarnishmentIdRequestBody): string;
/** @internal */
export type PutV1GarnishmentsGarnishmentIdRequest$Outbound = {
    garnishment_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1GarnishmentsGarnishmentIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1GarnishmentsGarnishmentIdRequest$outboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdRequest$Outbound, z.ZodTypeDef, PutV1GarnishmentsGarnishmentIdRequest>;
export declare function putV1GarnishmentsGarnishmentIdRequestToJSON(putV1GarnishmentsGarnishmentIdRequest: PutV1GarnishmentsGarnishmentIdRequest): string;
/** @internal */
export declare const PutV1GarnishmentsGarnishmentIdResponse$inboundSchema: z.ZodType<PutV1GarnishmentsGarnishmentIdResponse, z.ZodTypeDef, unknown>;
export declare function putV1GarnishmentsGarnishmentIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1GarnishmentsGarnishmentIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1garnishmentsgarnishmentid.d.ts.map