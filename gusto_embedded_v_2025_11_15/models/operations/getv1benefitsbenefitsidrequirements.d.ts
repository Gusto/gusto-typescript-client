import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1BenefitsBenefitsIdRequirementsRequest = {
    /**
     * The benefit type in Gusto.
     */
    benefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1BenefitsBenefitsIdRequirementsResponse = {
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
     * Benefit type requirements response
     */
    benefitTypeRequirements?: components.BenefitTypeRequirements | undefined;
};
/** @internal */
export declare const GetV1BenefitsBenefitsIdRequirementsRequest$inboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1BenefitsBenefitsIdRequirementsRequest$Outbound = {
    benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1BenefitsBenefitsIdRequirementsRequest$outboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsRequest$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitsIdRequirementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1BenefitsBenefitsIdRequirementsRequest$ {
    /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsRequest$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitsIdRequirementsRequest>;
    /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsRequest$Outbound` instead. */
    type Outbound = GetV1BenefitsBenefitsIdRequirementsRequest$Outbound;
}
export declare function getV1BenefitsBenefitsIdRequirementsRequestToJSON(getV1BenefitsBenefitsIdRequirementsRequest: GetV1BenefitsBenefitsIdRequirementsRequest): string;
export declare function getV1BenefitsBenefitsIdRequirementsRequestFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsBenefitsIdRequirementsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1BenefitsBenefitsIdRequirementsResponse$inboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1BenefitsBenefitsIdRequirementsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Benefit-Type-Requirements"?: components.BenefitTypeRequirements$Outbound | undefined;
};
/** @internal */
export declare const GetV1BenefitsBenefitsIdRequirementsResponse$outboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsResponse$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitsIdRequirementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1BenefitsBenefitsIdRequirementsResponse$ {
    /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsResponse$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitsIdRequirementsResponse>;
    /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsResponse$Outbound` instead. */
    type Outbound = GetV1BenefitsBenefitsIdRequirementsResponse$Outbound;
}
export declare function getV1BenefitsBenefitsIdRequirementsResponseToJSON(getV1BenefitsBenefitsIdRequirementsResponse: GetV1BenefitsBenefitsIdRequirementsResponse): string;
export declare function getV1BenefitsBenefitsIdRequirementsResponseFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsBenefitsIdRequirementsResponse, SDKValidationError>;
//# sourceMappingURL=getv1benefitsbenefitsidrequirements.d.ts.map