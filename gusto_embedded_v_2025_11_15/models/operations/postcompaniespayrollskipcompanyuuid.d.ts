import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Payroll type
 */
export declare const PayrollType: {
    readonly Regular: "Regular";
    readonly HiredEmployee: "Hired employee";
    readonly DismissedEmployee: "Dismissed employee";
    readonly TransitionFromOldPaySchedule: "Transition from old pay schedule";
};
/**
 * Payroll type
 */
export type PayrollType = ClosedEnum<typeof PayrollType>;
export type PostCompaniesPayrollSkipCompanyUuidRequestBody = {
    /**
     * Payroll type
     */
    payrollType: PayrollType;
    /**
     * Pay period start date
     */
    startDate?: string | undefined;
    /**
     * Pay period end date. If left empty, defaults to today's date.
     */
    endDate?: string | undefined;
    /**
     * The UUID of the pay schedule
     */
    payScheduleUuid?: string | undefined;
    /**
     * An array of employees. This field is only applicable to new hire payroll and termination payroll
     */
    employeeUuids?: Array<string> | undefined;
};
export type PostCompaniesPayrollSkipCompanyUuidRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostCompaniesPayrollSkipCompanyUuidRequestBody;
};
export type PostCompaniesPayrollSkipCompanyUuidResponse = {
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
export declare const PayrollType$inboundSchema: z.ZodNativeEnum<typeof PayrollType>;
/** @internal */
export declare const PayrollType$outboundSchema: z.ZodNativeEnum<typeof PayrollType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollType$ {
    /** @deprecated use `PayrollType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Regular: "Regular";
        readonly HiredEmployee: "Hired employee";
        readonly DismissedEmployee: "Dismissed employee";
        readonly TransitionFromOldPaySchedule: "Transition from old pay schedule";
    }>;
    /** @deprecated use `PayrollType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Regular: "Regular";
        readonly HiredEmployee: "Hired employee";
        readonly DismissedEmployee: "Dismissed employee";
        readonly TransitionFromOldPaySchedule: "Transition from old pay schedule";
    }>;
}
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidRequestBody$inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound = {
    payroll_type: string;
    start_date?: string | undefined;
    end_date?: string | undefined;
    pay_schedule_uuid?: string | undefined;
    employee_uuids?: Array<string> | undefined;
};
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidRequestBody$outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesPayrollSkipCompanyUuidRequestBody$ {
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidRequestBody>;
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound` instead. */
    type Outbound = PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound;
}
export declare function postCompaniesPayrollSkipCompanyUuidRequestBodyToJSON(postCompaniesPayrollSkipCompanyUuidRequestBody: PostCompaniesPayrollSkipCompanyUuidRequestBody): string;
export declare function postCompaniesPayrollSkipCompanyUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PostCompaniesPayrollSkipCompanyUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidRequest$inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesPayrollSkipCompanyUuidRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound;
};
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidRequest$outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequest$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesPayrollSkipCompanyUuidRequest$ {
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequest$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidRequest>;
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidRequest$Outbound` instead. */
    type Outbound = PostCompaniesPayrollSkipCompanyUuidRequest$Outbound;
}
export declare function postCompaniesPayrollSkipCompanyUuidRequestToJSON(postCompaniesPayrollSkipCompanyUuidRequest: PostCompaniesPayrollSkipCompanyUuidRequest): string;
export declare function postCompaniesPayrollSkipCompanyUuidRequestFromJSON(jsonString: string): SafeParseResult<PostCompaniesPayrollSkipCompanyUuidRequest, SDKValidationError>;
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidResponse$inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesPayrollSkipCompanyUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidResponse$outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponse$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesPayrollSkipCompanyUuidResponse$ {
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponse$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidResponse>;
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidResponse$Outbound` instead. */
    type Outbound = PostCompaniesPayrollSkipCompanyUuidResponse$Outbound;
}
export declare function postCompaniesPayrollSkipCompanyUuidResponseToJSON(postCompaniesPayrollSkipCompanyUuidResponse: PostCompaniesPayrollSkipCompanyUuidResponse): string;
export declare function postCompaniesPayrollSkipCompanyUuidResponseFromJSON(jsonString: string): SafeParseResult<PostCompaniesPayrollSkipCompanyUuidResponse, SDKValidationError>;
//# sourceMappingURL=postcompaniespayrollskipcompanyuuid.d.ts.map