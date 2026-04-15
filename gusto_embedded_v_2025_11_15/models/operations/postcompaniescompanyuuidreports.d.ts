import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const Columns: {
    readonly BankAccountAccountNumber: "bank_account_account_number";
    readonly BankAccountRoutingNumber: "bank_account_routing_number";
    readonly BankAccountType: "bank_account_type";
    readonly BankAccount: "bank_account";
    readonly Bonus: "bonus";
    readonly CashTips: "cash_tips";
    readonly CheckAmount: "check_amount";
    readonly CheckDate: "check_date";
    readonly Commission: "commission";
    readonly DateOfBirth: "date_of_birth";
    readonly DoubleOvertimeEarnings: "double_overtime_earnings";
    readonly DoubleOvertimeHours: "double_overtime_hours";
    readonly DoubleOvertimeRate: "double_overtime_rate";
    readonly EmployeeAdditionalTaxes: "employee_additional_taxes";
    readonly EmployeeBenefitContributions: "employee_benefit_contributions";
    readonly EmployeeCompensationTimePeriod: "employee_compensation_time_period";
    readonly EmployeeCompensation: "employee_compensation";
    readonly EmployeeDeductions: "employee_deductions";
    readonly EmployeeDepartment: "employee_department";
    readonly EmployeeEmail: "employee_email";
    readonly EmployeeFederalIncomeTax: "employee_federal_income_tax";
    readonly EmployeeFirstName: "employee_first_name";
    readonly EmployeeLastName: "employee_last_name";
    readonly EmployeeMiddleInitial: "employee_middle_initial";
    readonly EmployeeMedicareAdditionalTax: "employee_medicare_additional_tax";
    readonly EmployeeMedicareTax: "employee_medicare_tax";
    readonly EmployeePhoneNumber: "employee_phone_number";
    readonly EmployeeSocialSecurityTax: "employee_social_security_tax";
    readonly EmployeeTaxes: "employee_taxes";
    readonly EmployeeWorkEmail: "employee_work_email";
    readonly EmployerAdditionalTaxes: "employer_additional_taxes";
    readonly EmployerBenefitContributions: "employer_benefit_contributions";
    readonly EmployerCost: "employer_cost";
    readonly EmployerFutaTax: "employer_futa_tax";
    readonly EmployerMedicareTax: "employer_medicare_tax";
    readonly EmployerSocialSecurityTax: "employer_social_security_tax";
    readonly EmployerSutaTax: "employer_suta_tax";
    readonly EmployerTaxes: "employer_taxes";
    readonly EmploymentType: "employment_type";
    readonly Employment: "employment";
    readonly EndDate: "end_date";
    readonly Garnishments: "garnishments";
    readonly GrossEarnings: "gross_earnings";
    readonly HolidayEarnings: "holiday_earnings";
    readonly HolidayHours: "holiday_hours";
    readonly HomeAddressCity: "home_address_city";
    readonly HomeAddressState: "home_address_state";
    readonly HomeAddressStreet: "home_address_street";
    readonly HomeAddressZip: "home_address_zip";
    readonly HomeAddress: "home_address";
    readonly JobTitle: "job_title";
    readonly NetPay: "net_pay";
    readonly OneTimeReimbursements: "one_time_reimbursements";
    readonly OvertimeEarnings: "overtime_earnings";
    readonly OvertimeHours: "overtime_hours";
    readonly OvertimeRate: "overtime_rate";
    readonly PaidTimeOffEarnings: "paid_time_off_earnings";
    readonly PaidTimeOffHours: "paid_time_off_hours";
    readonly PaidTimeOffRate: "paid_time_off_rate";
    readonly PayPeriodEnd: "pay_period_end";
    readonly PayPeriodStart: "pay_period_start";
    readonly PaycheckTips: "paycheck_tips";
    readonly PaymentMethod: "payment_method";
    readonly PayrollType: "payroll_type";
    readonly PreferredFirstName: "preferred_first_name";
    readonly RecurringReimbursements: "recurring_reimbursements";
    readonly RegularEarnings: "regular_earnings";
    readonly RegularHours: "regular_hours";
    readonly RegularRate: "regular_rate";
    readonly Reimbursements: "reimbursements";
    readonly RiskClassCode: "risk_class_code";
    readonly SickRate: "sick_rate";
    readonly SickTimeOffEarnings: "sick_time_off_earnings";
    readonly SickTimeOffHours: "sick_time_off_hours";
    readonly StartDate: "start_date";
    readonly TotalEmployerBenefitContributions: "total_employer_benefit_contributions";
    readonly TotalTimeOffEarnings: "total_time_off_earnings";
    readonly TotalTimeOffHours: "total_time_off_hours";
    readonly WorkAddressCity: "work_address_city";
    readonly WorkAddressStreet: "work_address_street";
    readonly WorkAddressZip: "work_address_zip";
};
export type Columns = ClosedEnum<typeof Columns>;
export declare const Groupings: {
    readonly Payroll: "payroll";
    readonly Employee: "employee";
    readonly WorkAddress: "work_address";
    readonly WorkAddressState: "work_address_state";
};
export type Groupings = ClosedEnum<typeof Groupings>;
/**
 * The type of file to generate
 */
export declare const FileType: {
    readonly Csv: "csv";
    readonly Json: "json";
};
/**
 * The type of file to generate
 */
export type FileType = ClosedEnum<typeof FileType>;
/**
 * Payment method to filter by
 */
export declare const PostCompaniesCompanyUuidReportsPaymentMethod: {
    readonly Check: "check";
    readonly DirectDeposit: "direct_deposit";
};
/**
 * Payment method to filter by
 */
export type PostCompaniesCompanyUuidReportsPaymentMethod = ClosedEnum<typeof PostCompaniesCompanyUuidReportsPaymentMethod>;
/**
 * Employee employment type to filter by
 */
export declare const EmploymentType: {
    readonly Exempt: "exempt";
    readonly SalariedNonexempt: "salaried_nonexempt";
    readonly Nonexempt: "nonexempt";
    readonly CommissionOnlyExempt: "commission_only_exempt";
    readonly CommissionOnlyNonexempt: "commission_only_nonexempt";
};
/**
 * Employee employment type to filter by
 */
export type EmploymentType = ClosedEnum<typeof EmploymentType>;
/**
 * Employee employment status to filter by
 */
export declare const PostCompaniesCompanyUuidReportsEmploymentStatus: {
    readonly ActiveFullTime: "active_full_time";
    readonly ActivePartTime: "active_part_time";
    readonly ActivePartTimeEligible: "active_part_time_eligible";
    readonly ActiveVariable: "active_variable";
    readonly ActiveSeasonal: "active_seasonal";
    readonly Active: "active";
    readonly Dismissed: "dismissed";
};
/**
 * Employee employment status to filter by
 */
export type PostCompaniesCompanyUuidReportsEmploymentStatus = ClosedEnum<typeof PostCompaniesCompanyUuidReportsEmploymentStatus>;
export type PostCompaniesCompanyUuidReportsRequestBody = {
    /**
     * Columns to include in the report
     */
    columns: Array<Columns>;
    /**
     * How to group the report
     */
    groupings: Array<Groupings>;
    /**
     * The title of the report
     */
    customName?: string | undefined;
    /**
     * The type of file to generate
     */
    fileType: FileType;
    /**
     * Whether to include subtotals and grand totals in the report
     */
    withTotals?: boolean | undefined;
    /**
     * Start date of data to filter by
     */
    startDate?: RFCDate | undefined;
    /**
     * End date of data to filter by
     */
    endDate?: RFCDate | undefined;
    /**
     * Dismissed start date of employees to filter by
     */
    dismissedStartDate?: RFCDate | undefined;
    /**
     * Dismissed end date of employees to filter by
     */
    dismissedEndDate?: RFCDate | undefined;
    /**
     * Payment method to filter by
     */
    paymentMethod?: PostCompaniesCompanyUuidReportsPaymentMethod | undefined;
    /**
     * Employee employment type to filter by
     */
    employmentType?: EmploymentType | undefined;
    /**
     * Employee employment status to filter by
     */
    employmentStatus?: PostCompaniesCompanyUuidReportsEmploymentStatus | undefined;
    /**
     * Employees to filter by
     */
    employeeUuids?: Array<string> | undefined;
    /**
     * Departments to filter by
     */
    departmentUuids?: Array<string> | undefined;
    /**
     * Work addresses to filter by
     */
    workAddressUuids?: Array<string> | undefined;
};
export type PostCompaniesCompanyUuidReportsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostCompaniesCompanyUuidReportsRequestBody;
};
export type PostCompaniesCompanyUuidReportsResponse = {
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
    createReport?: components.CreateReport | undefined;
};
/** @internal */
export declare const Columns$inboundSchema: z.ZodNativeEnum<typeof Columns>;
/** @internal */
export declare const Columns$outboundSchema: z.ZodNativeEnum<typeof Columns>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Columns$ {
    /** @deprecated use `Columns$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly BankAccountAccountNumber: "bank_account_account_number";
        readonly BankAccountRoutingNumber: "bank_account_routing_number";
        readonly BankAccountType: "bank_account_type";
        readonly BankAccount: "bank_account";
        readonly Bonus: "bonus";
        readonly CashTips: "cash_tips";
        readonly CheckAmount: "check_amount";
        readonly CheckDate: "check_date";
        readonly Commission: "commission";
        readonly DateOfBirth: "date_of_birth";
        readonly DoubleOvertimeEarnings: "double_overtime_earnings";
        readonly DoubleOvertimeHours: "double_overtime_hours";
        readonly DoubleOvertimeRate: "double_overtime_rate";
        readonly EmployeeAdditionalTaxes: "employee_additional_taxes";
        readonly EmployeeBenefitContributions: "employee_benefit_contributions";
        readonly EmployeeCompensationTimePeriod: "employee_compensation_time_period";
        readonly EmployeeCompensation: "employee_compensation";
        readonly EmployeeDeductions: "employee_deductions";
        readonly EmployeeDepartment: "employee_department";
        readonly EmployeeEmail: "employee_email";
        readonly EmployeeFederalIncomeTax: "employee_federal_income_tax";
        readonly EmployeeFirstName: "employee_first_name";
        readonly EmployeeLastName: "employee_last_name";
        readonly EmployeeMiddleInitial: "employee_middle_initial";
        readonly EmployeeMedicareAdditionalTax: "employee_medicare_additional_tax";
        readonly EmployeeMedicareTax: "employee_medicare_tax";
        readonly EmployeePhoneNumber: "employee_phone_number";
        readonly EmployeeSocialSecurityTax: "employee_social_security_tax";
        readonly EmployeeTaxes: "employee_taxes";
        readonly EmployeeWorkEmail: "employee_work_email";
        readonly EmployerAdditionalTaxes: "employer_additional_taxes";
        readonly EmployerBenefitContributions: "employer_benefit_contributions";
        readonly EmployerCost: "employer_cost";
        readonly EmployerFutaTax: "employer_futa_tax";
        readonly EmployerMedicareTax: "employer_medicare_tax";
        readonly EmployerSocialSecurityTax: "employer_social_security_tax";
        readonly EmployerSutaTax: "employer_suta_tax";
        readonly EmployerTaxes: "employer_taxes";
        readonly EmploymentType: "employment_type";
        readonly Employment: "employment";
        readonly EndDate: "end_date";
        readonly Garnishments: "garnishments";
        readonly GrossEarnings: "gross_earnings";
        readonly HolidayEarnings: "holiday_earnings";
        readonly HolidayHours: "holiday_hours";
        readonly HomeAddressCity: "home_address_city";
        readonly HomeAddressState: "home_address_state";
        readonly HomeAddressStreet: "home_address_street";
        readonly HomeAddressZip: "home_address_zip";
        readonly HomeAddress: "home_address";
        readonly JobTitle: "job_title";
        readonly NetPay: "net_pay";
        readonly OneTimeReimbursements: "one_time_reimbursements";
        readonly OvertimeEarnings: "overtime_earnings";
        readonly OvertimeHours: "overtime_hours";
        readonly OvertimeRate: "overtime_rate";
        readonly PaidTimeOffEarnings: "paid_time_off_earnings";
        readonly PaidTimeOffHours: "paid_time_off_hours";
        readonly PaidTimeOffRate: "paid_time_off_rate";
        readonly PayPeriodEnd: "pay_period_end";
        readonly PayPeriodStart: "pay_period_start";
        readonly PaycheckTips: "paycheck_tips";
        readonly PaymentMethod: "payment_method";
        readonly PayrollType: "payroll_type";
        readonly PreferredFirstName: "preferred_first_name";
        readonly RecurringReimbursements: "recurring_reimbursements";
        readonly RegularEarnings: "regular_earnings";
        readonly RegularHours: "regular_hours";
        readonly RegularRate: "regular_rate";
        readonly Reimbursements: "reimbursements";
        readonly RiskClassCode: "risk_class_code";
        readonly SickRate: "sick_rate";
        readonly SickTimeOffEarnings: "sick_time_off_earnings";
        readonly SickTimeOffHours: "sick_time_off_hours";
        readonly StartDate: "start_date";
        readonly TotalEmployerBenefitContributions: "total_employer_benefit_contributions";
        readonly TotalTimeOffEarnings: "total_time_off_earnings";
        readonly TotalTimeOffHours: "total_time_off_hours";
        readonly WorkAddressCity: "work_address_city";
        readonly WorkAddressStreet: "work_address_street";
        readonly WorkAddressZip: "work_address_zip";
    }>;
    /** @deprecated use `Columns$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly BankAccountAccountNumber: "bank_account_account_number";
        readonly BankAccountRoutingNumber: "bank_account_routing_number";
        readonly BankAccountType: "bank_account_type";
        readonly BankAccount: "bank_account";
        readonly Bonus: "bonus";
        readonly CashTips: "cash_tips";
        readonly CheckAmount: "check_amount";
        readonly CheckDate: "check_date";
        readonly Commission: "commission";
        readonly DateOfBirth: "date_of_birth";
        readonly DoubleOvertimeEarnings: "double_overtime_earnings";
        readonly DoubleOvertimeHours: "double_overtime_hours";
        readonly DoubleOvertimeRate: "double_overtime_rate";
        readonly EmployeeAdditionalTaxes: "employee_additional_taxes";
        readonly EmployeeBenefitContributions: "employee_benefit_contributions";
        readonly EmployeeCompensationTimePeriod: "employee_compensation_time_period";
        readonly EmployeeCompensation: "employee_compensation";
        readonly EmployeeDeductions: "employee_deductions";
        readonly EmployeeDepartment: "employee_department";
        readonly EmployeeEmail: "employee_email";
        readonly EmployeeFederalIncomeTax: "employee_federal_income_tax";
        readonly EmployeeFirstName: "employee_first_name";
        readonly EmployeeLastName: "employee_last_name";
        readonly EmployeeMiddleInitial: "employee_middle_initial";
        readonly EmployeeMedicareAdditionalTax: "employee_medicare_additional_tax";
        readonly EmployeeMedicareTax: "employee_medicare_tax";
        readonly EmployeePhoneNumber: "employee_phone_number";
        readonly EmployeeSocialSecurityTax: "employee_social_security_tax";
        readonly EmployeeTaxes: "employee_taxes";
        readonly EmployeeWorkEmail: "employee_work_email";
        readonly EmployerAdditionalTaxes: "employer_additional_taxes";
        readonly EmployerBenefitContributions: "employer_benefit_contributions";
        readonly EmployerCost: "employer_cost";
        readonly EmployerFutaTax: "employer_futa_tax";
        readonly EmployerMedicareTax: "employer_medicare_tax";
        readonly EmployerSocialSecurityTax: "employer_social_security_tax";
        readonly EmployerSutaTax: "employer_suta_tax";
        readonly EmployerTaxes: "employer_taxes";
        readonly EmploymentType: "employment_type";
        readonly Employment: "employment";
        readonly EndDate: "end_date";
        readonly Garnishments: "garnishments";
        readonly GrossEarnings: "gross_earnings";
        readonly HolidayEarnings: "holiday_earnings";
        readonly HolidayHours: "holiday_hours";
        readonly HomeAddressCity: "home_address_city";
        readonly HomeAddressState: "home_address_state";
        readonly HomeAddressStreet: "home_address_street";
        readonly HomeAddressZip: "home_address_zip";
        readonly HomeAddress: "home_address";
        readonly JobTitle: "job_title";
        readonly NetPay: "net_pay";
        readonly OneTimeReimbursements: "one_time_reimbursements";
        readonly OvertimeEarnings: "overtime_earnings";
        readonly OvertimeHours: "overtime_hours";
        readonly OvertimeRate: "overtime_rate";
        readonly PaidTimeOffEarnings: "paid_time_off_earnings";
        readonly PaidTimeOffHours: "paid_time_off_hours";
        readonly PaidTimeOffRate: "paid_time_off_rate";
        readonly PayPeriodEnd: "pay_period_end";
        readonly PayPeriodStart: "pay_period_start";
        readonly PaycheckTips: "paycheck_tips";
        readonly PaymentMethod: "payment_method";
        readonly PayrollType: "payroll_type";
        readonly PreferredFirstName: "preferred_first_name";
        readonly RecurringReimbursements: "recurring_reimbursements";
        readonly RegularEarnings: "regular_earnings";
        readonly RegularHours: "regular_hours";
        readonly RegularRate: "regular_rate";
        readonly Reimbursements: "reimbursements";
        readonly RiskClassCode: "risk_class_code";
        readonly SickRate: "sick_rate";
        readonly SickTimeOffEarnings: "sick_time_off_earnings";
        readonly SickTimeOffHours: "sick_time_off_hours";
        readonly StartDate: "start_date";
        readonly TotalEmployerBenefitContributions: "total_employer_benefit_contributions";
        readonly TotalTimeOffEarnings: "total_time_off_earnings";
        readonly TotalTimeOffHours: "total_time_off_hours";
        readonly WorkAddressCity: "work_address_city";
        readonly WorkAddressStreet: "work_address_street";
        readonly WorkAddressZip: "work_address_zip";
    }>;
}
/** @internal */
export declare const Groupings$inboundSchema: z.ZodNativeEnum<typeof Groupings>;
/** @internal */
export declare const Groupings$outboundSchema: z.ZodNativeEnum<typeof Groupings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Groupings$ {
    /** @deprecated use `Groupings$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Payroll: "payroll";
        readonly Employee: "employee";
        readonly WorkAddress: "work_address";
        readonly WorkAddressState: "work_address_state";
    }>;
    /** @deprecated use `Groupings$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Payroll: "payroll";
        readonly Employee: "employee";
        readonly WorkAddress: "work_address";
        readonly WorkAddressState: "work_address_state";
    }>;
}
/** @internal */
export declare const FileType$inboundSchema: z.ZodNativeEnum<typeof FileType>;
/** @internal */
export declare const FileType$outboundSchema: z.ZodNativeEnum<typeof FileType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FileType$ {
    /** @deprecated use `FileType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Csv: "csv";
        readonly Json: "json";
    }>;
    /** @deprecated use `FileType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Csv: "csv";
        readonly Json: "json";
    }>;
}
/** @internal */
export declare const PostCompaniesCompanyUuidReportsPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PostCompaniesCompanyUuidReportsPaymentMethod>;
/** @internal */
export declare const PostCompaniesCompanyUuidReportsPaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PostCompaniesCompanyUuidReportsPaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidReportsPaymentMethod$ {
    /** @deprecated use `PostCompaniesCompanyUuidReportsPaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Check: "check";
        readonly DirectDeposit: "direct_deposit";
    }>;
    /** @deprecated use `PostCompaniesCompanyUuidReportsPaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Check: "check";
        readonly DirectDeposit: "direct_deposit";
    }>;
}
/** @internal */
export declare const EmploymentType$inboundSchema: z.ZodNativeEnum<typeof EmploymentType>;
/** @internal */
export declare const EmploymentType$outboundSchema: z.ZodNativeEnum<typeof EmploymentType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmploymentType$ {
    /** @deprecated use `EmploymentType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Exempt: "exempt";
        readonly SalariedNonexempt: "salaried_nonexempt";
        readonly Nonexempt: "nonexempt";
        readonly CommissionOnlyExempt: "commission_only_exempt";
        readonly CommissionOnlyNonexempt: "commission_only_nonexempt";
    }>;
    /** @deprecated use `EmploymentType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Exempt: "exempt";
        readonly SalariedNonexempt: "salaried_nonexempt";
        readonly Nonexempt: "nonexempt";
        readonly CommissionOnlyExempt: "commission_only_exempt";
        readonly CommissionOnlyNonexempt: "commission_only_nonexempt";
    }>;
}
/** @internal */
export declare const PostCompaniesCompanyUuidReportsEmploymentStatus$inboundSchema: z.ZodNativeEnum<typeof PostCompaniesCompanyUuidReportsEmploymentStatus>;
/** @internal */
export declare const PostCompaniesCompanyUuidReportsEmploymentStatus$outboundSchema: z.ZodNativeEnum<typeof PostCompaniesCompanyUuidReportsEmploymentStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidReportsEmploymentStatus$ {
    /** @deprecated use `PostCompaniesCompanyUuidReportsEmploymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly ActiveFullTime: "active_full_time";
        readonly ActivePartTime: "active_part_time";
        readonly ActivePartTimeEligible: "active_part_time_eligible";
        readonly ActiveVariable: "active_variable";
        readonly ActiveSeasonal: "active_seasonal";
        readonly Active: "active";
        readonly Dismissed: "dismissed";
    }>;
    /** @deprecated use `PostCompaniesCompanyUuidReportsEmploymentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly ActiveFullTime: "active_full_time";
        readonly ActivePartTime: "active_part_time";
        readonly ActivePartTimeEligible: "active_part_time_eligible";
        readonly ActiveVariable: "active_variable";
        readonly ActiveSeasonal: "active_seasonal";
        readonly Active: "active";
        readonly Dismissed: "dismissed";
    }>;
}
/** @internal */
export declare const PostCompaniesCompanyUuidReportsRequestBody$inboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidReportsRequestBody$Outbound = {
    columns: Array<string>;
    groupings: Array<string>;
    custom_name?: string | undefined;
    file_type: string;
    with_totals: boolean;
    start_date?: string | undefined;
    end_date?: string | undefined;
    dismissed_start_date?: string | undefined;
    dismissed_end_date?: string | undefined;
    payment_method?: string | undefined;
    employment_type?: string | undefined;
    employment_status?: string | undefined;
    employee_uuids?: Array<string> | undefined;
    department_uuids?: Array<string> | undefined;
    work_address_uuids?: Array<string> | undefined;
};
/** @internal */
export declare const PostCompaniesCompanyUuidReportsRequestBody$outboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsRequestBody$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidReportsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidReportsRequestBody$ {
    /** @deprecated use `PostCompaniesCompanyUuidReportsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidReportsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsRequestBody$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidReportsRequestBody>;
    /** @deprecated use `PostCompaniesCompanyUuidReportsRequestBody$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidReportsRequestBody$Outbound;
}
export declare function postCompaniesCompanyUuidReportsRequestBodyToJSON(postCompaniesCompanyUuidReportsRequestBody: PostCompaniesCompanyUuidReportsRequestBody): string;
export declare function postCompaniesCompanyUuidReportsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidReportsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostCompaniesCompanyUuidReportsRequest$inboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidReportsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostCompaniesCompanyUuidReportsRequestBody$Outbound;
};
/** @internal */
export declare const PostCompaniesCompanyUuidReportsRequest$outboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsRequest$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidReportsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidReportsRequest$ {
    /** @deprecated use `PostCompaniesCompanyUuidReportsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidReportsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsRequest$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidReportsRequest>;
    /** @deprecated use `PostCompaniesCompanyUuidReportsRequest$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidReportsRequest$Outbound;
}
export declare function postCompaniesCompanyUuidReportsRequestToJSON(postCompaniesCompanyUuidReportsRequest: PostCompaniesCompanyUuidReportsRequest): string;
export declare function postCompaniesCompanyUuidReportsRequestFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidReportsRequest, SDKValidationError>;
/** @internal */
export declare const PostCompaniesCompanyUuidReportsResponse$inboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidReportsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Create-Report"?: components.CreateReport$Outbound | undefined;
};
/** @internal */
export declare const PostCompaniesCompanyUuidReportsResponse$outboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsResponse$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidReportsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidReportsResponse$ {
    /** @deprecated use `PostCompaniesCompanyUuidReportsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidReportsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidReportsResponse$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidReportsResponse>;
    /** @deprecated use `PostCompaniesCompanyUuidReportsResponse$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidReportsResponse$Outbound;
}
export declare function postCompaniesCompanyUuidReportsResponseToJSON(postCompaniesCompanyUuidReportsResponse: PostCompaniesCompanyUuidReportsResponse): string;
export declare function postCompaniesCompanyUuidReportsResponseFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidReportsResponse, SDKValidationError>;
//# sourceMappingURL=postcompaniescompanyuuidreports.d.ts.map