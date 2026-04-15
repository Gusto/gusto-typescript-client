import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompanyBenefitsCompanyBenefitIdRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    /**
     * Whether this benefit is active for employee participation. Company benefits may only be deactivated if no employees are actively participating.
     */
    active?: boolean | undefined;
    /**
     * The description of the company benefit. For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
     */
    description?: string | undefined;
};
export type PutV1CompanyBenefitsCompanyBenefitIdRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompanyBenefitsCompanyBenefitIdRequestBody;
};
export type PutV1CompanyBenefitsCompanyBenefitIdResponse = {
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
    companyBenefit?: components.CompanyBenefit | undefined;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdRequestBody$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound = {
    version: string;
    active?: boolean | undefined;
    description?: string | undefined;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdRequestBody$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyBenefitsCompanyBenefitIdRequestBody$ {
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdRequestBody>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound` instead. */
    type Outbound = PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound;
}
export declare function putV1CompanyBenefitsCompanyBenefitIdRequestBodyToJSON(putV1CompanyBenefitsCompanyBenefitIdRequestBody: PutV1CompanyBenefitsCompanyBenefitIdRequestBody): string;
export declare function putV1CompanyBenefitsCompanyBenefitIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound = {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyBenefitsCompanyBenefitIdRequest$ {
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdRequest>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound` instead. */
    type Outbound = PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound;
}
export declare function putV1CompanyBenefitsCompanyBenefitIdRequestToJSON(putV1CompanyBenefitsCompanyBenefitIdRequest: PutV1CompanyBenefitsCompanyBenefitIdRequest): string;
export declare function putV1CompanyBenefitsCompanyBenefitIdRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Benefit"?: components.CompanyBenefit$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyBenefitsCompanyBenefitIdResponse$ {
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdResponse>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound` instead. */
    type Outbound = PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound;
}
export declare function putV1CompanyBenefitsCompanyBenefitIdResponseToJSON(putV1CompanyBenefitsCompanyBenefitIdResponse: PutV1CompanyBenefitsCompanyBenefitIdResponse): string;
export declare function putV1CompanyBenefitsCompanyBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1companybenefitscompanybenefitid.d.ts.map