import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1CompanyBenefitsCompanyBenefitIdRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1CompanyBenefitsCompanyBenefitIdResponse = {
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
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound = {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompanyBenefitsCompanyBenefitIdRequest$ {
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdRequest>;
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound` instead. */
    type Outbound = DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound;
}
export declare function deleteV1CompanyBenefitsCompanyBenefitIdRequestToJSON(deleteV1CompanyBenefitsCompanyBenefitIdRequest: DeleteV1CompanyBenefitsCompanyBenefitIdRequest): string;
export declare function deleteV1CompanyBenefitsCompanyBenefitIdRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1CompanyBenefitsCompanyBenefitIdRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompanyBenefitsCompanyBenefitIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponse$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompanyBenefitsCompanyBenefitIdResponse$ {
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponse$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdResponse>;
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponse$Outbound` instead. */
    type Outbound = DeleteV1CompanyBenefitsCompanyBenefitIdResponse$Outbound;
}
export declare function deleteV1CompanyBenefitsCompanyBenefitIdResponseToJSON(deleteV1CompanyBenefitsCompanyBenefitIdResponse: DeleteV1CompanyBenefitsCompanyBenefitIdResponse): string;
export declare function deleteV1CompanyBenefitsCompanyBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompanyBenefitsCompanyBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1companybenefitscompanybenefitid.d.ts.map