/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Columns = {
  BankAccountAccountNumber: "bank_account_account_number",
  BankAccountRoutingNumber: "bank_account_routing_number",
  BankAccountType: "bank_account_type",
  BankAccount: "bank_account",
  Bonus: "bonus",
  CashTips: "cash_tips",
  CheckAmount: "check_amount",
  CheckDate: "check_date",
  Commission: "commission",
  DateOfBirth: "date_of_birth",
  DoubleOvertimeEarnings: "double_overtime_earnings",
  DoubleOvertimeHours: "double_overtime_hours",
  DoubleOvertimeRate: "double_overtime_rate",
  EmployeeAdditionalTaxes: "employee_additional_taxes",
  EmployeeBenefitContributions: "employee_benefit_contributions",
  EmployeeCompensationTimePeriod: "employee_compensation_time_period",
  EmployeeCompensation: "employee_compensation",
  EmployeeDeductions: "employee_deductions",
  EmployeeDepartment: "employee_department",
  EmployeeEmail: "employee_email",
  EmployeeFederalIncomeTax: "employee_federal_income_tax",
  EmployeeFirstName: "employee_first_name",
  EmployeeLastName: "employee_last_name",
  EmployeeMiddleInitial: "employee_middle_initial",
  EmployeeMedicareAdditionalTax: "employee_medicare_additional_tax",
  EmployeeMedicareTax: "employee_medicare_tax",
  EmployeePhoneNumber: "employee_phone_number",
  EmployeeSocialSecurityTax: "employee_social_security_tax",
  EmployeeTaxes: "employee_taxes",
  EmployeeWorkEmail: "employee_work_email",
  EmployerAdditionalTaxes: "employer_additional_taxes",
  EmployerBenefitContributions: "employer_benefit_contributions",
  EmployerCost: "employer_cost",
  EmployerFutaTax: "employer_futa_tax",
  EmployerMedicareTax: "employer_medicare_tax",
  EmployerSocialSecurityTax: "employer_social_security_tax",
  EmployerSutaTax: "employer_suta_tax",
  EmployerTaxes: "employer_taxes",
  EmploymentType: "employment_type",
  Employment: "employment",
  EndDate: "end_date",
  Garnishments: "garnishments",
  GrossEarnings: "gross_earnings",
  HolidayEarnings: "holiday_earnings",
  HolidayHours: "holiday_hours",
  HomeAddressCity: "home_address_city",
  HomeAddressState: "home_address_state",
  HomeAddressStreet: "home_address_street",
  HomeAddressZip: "home_address_zip",
  HomeAddress: "home_address",
  JobTitle: "job_title",
  NetPay: "net_pay",
  OneTimeReimbursements: "one_time_reimbursements",
  OvertimeEarnings: "overtime_earnings",
  OvertimeHours: "overtime_hours",
  OvertimeRate: "overtime_rate",
  PaidTimeOffEarnings: "paid_time_off_earnings",
  PaidTimeOffHours: "paid_time_off_hours",
  PaidTimeOffRate: "paid_time_off_rate",
  PayPeriodEnd: "pay_period_end",
  PayPeriodStart: "pay_period_start",
  PaycheckTips: "paycheck_tips",
  PaymentMethod: "payment_method",
  PayrollType: "payroll_type",
  PreferredFirstName: "preferred_first_name",
  RecurringReimbursements: "recurring_reimbursements",
  RegularEarnings: "regular_earnings",
  RegularHours: "regular_hours",
  RegularRate: "regular_rate",
  Reimbursements: "reimbursements",
  RiskClassCode: "risk_class_code",
  SickRate: "sick_rate",
  SickTimeOffEarnings: "sick_time_off_earnings",
  SickTimeOffHours: "sick_time_off_hours",
  StartDate: "start_date",
  TotalEmployerBenefitContributions: "total_employer_benefit_contributions",
  TotalTimeOffEarnings: "total_time_off_earnings",
  TotalTimeOffHours: "total_time_off_hours",
  WorkAddressCity: "work_address_city",
  WorkAddressStreet: "work_address_street",
  WorkAddressZip: "work_address_zip",
} as const;
export type Columns = ClosedEnum<typeof Columns>;

export const Groupings = {
  Payroll: "payroll",
  Employee: "employee",
  WorkAddress: "work_address",
  WorkAddressState: "work_address_state",
} as const;
export type Groupings = ClosedEnum<typeof Groupings>;

/**
 * The type of file to generate
 */
export const FileType = {
  Csv: "csv",
  Json: "json",
} as const;
/**
 * The type of file to generate
 */
export type FileType = ClosedEnum<typeof FileType>;

/**
 * Payment method to filter by
 */
export const PostCompaniesCompanyUuidReportsPaymentMethod = {
  Check: "check",
  DirectDeposit: "direct_deposit",
} as const;
/**
 * Payment method to filter by
 */
export type PostCompaniesCompanyUuidReportsPaymentMethod = ClosedEnum<
  typeof PostCompaniesCompanyUuidReportsPaymentMethod
>;

/**
 * Employee employment type to filter by
 */
export const EmploymentType = {
  Exempt: "exempt",
  SalariedNonexempt: "salaried_nonexempt",
  Nonexempt: "nonexempt",
  CommissionOnlyExempt: "commission_only_exempt",
  CommissionOnlyNonexempt: "commission_only_nonexempt",
} as const;
/**
 * Employee employment type to filter by
 */
export type EmploymentType = ClosedEnum<typeof EmploymentType>;

/**
 * Employee employment status to filter by
 */
export const PostCompaniesCompanyUuidReportsEmploymentStatus = {
  ActiveFullTime: "active_full_time",
  ActivePartTime: "active_part_time",
  ActivePartTimeEligible: "active_part_time_eligible",
  ActiveVariable: "active_variable",
  ActiveSeasonal: "active_seasonal",
  Active: "active",
  Dismissed: "dismissed",
} as const;
/**
 * Employee employment status to filter by
 */
export type PostCompaniesCompanyUuidReportsEmploymentStatus = ClosedEnum<
  typeof PostCompaniesCompanyUuidReportsEmploymentStatus
>;

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
  employmentStatus?:
    | PostCompaniesCompanyUuidReportsEmploymentStatus
    | undefined;
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
export const Columns$inboundSchema: z.ZodNativeEnum<typeof Columns> = z
  .nativeEnum(Columns);

/** @internal */
export const Columns$outboundSchema: z.ZodNativeEnum<typeof Columns> =
  Columns$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Columns$ {
  /** @deprecated use `Columns$inboundSchema` instead. */
  export const inboundSchema = Columns$inboundSchema;
  /** @deprecated use `Columns$outboundSchema` instead. */
  export const outboundSchema = Columns$outboundSchema;
}

/** @internal */
export const Groupings$inboundSchema: z.ZodNativeEnum<typeof Groupings> = z
  .nativeEnum(Groupings);

/** @internal */
export const Groupings$outboundSchema: z.ZodNativeEnum<typeof Groupings> =
  Groupings$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Groupings$ {
  /** @deprecated use `Groupings$inboundSchema` instead. */
  export const inboundSchema = Groupings$inboundSchema;
  /** @deprecated use `Groupings$outboundSchema` instead. */
  export const outboundSchema = Groupings$outboundSchema;
}

/** @internal */
export const FileType$inboundSchema: z.ZodNativeEnum<typeof FileType> = z
  .nativeEnum(FileType);

/** @internal */
export const FileType$outboundSchema: z.ZodNativeEnum<typeof FileType> =
  FileType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileType$ {
  /** @deprecated use `FileType$inboundSchema` instead. */
  export const inboundSchema = FileType$inboundSchema;
  /** @deprecated use `FileType$outboundSchema` instead. */
  export const outboundSchema = FileType$outboundSchema;
}

/** @internal */
export const PostCompaniesCompanyUuidReportsPaymentMethod$inboundSchema:
  z.ZodNativeEnum<typeof PostCompaniesCompanyUuidReportsPaymentMethod> = z
    .nativeEnum(PostCompaniesCompanyUuidReportsPaymentMethod);

/** @internal */
export const PostCompaniesCompanyUuidReportsPaymentMethod$outboundSchema:
  z.ZodNativeEnum<typeof PostCompaniesCompanyUuidReportsPaymentMethod> =
    PostCompaniesCompanyUuidReportsPaymentMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidReportsPaymentMethod$ {
  /** @deprecated use `PostCompaniesCompanyUuidReportsPaymentMethod$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidReportsPaymentMethod$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidReportsPaymentMethod$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidReportsPaymentMethod$outboundSchema;
}

/** @internal */
export const EmploymentType$inboundSchema: z.ZodNativeEnum<
  typeof EmploymentType
> = z.nativeEnum(EmploymentType);

/** @internal */
export const EmploymentType$outboundSchema: z.ZodNativeEnum<
  typeof EmploymentType
> = EmploymentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentType$ {
  /** @deprecated use `EmploymentType$inboundSchema` instead. */
  export const inboundSchema = EmploymentType$inboundSchema;
  /** @deprecated use `EmploymentType$outboundSchema` instead. */
  export const outboundSchema = EmploymentType$outboundSchema;
}

/** @internal */
export const PostCompaniesCompanyUuidReportsEmploymentStatus$inboundSchema:
  z.ZodNativeEnum<typeof PostCompaniesCompanyUuidReportsEmploymentStatus> = z
    .nativeEnum(PostCompaniesCompanyUuidReportsEmploymentStatus);

/** @internal */
export const PostCompaniesCompanyUuidReportsEmploymentStatus$outboundSchema:
  z.ZodNativeEnum<typeof PostCompaniesCompanyUuidReportsEmploymentStatus> =
    PostCompaniesCompanyUuidReportsEmploymentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidReportsEmploymentStatus$ {
  /** @deprecated use `PostCompaniesCompanyUuidReportsEmploymentStatus$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidReportsEmploymentStatus$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidReportsEmploymentStatus$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidReportsEmploymentStatus$outboundSchema;
}

/** @internal */
export const PostCompaniesCompanyUuidReportsRequestBody$inboundSchema:
  z.ZodType<PostCompaniesCompanyUuidReportsRequestBody, z.ZodTypeDef, unknown> =
    z.object({
      columns: z.array(Columns$inboundSchema),
      groupings: z.array(Groupings$inboundSchema),
      custom_name: z.string().optional(),
      file_type: FileType$inboundSchema,
      with_totals: z.boolean().default(false),
      start_date: z.string().transform(v => new RFCDate(v)).optional(),
      end_date: z.string().transform(v => new RFCDate(v)).optional(),
      dismissed_start_date: z.string().transform(v => new RFCDate(v))
        .optional(),
      dismissed_end_date: z.string().transform(v => new RFCDate(v)).optional(),
      payment_method: PostCompaniesCompanyUuidReportsPaymentMethod$inboundSchema
        .optional(),
      employment_type: EmploymentType$inboundSchema.optional(),
      employment_status:
        PostCompaniesCompanyUuidReportsEmploymentStatus$inboundSchema
          .optional(),
      employee_uuids: z.array(z.string()).optional(),
      department_uuids: z.array(z.string()).optional(),
      work_address_uuids: z.array(z.string()).optional(),
    }).transform((v) => {
      return remap$(v, {
        "custom_name": "customName",
        "file_type": "fileType",
        "with_totals": "withTotals",
        "start_date": "startDate",
        "end_date": "endDate",
        "dismissed_start_date": "dismissedStartDate",
        "dismissed_end_date": "dismissedEndDate",
        "payment_method": "paymentMethod",
        "employment_type": "employmentType",
        "employment_status": "employmentStatus",
        "employee_uuids": "employeeUuids",
        "department_uuids": "departmentUuids",
        "work_address_uuids": "workAddressUuids",
      });
    });

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
export const PostCompaniesCompanyUuidReportsRequestBody$outboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidReportsRequestBody$Outbound,
    z.ZodTypeDef,
    PostCompaniesCompanyUuidReportsRequestBody
  > = z.object({
    columns: z.array(Columns$outboundSchema),
    groupings: z.array(Groupings$outboundSchema),
    customName: z.string().optional(),
    fileType: FileType$outboundSchema,
    withTotals: z.boolean().default(false),
    startDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
    endDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
    dismissedStartDate: z.instanceof(RFCDate).transform(v => v.toString())
      .optional(),
    dismissedEndDate: z.instanceof(RFCDate).transform(v => v.toString())
      .optional(),
    paymentMethod: PostCompaniesCompanyUuidReportsPaymentMethod$outboundSchema
      .optional(),
    employmentType: EmploymentType$outboundSchema.optional(),
    employmentStatus:
      PostCompaniesCompanyUuidReportsEmploymentStatus$outboundSchema.optional(),
    employeeUuids: z.array(z.string()).optional(),
    departmentUuids: z.array(z.string()).optional(),
    workAddressUuids: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      customName: "custom_name",
      fileType: "file_type",
      withTotals: "with_totals",
      startDate: "start_date",
      endDate: "end_date",
      dismissedStartDate: "dismissed_start_date",
      dismissedEndDate: "dismissed_end_date",
      paymentMethod: "payment_method",
      employmentType: "employment_type",
      employmentStatus: "employment_status",
      employeeUuids: "employee_uuids",
      departmentUuids: "department_uuids",
      workAddressUuids: "work_address_uuids",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidReportsRequestBody$ {
  /** @deprecated use `PostCompaniesCompanyUuidReportsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidReportsRequestBody$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidReportsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidReportsRequestBody$outboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidReportsRequestBody$Outbound` instead. */
  export type Outbound = PostCompaniesCompanyUuidReportsRequestBody$Outbound;
}

export function postCompaniesCompanyUuidReportsRequestBodyToJSON(
  postCompaniesCompanyUuidReportsRequestBody:
    PostCompaniesCompanyUuidReportsRequestBody,
): string {
  return JSON.stringify(
    PostCompaniesCompanyUuidReportsRequestBody$outboundSchema.parse(
      postCompaniesCompanyUuidReportsRequestBody,
    ),
  );
}

export function postCompaniesCompanyUuidReportsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostCompaniesCompanyUuidReportsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostCompaniesCompanyUuidReportsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostCompaniesCompanyUuidReportsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostCompaniesCompanyUuidReportsRequest$inboundSchema: z.ZodType<
  PostCompaniesCompanyUuidReportsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() =>
    PostCompaniesCompanyUuidReportsRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostCompaniesCompanyUuidReportsRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostCompaniesCompanyUuidReportsRequestBody$Outbound;
};

/** @internal */
export const PostCompaniesCompanyUuidReportsRequest$outboundSchema: z.ZodType<
  PostCompaniesCompanyUuidReportsRequest$Outbound,
  z.ZodTypeDef,
  PostCompaniesCompanyUuidReportsRequest
> = z.object({
  companyUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() =>
    PostCompaniesCompanyUuidReportsRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    companyUuid: "company_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidReportsRequest$ {
  /** @deprecated use `PostCompaniesCompanyUuidReportsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidReportsRequest$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidReportsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidReportsRequest$outboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidReportsRequest$Outbound` instead. */
  export type Outbound = PostCompaniesCompanyUuidReportsRequest$Outbound;
}

export function postCompaniesCompanyUuidReportsRequestToJSON(
  postCompaniesCompanyUuidReportsRequest:
    PostCompaniesCompanyUuidReportsRequest,
): string {
  return JSON.stringify(
    PostCompaniesCompanyUuidReportsRequest$outboundSchema.parse(
      postCompaniesCompanyUuidReportsRequest,
    ),
  );
}

export function postCompaniesCompanyUuidReportsRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostCompaniesCompanyUuidReportsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostCompaniesCompanyUuidReportsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostCompaniesCompanyUuidReportsRequest' from JSON`,
  );
}

/** @internal */
export const PostCompaniesCompanyUuidReportsResponse$inboundSchema: z.ZodType<
  PostCompaniesCompanyUuidReportsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "Create-Report": components.CreateReport$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Create-Report": "createReport",
  });
});

/** @internal */
export type PostCompaniesCompanyUuidReportsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Create-Report"?: components.CreateReport$Outbound | undefined;
};

/** @internal */
export const PostCompaniesCompanyUuidReportsResponse$outboundSchema: z.ZodType<
  PostCompaniesCompanyUuidReportsResponse$Outbound,
  z.ZodTypeDef,
  PostCompaniesCompanyUuidReportsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  createReport: components.CreateReport$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    createReport: "Create-Report",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidReportsResponse$ {
  /** @deprecated use `PostCompaniesCompanyUuidReportsResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidReportsResponse$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidReportsResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidReportsResponse$outboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidReportsResponse$Outbound` instead. */
  export type Outbound = PostCompaniesCompanyUuidReportsResponse$Outbound;
}

export function postCompaniesCompanyUuidReportsResponseToJSON(
  postCompaniesCompanyUuidReportsResponse:
    PostCompaniesCompanyUuidReportsResponse,
): string {
  return JSON.stringify(
    PostCompaniesCompanyUuidReportsResponse$outboundSchema.parse(
      postCompaniesCompanyUuidReportsResponse,
    ),
  );
}

export function postCompaniesCompanyUuidReportsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostCompaniesCompanyUuidReportsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostCompaniesCompanyUuidReportsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostCompaniesCompanyUuidReportsResponse' from JSON`,
  );
}
