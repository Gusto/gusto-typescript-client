import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    employeeUuids?: Array<string> | null | undefined;
};
export type PostCompaniesPayrollSkipCompanyUuidRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostCompaniesPayrollSkipCompanyUuidRequestBody;
};
export type PostCompaniesPayrollSkipCompanyUuidResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export declare const PayrollType$outboundSchema: z.ZodNativeEnum<typeof PayrollType>;
/** @internal */
export type PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound = {
    payroll_type: string;
    start_date?: string | undefined;
    end_date?: string | undefined;
    pay_schedule_uuid?: string | undefined;
    employee_uuids?: Array<string> | null | undefined;
};
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidRequestBody$outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidRequestBody>;
export declare function postCompaniesPayrollSkipCompanyUuidRequestBodyToJSON(postCompaniesPayrollSkipCompanyUuidRequestBody: PostCompaniesPayrollSkipCompanyUuidRequestBody): string;
/** @internal */
export type PostCompaniesPayrollSkipCompanyUuidRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostCompaniesPayrollSkipCompanyUuidRequestBody$Outbound;
};
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidRequest$outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidRequest$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidRequest>;
export declare function postCompaniesPayrollSkipCompanyUuidRequestToJSON(postCompaniesPayrollSkipCompanyUuidRequest: PostCompaniesPayrollSkipCompanyUuidRequest): string;
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidResponse$inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponse, z.ZodTypeDef, unknown>;
export declare function postCompaniesPayrollSkipCompanyUuidResponseFromJSON(jsonString: string): SafeParseResult<PostCompaniesPayrollSkipCompanyUuidResponse, SDKValidationError>;
//# sourceMappingURL=postcompaniespayrollskipcompanyuuid.d.ts.map