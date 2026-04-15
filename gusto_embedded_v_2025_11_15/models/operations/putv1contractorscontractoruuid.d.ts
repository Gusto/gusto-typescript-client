import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The contractor type.
 */
export declare const PutV1ContractorsContractorUuidType: {
    readonly Individual: "Individual";
    readonly Business: "Business";
};
/**
 * The contractor type.
 */
export type PutV1ContractorsContractorUuidType = ClosedEnum<typeof PutV1ContractorsContractorUuidType>;
/**
 * The contractor’s wage type.
 *
 * @remarks
 */
export declare const PutV1ContractorsContractorUuidWageType: {
    readonly Fixed: "Fixed";
    readonly Hourly: "Hourly";
};
/**
 * The contractor’s wage type.
 *
 * @remarks
 */
export type PutV1ContractorsContractorUuidWageType = ClosedEnum<typeof PutV1ContractorsContractorUuidWageType>;
export type PutV1ContractorsContractorUuidRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * The contractor type.
     */
    type?: PutV1ContractorsContractorUuidType | undefined;
    /**
     * The contractor’s wage type.
     *
     * @remarks
     */
    wageType?: PutV1ContractorsContractorUuidWageType | undefined;
    /**
     * The day when the contractor will start working for the company.
     *
     * @remarks
     */
    startDate?: string | undefined;
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
export type PutV1ContractorsContractorUuidRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1ContractorsContractorUuidRequestBody;
};
export type PutV1ContractorsContractorUuidResponse = {
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
export declare const PutV1ContractorsContractorUuidType$inboundSchema: z.ZodNativeEnum<typeof PutV1ContractorsContractorUuidType>;
/** @internal */
export declare const PutV1ContractorsContractorUuidType$outboundSchema: z.ZodNativeEnum<typeof PutV1ContractorsContractorUuidType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidType$ {
    /** @deprecated use `PutV1ContractorsContractorUuidType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Individual: "Individual";
        readonly Business: "Business";
    }>;
    /** @deprecated use `PutV1ContractorsContractorUuidType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Individual: "Individual";
        readonly Business: "Business";
    }>;
}
/** @internal */
export declare const PutV1ContractorsContractorUuidWageType$inboundSchema: z.ZodNativeEnum<typeof PutV1ContractorsContractorUuidWageType>;
/** @internal */
export declare const PutV1ContractorsContractorUuidWageType$outboundSchema: z.ZodNativeEnum<typeof PutV1ContractorsContractorUuidWageType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidWageType$ {
    /** @deprecated use `PutV1ContractorsContractorUuidWageType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Fixed: "Fixed";
        readonly Hourly: "Hourly";
    }>;
    /** @deprecated use `PutV1ContractorsContractorUuidWageType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Fixed: "Fixed";
        readonly Hourly: "Hourly";
    }>;
}
/** @internal */
export declare const PutV1ContractorsContractorUuidRequestBody$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorUuidRequestBody$Outbound = {
    version: string;
    type: string;
    wage_type?: string | undefined;
    start_date?: string | undefined;
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
export declare const PutV1ContractorsContractorUuidRequestBody$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidRequestBody$ {
    /** @deprecated use `PutV1ContractorsContractorUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidRequestBody>;
    /** @deprecated use `PutV1ContractorsContractorUuidRequestBody$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidRequestBody$Outbound;
}
export declare function putV1ContractorsContractorUuidRequestBodyToJSON(putV1ContractorsContractorUuidRequestBody: PutV1ContractorsContractorUuidRequestBody): string;
export declare function putV1ContractorsContractorUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorsContractorUuidRequest$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorUuidRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ContractorsContractorUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidRequest$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidRequest$ {
    /** @deprecated use `PutV1ContractorsContractorUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidRequest>;
    /** @deprecated use `PutV1ContractorsContractorUuidRequest$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidRequest$Outbound;
}
export declare function putV1ContractorsContractorUuidRequestToJSON(putV1ContractorsContractorUuidRequest: PutV1ContractorsContractorUuidRequest): string;
export declare function putV1ContractorsContractorUuidRequestFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorsContractorUuidResponse$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Contractor?: components.Contractor$Outbound | undefined;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidResponse$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidResponse$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidResponse$ {
    /** @deprecated use `PutV1ContractorsContractorUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidResponse$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidResponse>;
    /** @deprecated use `PutV1ContractorsContractorUuidResponse$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidResponse$Outbound;
}
export declare function putV1ContractorsContractorUuidResponseToJSON(putV1ContractorsContractorUuidResponse: PutV1ContractorsContractorUuidResponse): string;
export declare function putV1ContractorsContractorUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorscontractoruuid.d.ts.map