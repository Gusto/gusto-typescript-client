import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The employee's compensation payment method. Invalid values will be ignored.
 */
export declare const PaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
};
/**
 * The employee's compensation payment method. Invalid values will be ignored.
 */
export type PaymentMethod = ClosedEnum<typeof PaymentMethod>;
/**
 * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements.
 */
export type FixedCompensations = {
    /**
     * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
     */
    name?: string | undefined;
    /**
     * The amount of the compensation for the pay period.
     */
    amount?: string | undefined;
    /**
     * The UUID of the job for the compensation.
     */
    jobUuid?: string | undefined;
};
/**
 * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours.
 */
export type HourlyCompensations = {
    /**
     * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
     */
    name?: string | undefined;
    /**
     * The number of hours to be compensated for this pay period.
     */
    hours?: string | undefined;
    /**
     * The UUIDs of the job for the compensation.
     */
    jobUuid?: string | undefined;
};
export type PaidTimeOff = {
    /**
     * The name of the PTO. This also serves as the unique, immutable identifier for the PTO. Must pass in name or policy_uuid but not both.
     */
    name?: string | undefined;
    /**
     * The hours of this PTO taken during the pay period.
     */
    hours?: string | undefined;
    /**
     * The uuid of the PTO policy. Must pass in name or policy_uuid but not both.
     */
    policyUuid?: string | undefined;
    /**
     * The outstanding hours paid upon termination. This field is only applicable for termination payrolls.
     */
    finalPayoutUnusedHoursInput?: string | undefined;
};
export type EmployeeCompensations = {
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    /**
     * The current version of this employee compensation from the prepared payroll. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * This employee will be excluded from payroll calculation and will not be paid for the payroll.
     */
    excluded?: boolean | undefined;
    /**
     * The employee's compensation payment method. Invalid values will be ignored.
     */
    paymentMethod?: PaymentMethod | undefined;
    /**
     * Custom text that will be printed as a personal note to the employee on a paystub.
     */
    memo?: string | undefined;
    fixedCompensations?: Array<FixedCompensations> | undefined;
    hourlyCompensations?: Array<HourlyCompensations> | undefined;
    /**
     * An array of all paid time off the employee is eligible for this pay period. Each paid time off object can be the name or the specific policy_uuid.
     */
    paidTimeOff?: Array<PaidTimeOff> | undefined;
};
export type PutV1CompaniesCompanyIdPayrollsRequestBody = {
    employeeCompensations: Array<EmployeeCompensations>;
};
export type PutV1CompaniesCompanyIdPayrollsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the payroll
     */
    payrollId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyIdPayrollsRequestBody;
};
export type PutV1CompaniesCompanyIdPayrollsResponse = {
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
     * A prepared payroll
     */
    payrollPrepared?: components.PayrollPrepared | undefined;
};
/** @internal */
export declare const PaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PaymentMethod>;
/** @internal */
export declare const PaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentMethod$ {
    /** @deprecated use `PaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
    /** @deprecated use `PaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
}
/** @internal */
export declare const FixedCompensations$inboundSchema: z.ZodType<FixedCompensations, z.ZodTypeDef, unknown>;
/** @internal */
export type FixedCompensations$Outbound = {
    name?: string | undefined;
    amount?: string | undefined;
    job_uuid?: string | undefined;
};
/** @internal */
export declare const FixedCompensations$outboundSchema: z.ZodType<FixedCompensations$Outbound, z.ZodTypeDef, FixedCompensations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FixedCompensations$ {
    /** @deprecated use `FixedCompensations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FixedCompensations, z.ZodTypeDef, unknown>;
    /** @deprecated use `FixedCompensations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FixedCompensations$Outbound, z.ZodTypeDef, FixedCompensations>;
    /** @deprecated use `FixedCompensations$Outbound` instead. */
    type Outbound = FixedCompensations$Outbound;
}
export declare function fixedCompensationsToJSON(fixedCompensations: FixedCompensations): string;
export declare function fixedCompensationsFromJSON(jsonString: string): SafeParseResult<FixedCompensations, SDKValidationError>;
/** @internal */
export declare const HourlyCompensations$inboundSchema: z.ZodType<HourlyCompensations, z.ZodTypeDef, unknown>;
/** @internal */
export type HourlyCompensations$Outbound = {
    name?: string | undefined;
    hours?: string | undefined;
    job_uuid?: string | undefined;
};
/** @internal */
export declare const HourlyCompensations$outboundSchema: z.ZodType<HourlyCompensations$Outbound, z.ZodTypeDef, HourlyCompensations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HourlyCompensations$ {
    /** @deprecated use `HourlyCompensations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HourlyCompensations, z.ZodTypeDef, unknown>;
    /** @deprecated use `HourlyCompensations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HourlyCompensations$Outbound, z.ZodTypeDef, HourlyCompensations>;
    /** @deprecated use `HourlyCompensations$Outbound` instead. */
    type Outbound = HourlyCompensations$Outbound;
}
export declare function hourlyCompensationsToJSON(hourlyCompensations: HourlyCompensations): string;
export declare function hourlyCompensationsFromJSON(jsonString: string): SafeParseResult<HourlyCompensations, SDKValidationError>;
/** @internal */
export declare const PaidTimeOff$inboundSchema: z.ZodType<PaidTimeOff, z.ZodTypeDef, unknown>;
/** @internal */
export type PaidTimeOff$Outbound = {
    name?: string | undefined;
    hours?: string | undefined;
    policy_uuid?: string | undefined;
    final_payout_unused_hours_input?: string | undefined;
};
/** @internal */
export declare const PaidTimeOff$outboundSchema: z.ZodType<PaidTimeOff$Outbound, z.ZodTypeDef, PaidTimeOff>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaidTimeOff$ {
    /** @deprecated use `PaidTimeOff$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PaidTimeOff, z.ZodTypeDef, unknown>;
    /** @deprecated use `PaidTimeOff$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PaidTimeOff$Outbound, z.ZodTypeDef, PaidTimeOff>;
    /** @deprecated use `PaidTimeOff$Outbound` instead. */
    type Outbound = PaidTimeOff$Outbound;
}
export declare function paidTimeOffToJSON(paidTimeOff: PaidTimeOff): string;
export declare function paidTimeOffFromJSON(jsonString: string): SafeParseResult<PaidTimeOff, SDKValidationError>;
/** @internal */
export declare const EmployeeCompensations$inboundSchema: z.ZodType<EmployeeCompensations, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeCompensations$Outbound = {
    employee_uuid?: string | undefined;
    version?: string | undefined;
    excluded?: boolean | undefined;
    payment_method?: string | undefined;
    memo?: string | undefined;
    fixed_compensations?: Array<FixedCompensations$Outbound> | undefined;
    hourly_compensations?: Array<HourlyCompensations$Outbound> | undefined;
    paid_time_off?: Array<PaidTimeOff$Outbound> | undefined;
};
/** @internal */
export declare const EmployeeCompensations$outboundSchema: z.ZodType<EmployeeCompensations$Outbound, z.ZodTypeDef, EmployeeCompensations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeCompensations$ {
    /** @deprecated use `EmployeeCompensations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeCompensations, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeCompensations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeCompensations$Outbound, z.ZodTypeDef, EmployeeCompensations>;
    /** @deprecated use `EmployeeCompensations$Outbound` instead. */
    type Outbound = EmployeeCompensations$Outbound;
}
export declare function employeeCompensationsToJSON(employeeCompensations: EmployeeCompensations): string;
export declare function employeeCompensationsFromJSON(jsonString: string): SafeParseResult<EmployeeCompensations, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsRequestBody$Outbound = {
    employee_compensations: Array<EmployeeCompensations$Outbound>;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsRequestBody$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsRequestBody>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsRequestBody$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsRequestBodyToJSON(putV1CompaniesCompanyIdPayrollsRequestBody: PutV1CompaniesCompanyIdPayrollsRequestBody): string;
export declare function putV1CompaniesCompanyIdPayrollsRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsRequest$Outbound = {
    company_id: string;
    payroll_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyIdPayrollsRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsRequest>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsRequest$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsRequestToJSON(putV1CompaniesCompanyIdPayrollsRequest: PutV1CompaniesCompanyIdPayrollsRequest): string;
export declare function putV1CompaniesCompanyIdPayrollsRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payroll-Prepared"?: components.PayrollPrepared$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsResponse>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsResponse$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsResponseToJSON(putV1CompaniesCompanyIdPayrollsResponse: PutV1CompaniesCompanyIdPayrollsResponse): string;
export declare function putV1CompaniesCompanyIdPayrollsResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidpayrolls.d.ts.map