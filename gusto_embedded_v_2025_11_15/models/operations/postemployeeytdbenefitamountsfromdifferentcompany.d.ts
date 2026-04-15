import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    postEmployeeYtdBenefitAmountsFromDifferentCompany: components.PostEmployeeYtdBenefitAmountsFromDifferentCompany;
};
export type PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse = {
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
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$inboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    "post-employee-ytd-benefit-amounts-from-different-company": components.PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound;
};
/** @internal */
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$outboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound, z.ZodTypeDef, PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$ {
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound, z.ZodTypeDef, PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest>;
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound` instead. */
    type Outbound = PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound;
}
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyRequestToJSON(postEmployeeYtdBenefitAmountsFromDifferentCompanyRequest: PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest): string;
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyRequestFromJSON(jsonString: string): SafeParseResult<PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, SDKValidationError>;
/** @internal */
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$inboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$outboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound, z.ZodTypeDef, PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$ {
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound, z.ZodTypeDef, PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse>;
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound` instead. */
    type Outbound = PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound;
}
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyResponseToJSON(postEmployeeYtdBenefitAmountsFromDifferentCompanyResponse: PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse): string;
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyResponseFromJSON(jsonString: string): SafeParseResult<PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, SDKValidationError>;
//# sourceMappingURL=postemployeeytdbenefitamountsfromdifferentcompany.d.ts.map