import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LiabilitySelections = {
    /**
     * The ID of the tax.
     */
    taxId: number;
    /**
     * The UUID of the last unpaid external payroll uuid. It should be null when the full amount of tax liability has been paid.
     */
    lastUnpaidExternalPayrollUuid: string | null;
    /**
     * A selection of unpaid liability amount.
     */
    unpaidLiabilityAmount: number;
};
export type PutV1TaxLiabilitiesRequestBody = {
    liabilitySelections?: Array<LiabilitySelections> | undefined;
};
export type PutV1TaxLiabilitiesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1TaxLiabilitiesRequestBody;
};
export type PutV1TaxLiabilitiesResponse = {
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
export declare const LiabilitySelections$inboundSchema: z.ZodType<LiabilitySelections, z.ZodTypeDef, unknown>;
/** @internal */
export type LiabilitySelections$Outbound = {
    tax_id: number;
    last_unpaid_external_payroll_uuid: string | null;
    unpaid_liability_amount: number;
};
/** @internal */
export declare const LiabilitySelections$outboundSchema: z.ZodType<LiabilitySelections$Outbound, z.ZodTypeDef, LiabilitySelections>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LiabilitySelections$ {
    /** @deprecated use `LiabilitySelections$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LiabilitySelections, z.ZodTypeDef, unknown>;
    /** @deprecated use `LiabilitySelections$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LiabilitySelections$Outbound, z.ZodTypeDef, LiabilitySelections>;
    /** @deprecated use `LiabilitySelections$Outbound` instead. */
    type Outbound = LiabilitySelections$Outbound;
}
export declare function liabilitySelectionsToJSON(liabilitySelections: LiabilitySelections): string;
export declare function liabilitySelectionsFromJSON(jsonString: string): SafeParseResult<LiabilitySelections, SDKValidationError>;
/** @internal */
export declare const PutV1TaxLiabilitiesRequestBody$inboundSchema: z.ZodType<PutV1TaxLiabilitiesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TaxLiabilitiesRequestBody$Outbound = {
    liability_selections?: Array<LiabilitySelections$Outbound> | undefined;
};
/** @internal */
export declare const PutV1TaxLiabilitiesRequestBody$outboundSchema: z.ZodType<PutV1TaxLiabilitiesRequestBody$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TaxLiabilitiesRequestBody$ {
    /** @deprecated use `PutV1TaxLiabilitiesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TaxLiabilitiesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TaxLiabilitiesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TaxLiabilitiesRequestBody$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesRequestBody>;
    /** @deprecated use `PutV1TaxLiabilitiesRequestBody$Outbound` instead. */
    type Outbound = PutV1TaxLiabilitiesRequestBody$Outbound;
}
export declare function putV1TaxLiabilitiesRequestBodyToJSON(putV1TaxLiabilitiesRequestBody: PutV1TaxLiabilitiesRequestBody): string;
export declare function putV1TaxLiabilitiesRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1TaxLiabilitiesRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1TaxLiabilitiesRequest$inboundSchema: z.ZodType<PutV1TaxLiabilitiesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TaxLiabilitiesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1TaxLiabilitiesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1TaxLiabilitiesRequest$outboundSchema: z.ZodType<PutV1TaxLiabilitiesRequest$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TaxLiabilitiesRequest$ {
    /** @deprecated use `PutV1TaxLiabilitiesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TaxLiabilitiesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TaxLiabilitiesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TaxLiabilitiesRequest$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesRequest>;
    /** @deprecated use `PutV1TaxLiabilitiesRequest$Outbound` instead. */
    type Outbound = PutV1TaxLiabilitiesRequest$Outbound;
}
export declare function putV1TaxLiabilitiesRequestToJSON(putV1TaxLiabilitiesRequest: PutV1TaxLiabilitiesRequest): string;
export declare function putV1TaxLiabilitiesRequestFromJSON(jsonString: string): SafeParseResult<PutV1TaxLiabilitiesRequest, SDKValidationError>;
/** @internal */
export declare const PutV1TaxLiabilitiesResponse$inboundSchema: z.ZodType<PutV1TaxLiabilitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TaxLiabilitiesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Tax-Liabilities-List"?: Array<Array<components.TaxLiabilitiesSelections$Outbound>> | undefined;
};
/** @internal */
export declare const PutV1TaxLiabilitiesResponse$outboundSchema: z.ZodType<PutV1TaxLiabilitiesResponse$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TaxLiabilitiesResponse$ {
    /** @deprecated use `PutV1TaxLiabilitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TaxLiabilitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TaxLiabilitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TaxLiabilitiesResponse$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesResponse>;
    /** @deprecated use `PutV1TaxLiabilitiesResponse$Outbound` instead. */
    type Outbound = PutV1TaxLiabilitiesResponse$Outbound;
}
export declare function putV1TaxLiabilitiesResponseToJSON(putV1TaxLiabilitiesResponse: PutV1TaxLiabilitiesResponse): string;
export declare function putV1TaxLiabilitiesResponseFromJSON(jsonString: string): SafeParseResult<PutV1TaxLiabilitiesResponse, SDKValidationError>;
//# sourceMappingURL=putv1taxliabilities.d.ts.map