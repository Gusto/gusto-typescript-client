import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The contractor type.
 */
export declare const PostV1CompaniesCompanyUuidContractorsType: {
    readonly Individual: "Individual";
    readonly Business: "Business";
};
/**
 * The contractor type.
 */
export type PostV1CompaniesCompanyUuidContractorsType = ClosedEnum<typeof PostV1CompaniesCompanyUuidContractorsType>;
/**
 * The contractor’s wage type.
 *
 * @remarks
 */
export declare const WageType: {
    readonly Fixed: "Fixed";
    readonly Hourly: "Hourly";
};
/**
 * The contractor’s wage type.
 *
 * @remarks
 */
export type WageType = ClosedEnum<typeof WageType>;
/**
 * Create an individual or business contractor.
 */
export type PostV1CompaniesCompanyUuidContractorsRequestBody = {
    /**
     * The contractor type.
     */
    type?: PostV1CompaniesCompanyUuidContractorsType | undefined;
    /**
     * The contractor’s wage type.
     *
     * @remarks
     */
    wageType: WageType;
    /**
     * The day when the contractor will start working for the company.
     *
     * @remarks
     */
    startDate: string;
    /**
     * The contractor’s hourly rate. This attribute is required if the wage_type is `Hourly`.
     */
    hourlyRate?: string | undefined;
    /**
     * Whether the contractor or the payroll admin will complete onboarding in Gusto.
     *
     * @remarks
     * Self-onboarding is recommended so that contractors receive Gusto accounts.
     * If self_onboarding is true, then email is required.
     */
    selfOnboarding?: boolean | undefined;
    /**
     * The contractor’s email address.
     */
    email?: string | undefined;
    /**
     * The contractor’s first name.
     *
     * @remarks
     * This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.
     */
    firstName?: string | undefined;
    /**
     * The contractor’s last name.
     *
     * @remarks
     * This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.
     */
    lastName?: string | undefined;
    /**
     * The contractor’s middle initial.
     *
     * @remarks
     * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
     */
    middleInitial?: string | undefined;
    /**
     * The boolean flag indicating whether Gusto will file a new hire report for the contractor.
     *
     * @remarks
     * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
     */
    fileNewHireReport?: boolean | undefined;
    /**
     * State where the contractor will be conducting the majority of their work for the company.
     *
     * @remarks
     * This value is used when generating the new hire report.
     * This attribute is required for `Individual` contractors if `file_new_hire_report` is true and will be ignored for `Business` contractors.
     */
    workState?: string | null | undefined;
    /**
     * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
     *
     * @remarks
     * Social security number is needed to file the annual 1099 tax form.
     */
    ssn?: string | undefined;
    /**
     * The name of the contractor business. This attribute is required for `Business` contractors and will be ignored for `Individual` contractors.
     */
    businessName?: string | undefined;
    /**
     * The employer identification number of the contractor business.
     *
     * @remarks
     * This attribute is optional for `Business` contractors and will be ignored for `Individual` contractors.
     */
    ein?: string | undefined;
    /**
     * The status of the contractor. If the contractor's start date is in the future, updating this field to true means we are setting the start date to today.
     */
    isActive?: boolean | undefined;
};
export type PostV1CompaniesCompanyUuidContractorsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Create an individual or business contractor.
     */
    requestBody: PostV1CompaniesCompanyUuidContractorsRequestBody;
};
export type PostV1CompaniesCompanyUuidContractorsResponse = {
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
    contractor?: components.Contractor | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidContractorsType$inboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyUuidContractorsType>;
/** @internal */
export declare const PostV1CompaniesCompanyUuidContractorsType$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyUuidContractorsType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyUuidContractorsType$ {
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Individual: "Individual";
        readonly Business: "Business";
    }>;
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Individual: "Individual";
        readonly Business: "Business";
    }>;
}
/** @internal */
export declare const WageType$inboundSchema: z.ZodNativeEnum<typeof WageType>;
/** @internal */
export declare const WageType$outboundSchema: z.ZodNativeEnum<typeof WageType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WageType$ {
    /** @deprecated use `WageType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Fixed: "Fixed";
        readonly Hourly: "Hourly";
    }>;
    /** @deprecated use `WageType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Fixed: "Fixed";
        readonly Hourly: "Hourly";
    }>;
}
/** @internal */
export declare const PostV1CompaniesCompanyUuidContractorsRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound = {
    type: string;
    wage_type: string;
    start_date: string;
    hourly_rate?: string | undefined;
    self_onboarding: boolean;
    email?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    middle_initial?: string | undefined;
    file_new_hire_report: boolean;
    work_state?: string | null | undefined;
    ssn?: string | undefined;
    business_name?: string | undefined;
    ein?: string | undefined;
    is_active?: boolean | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidContractorsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidContractorsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyUuidContractorsRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidContractorsRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyUuidContractorsRequestBodyToJSON(postV1CompaniesCompanyUuidContractorsRequestBody: PostV1CompaniesCompanyUuidContractorsRequestBody): string;
export declare function postV1CompaniesCompanyUuidContractorsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyUuidContractorsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyUuidContractorsRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyUuidContractorsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidContractorsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidContractorsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyUuidContractorsRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidContractorsRequest>;
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyUuidContractorsRequest$Outbound;
}
export declare function postV1CompaniesCompanyUuidContractorsRequestToJSON(postV1CompaniesCompanyUuidContractorsRequest: PostV1CompaniesCompanyUuidContractorsRequest): string;
export declare function postV1CompaniesCompanyUuidContractorsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyUuidContractorsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyUuidContractorsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyUuidContractorsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Contractor?: components.Contractor$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidContractorsResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidContractorsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyUuidContractorsResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidContractorsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidContractorsResponse>;
    /** @deprecated use `PostV1CompaniesCompanyUuidContractorsResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyUuidContractorsResponse$Outbound;
}
export declare function postV1CompaniesCompanyUuidContractorsResponseToJSON(postV1CompaniesCompanyUuidContractorsResponse: PostV1CompaniesCompanyUuidContractorsResponse): string;
export declare function postV1CompaniesCompanyUuidContractorsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyUuidContractorsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyuuidcontractors.d.ts.map