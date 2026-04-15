import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyBenefitsCompanyBenefitIdRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Whether to return employee benefits associated with the benefit
     */
    withEmployeeBenefits?: boolean | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyBenefitsCompanyBenefitIdResponse = {
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
    companyBenefitWithEmployeeBenefits?: components.CompanyBenefitWithEmployeeBenefits | undefined;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdRequest$Outbound = {
    company_benefit_id: string;
    with_employee_benefits?: boolean | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyBenefitsCompanyBenefitIdRequest$ {
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdRequest>;
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdRequest$Outbound` instead. */
    type Outbound = GetV1CompanyBenefitsCompanyBenefitIdRequest$Outbound;
}
export declare function getV1CompanyBenefitsCompanyBenefitIdRequestToJSON(getV1CompanyBenefitsCompanyBenefitIdRequest: GetV1CompanyBenefitsCompanyBenefitIdRequest): string;
export declare function getV1CompanyBenefitsCompanyBenefitIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyBenefitsCompanyBenefitIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Benefit-With-Employee-Benefits"?: components.CompanyBenefitWithEmployeeBenefits$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdResponse$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyBenefitsCompanyBenefitIdResponse$ {
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdResponse$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdResponse>;
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdResponse$Outbound` instead. */
    type Outbound = GetV1CompanyBenefitsCompanyBenefitIdResponse$Outbound;
}
export declare function getV1CompanyBenefitsCompanyBenefitIdResponseToJSON(getV1CompanyBenefitsCompanyBenefitIdResponse: GetV1CompanyBenefitsCompanyBenefitIdResponse): string;
export declare function getV1CompanyBenefitsCompanyBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyBenefitsCompanyBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1companybenefitscompanybenefitid.d.ts.map