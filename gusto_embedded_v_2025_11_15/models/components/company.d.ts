import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CompanyAddress, CompanyAddress$Outbound } from "./companyaddress.js";
/**
 * The tax payer type of the company.
 */
export declare const EntityType: {
    readonly CCorporation: "C-Corporation";
    readonly SCorporation: "S-Corporation";
    readonly SoleProprietor: "Sole proprietor";
    readonly Llc: "LLC";
    readonly Llp: "LLP";
    readonly LimitedPartnership: "Limited partnership";
    readonly CoOwnership: "Co-ownership";
    readonly Association: "Association";
    readonly Trusteeship: "Trusteeship";
    readonly GeneralPartnership: "General partnership";
    readonly JointVenture: "Joint venture";
    readonly NonProfit: "Non-Profit";
};
/**
 * The tax payer type of the company.
 */
export type EntityType = ClosedEnum<typeof EntityType>;
/**
 * The Gusto product tier of the company (not applicable to Embedded partner managed companies).
 */
export declare const Tier: {
    readonly Simple: "simple";
    readonly Plus: "plus";
    readonly Premium: "premium";
    readonly Core: "core";
    readonly Complete: "complete";
    readonly Concierge: "concierge";
    readonly ContractorOnly: "contractor_only";
    readonly Basic: "basic";
};
/**
 * The Gusto product tier of the company (not applicable to Embedded partner managed companies).
 */
export type Tier = ClosedEnum<typeof Tier>;
/**
 * The status of the company in Gusto. "Approved" companies are approved to run payroll from a risk and compliance perspective. However, an approved company may still need to resolve other [payroll blockers](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers) to be able to run payroll. "Not Approved" companies may not yet run payroll with Gusto and may need to complete onboarding or contact support. "Suspended" companies may not run payroll with Gusto. In order to unsuspend their account, the company must contact support.
 */
export declare const CompanyStatus: {
    readonly Approved: "Approved";
    readonly NotApproved: "Not Approved";
    readonly Suspended: "Suspended";
};
/**
 * The status of the company in Gusto. "Approved" companies are approved to run payroll from a risk and compliance perspective. However, an approved company may still need to resolve other [payroll blockers](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers) to be able to run payroll. "Not Approved" companies may not yet run payroll with Gusto and may need to complete onboarding or contact support. "Suspended" companies may not run payroll with Gusto. In order to unsuspend their account, the company must contact support.
 */
export type CompanyStatus = ClosedEnum<typeof CompanyStatus>;
/**
 * The pay schedule assignment type.
 */
export declare const PayScheduleType: {
    readonly Single: "single";
    readonly HourlySalaried: "hourly_salaried";
    readonly ByEmployee: "by_employee";
    readonly ByDepartment: "by_department";
};
/**
 * The pay schedule assignment type.
 */
export type PayScheduleType = ClosedEnum<typeof PayScheduleType>;
/**
 * Company's default funding type
 */
export declare const FundingType: {
    readonly Ach: "ach";
    readonly ReverseWire: "reverse_wire";
    readonly WireIn: "wire_in";
    readonly Brex: "brex";
};
/**
 * Company's default funding type
 */
export type FundingType = ClosedEnum<typeof FundingType>;
export type Hourly = {
    /**
     * The name of the hourly compensation rate.
     */
    name?: string | undefined;
    /**
     * The amount multiplied by the base rate of a job to calculate compensation.
     */
    multiple?: number | undefined;
};
export type Fixed = {
    /**
     * The name of the fixed compensation.
     */
    name?: string | undefined;
};
export type CompanyPaidTimeOff = {
    /**
     * The name of the paid time off type.
     */
    name?: string | undefined;
};
/**
 * The available company-wide compensation rates for the company.
 */
export type Compensations = {
    /**
     * The available hourly compensation rates for the company.
     */
    hourly?: Array<Hourly> | undefined;
    /**
     * The available fixed compensation rates for the company.
     */
    fixed?: Array<Fixed> | undefined;
    /**
     * The available types of paid time off for the company.
     */
    paidTimeOff?: Array<CompanyPaidTimeOff> | undefined;
};
/**
 * The company's primary signatory's home address.
 */
export type CompanyHomeAddress = {
    street1?: string | undefined;
    street2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
};
/**
 * The primary signatory of the company.
 */
export type PrimarySignatory = {
    /**
     * The UUID of the company's primary signatory.
     */
    uuid?: string | undefined;
    /**
     * The company's primary signatory's first name.
     */
    firstName?: string | undefined;
    /**
     * The company's primary signatory's middle initial.
     */
    middleInitial?: string | undefined;
    /**
     * The company's primary signatory's last name.
     */
    lastName?: string | undefined;
    /**
     * The company's primary signatory's phone number.
     */
    phone?: string | undefined;
    /**
     * The company's primary signatory's email address.
     */
    email?: string | undefined;
    /**
     * The company's primary signatory's home address.
     */
    homeAddress?: CompanyHomeAddress | undefined;
};
/**
 * The primary payroll admin of the company.
 */
export type PrimaryPayrollAdmin = {
    /**
     * The company's primary payroll admin's first name.
     */
    firstName?: string | undefined;
    /**
     * The company's primary payroll admin's last name.
     */
    lastName?: string | undefined;
    /**
     * The company's primary payroll admin's phone number.
     */
    phone?: string | null | undefined;
    /**
     * The company's primary payroll admin's email address.
     */
    email?: string | undefined;
};
/**
 * The representation of a company in Gusto.
 */
export type Company = {
    /**
     * The Federal Employer Identification Number of the company.
     */
    ein?: string | undefined;
    /**
     * The tax payer type of the company.
     */
    entityType?: EntityType | null | undefined;
    /**
     * Whether the company only supports contractors.
     */
    contractorOnly?: boolean | undefined;
    /**
     * The Gusto product tier of the company (not applicable to Embedded partner managed companies).
     */
    tier?: Tier | null | undefined;
    /**
     * Whether or not the company is suspended in Gusto. Suspended companies may not run payroll.
     */
    isSuspended?: boolean | undefined;
    /**
     * The status of the company in Gusto. "Approved" companies are approved to run payroll from a risk and compliance perspective. However, an approved company may still need to resolve other [payroll blockers](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers) to be able to run payroll. "Not Approved" companies may not yet run payroll with Gusto and may need to complete onboarding or contact support. "Suspended" companies may not run payroll with Gusto. In order to unsuspend their account, the company must contact support.
     */
    companyStatus?: CompanyStatus | undefined;
    /**
     * A unique identifier of the company in Gusto.
     */
    uuid: string;
    /**
     * The name of the company.
     */
    name?: string | undefined;
    /**
     * The slug of the name of the company.
     */
    slug?: string | undefined;
    /**
     * The trade name of the company.
     */
    tradeName?: string | null | undefined;
    /**
     * Whether the company is fully managed by a partner via the API
     */
    isPartnerManaged?: boolean | undefined;
    /**
     * The pay schedule assignment type.
     */
    payScheduleType?: PayScheduleType | null | undefined;
    /**
     * Company's first invoiceable event date
     */
    joinDate?: string | null | undefined;
    /**
     * Company's default funding type
     */
    fundingType?: FundingType | null | undefined;
    /**
     * The locations of the company.
     */
    locations?: Array<CompanyAddress> | undefined;
    /**
     * The available company-wide compensation rates for the company.
     */
    compensations?: Compensations | undefined;
    /**
     * The primary signatory of the company.
     */
    primarySignatory?: PrimarySignatory | null | undefined;
    /**
     * The primary payroll admin of the company.
     */
    primaryPayrollAdmin?: PrimaryPayrollAdmin | undefined;
};
/** @internal */
export declare const EntityType$inboundSchema: z.ZodNativeEnum<typeof EntityType>;
/** @internal */
export declare const EntityType$outboundSchema: z.ZodNativeEnum<typeof EntityType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityType$ {
    /** @deprecated use `EntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CCorporation: "C-Corporation";
        readonly SCorporation: "S-Corporation";
        readonly SoleProprietor: "Sole proprietor";
        readonly Llc: "LLC";
        readonly Llp: "LLP";
        readonly LimitedPartnership: "Limited partnership";
        readonly CoOwnership: "Co-ownership";
        readonly Association: "Association";
        readonly Trusteeship: "Trusteeship";
        readonly GeneralPartnership: "General partnership";
        readonly JointVenture: "Joint venture";
        readonly NonProfit: "Non-Profit";
    }>;
    /** @deprecated use `EntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CCorporation: "C-Corporation";
        readonly SCorporation: "S-Corporation";
        readonly SoleProprietor: "Sole proprietor";
        readonly Llc: "LLC";
        readonly Llp: "LLP";
        readonly LimitedPartnership: "Limited partnership";
        readonly CoOwnership: "Co-ownership";
        readonly Association: "Association";
        readonly Trusteeship: "Trusteeship";
        readonly GeneralPartnership: "General partnership";
        readonly JointVenture: "Joint venture";
        readonly NonProfit: "Non-Profit";
    }>;
}
/** @internal */
export declare const Tier$inboundSchema: z.ZodNativeEnum<typeof Tier>;
/** @internal */
export declare const Tier$outboundSchema: z.ZodNativeEnum<typeof Tier>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Tier$ {
    /** @deprecated use `Tier$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Simple: "simple";
        readonly Plus: "plus";
        readonly Premium: "premium";
        readonly Core: "core";
        readonly Complete: "complete";
        readonly Concierge: "concierge";
        readonly ContractorOnly: "contractor_only";
        readonly Basic: "basic";
    }>;
    /** @deprecated use `Tier$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Simple: "simple";
        readonly Plus: "plus";
        readonly Premium: "premium";
        readonly Core: "core";
        readonly Complete: "complete";
        readonly Concierge: "concierge";
        readonly ContractorOnly: "contractor_only";
        readonly Basic: "basic";
    }>;
}
/** @internal */
export declare const CompanyStatus$inboundSchema: z.ZodNativeEnum<typeof CompanyStatus>;
/** @internal */
export declare const CompanyStatus$outboundSchema: z.ZodNativeEnum<typeof CompanyStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyStatus$ {
    /** @deprecated use `CompanyStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Approved: "Approved";
        readonly NotApproved: "Not Approved";
        readonly Suspended: "Suspended";
    }>;
    /** @deprecated use `CompanyStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Approved: "Approved";
        readonly NotApproved: "Not Approved";
        readonly Suspended: "Suspended";
    }>;
}
/** @internal */
export declare const PayScheduleType$inboundSchema: z.ZodNativeEnum<typeof PayScheduleType>;
/** @internal */
export declare const PayScheduleType$outboundSchema: z.ZodNativeEnum<typeof PayScheduleType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleType$ {
    /** @deprecated use `PayScheduleType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Single: "single";
        readonly HourlySalaried: "hourly_salaried";
        readonly ByEmployee: "by_employee";
        readonly ByDepartment: "by_department";
    }>;
    /** @deprecated use `PayScheduleType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Single: "single";
        readonly HourlySalaried: "hourly_salaried";
        readonly ByEmployee: "by_employee";
        readonly ByDepartment: "by_department";
    }>;
}
/** @internal */
export declare const FundingType$inboundSchema: z.ZodNativeEnum<typeof FundingType>;
/** @internal */
export declare const FundingType$outboundSchema: z.ZodNativeEnum<typeof FundingType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FundingType$ {
    /** @deprecated use `FundingType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Ach: "ach";
        readonly ReverseWire: "reverse_wire";
        readonly WireIn: "wire_in";
        readonly Brex: "brex";
    }>;
    /** @deprecated use `FundingType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Ach: "ach";
        readonly ReverseWire: "reverse_wire";
        readonly WireIn: "wire_in";
        readonly Brex: "brex";
    }>;
}
/** @internal */
export declare const Hourly$inboundSchema: z.ZodType<Hourly, z.ZodTypeDef, unknown>;
/** @internal */
export type Hourly$Outbound = {
    name?: string | undefined;
    multiple?: number | undefined;
};
/** @internal */
export declare const Hourly$outboundSchema: z.ZodType<Hourly$Outbound, z.ZodTypeDef, Hourly>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Hourly$ {
    /** @deprecated use `Hourly$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Hourly, z.ZodTypeDef, unknown>;
    /** @deprecated use `Hourly$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Hourly$Outbound, z.ZodTypeDef, Hourly>;
    /** @deprecated use `Hourly$Outbound` instead. */
    type Outbound = Hourly$Outbound;
}
export declare function hourlyToJSON(hourly: Hourly): string;
export declare function hourlyFromJSON(jsonString: string): SafeParseResult<Hourly, SDKValidationError>;
/** @internal */
export declare const Fixed$inboundSchema: z.ZodType<Fixed, z.ZodTypeDef, unknown>;
/** @internal */
export type Fixed$Outbound = {
    name?: string | undefined;
};
/** @internal */
export declare const Fixed$outboundSchema: z.ZodType<Fixed$Outbound, z.ZodTypeDef, Fixed>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Fixed$ {
    /** @deprecated use `Fixed$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Fixed, z.ZodTypeDef, unknown>;
    /** @deprecated use `Fixed$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Fixed$Outbound, z.ZodTypeDef, Fixed>;
    /** @deprecated use `Fixed$Outbound` instead. */
    type Outbound = Fixed$Outbound;
}
export declare function fixedToJSON(fixed: Fixed): string;
export declare function fixedFromJSON(jsonString: string): SafeParseResult<Fixed, SDKValidationError>;
/** @internal */
export declare const CompanyPaidTimeOff$inboundSchema: z.ZodType<CompanyPaidTimeOff, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyPaidTimeOff$Outbound = {
    name?: string | undefined;
};
/** @internal */
export declare const CompanyPaidTimeOff$outboundSchema: z.ZodType<CompanyPaidTimeOff$Outbound, z.ZodTypeDef, CompanyPaidTimeOff>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyPaidTimeOff$ {
    /** @deprecated use `CompanyPaidTimeOff$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyPaidTimeOff, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyPaidTimeOff$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyPaidTimeOff$Outbound, z.ZodTypeDef, CompanyPaidTimeOff>;
    /** @deprecated use `CompanyPaidTimeOff$Outbound` instead. */
    type Outbound = CompanyPaidTimeOff$Outbound;
}
export declare function companyPaidTimeOffToJSON(companyPaidTimeOff: CompanyPaidTimeOff): string;
export declare function companyPaidTimeOffFromJSON(jsonString: string): SafeParseResult<CompanyPaidTimeOff, SDKValidationError>;
/** @internal */
export declare const Compensations$inboundSchema: z.ZodType<Compensations, z.ZodTypeDef, unknown>;
/** @internal */
export type Compensations$Outbound = {
    hourly?: Array<Hourly$Outbound> | undefined;
    fixed?: Array<Fixed$Outbound> | undefined;
    paid_time_off?: Array<CompanyPaidTimeOff$Outbound> | undefined;
};
/** @internal */
export declare const Compensations$outboundSchema: z.ZodType<Compensations$Outbound, z.ZodTypeDef, Compensations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Compensations$ {
    /** @deprecated use `Compensations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Compensations, z.ZodTypeDef, unknown>;
    /** @deprecated use `Compensations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Compensations$Outbound, z.ZodTypeDef, Compensations>;
    /** @deprecated use `Compensations$Outbound` instead. */
    type Outbound = Compensations$Outbound;
}
export declare function compensationsToJSON(compensations: Compensations): string;
export declare function compensationsFromJSON(jsonString: string): SafeParseResult<Compensations, SDKValidationError>;
/** @internal */
export declare const CompanyHomeAddress$inboundSchema: z.ZodType<CompanyHomeAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyHomeAddress$Outbound = {
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
};
/** @internal */
export declare const CompanyHomeAddress$outboundSchema: z.ZodType<CompanyHomeAddress$Outbound, z.ZodTypeDef, CompanyHomeAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyHomeAddress$ {
    /** @deprecated use `CompanyHomeAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyHomeAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyHomeAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyHomeAddress$Outbound, z.ZodTypeDef, CompanyHomeAddress>;
    /** @deprecated use `CompanyHomeAddress$Outbound` instead. */
    type Outbound = CompanyHomeAddress$Outbound;
}
export declare function companyHomeAddressToJSON(companyHomeAddress: CompanyHomeAddress): string;
export declare function companyHomeAddressFromJSON(jsonString: string): SafeParseResult<CompanyHomeAddress, SDKValidationError>;
/** @internal */
export declare const PrimarySignatory$inboundSchema: z.ZodType<PrimarySignatory, z.ZodTypeDef, unknown>;
/** @internal */
export type PrimarySignatory$Outbound = {
    uuid?: string | undefined;
    first_name?: string | undefined;
    middle_initial?: string | undefined;
    last_name?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    home_address?: CompanyHomeAddress$Outbound | undefined;
};
/** @internal */
export declare const PrimarySignatory$outboundSchema: z.ZodType<PrimarySignatory$Outbound, z.ZodTypeDef, PrimarySignatory>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PrimarySignatory$ {
    /** @deprecated use `PrimarySignatory$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PrimarySignatory, z.ZodTypeDef, unknown>;
    /** @deprecated use `PrimarySignatory$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PrimarySignatory$Outbound, z.ZodTypeDef, PrimarySignatory>;
    /** @deprecated use `PrimarySignatory$Outbound` instead. */
    type Outbound = PrimarySignatory$Outbound;
}
export declare function primarySignatoryToJSON(primarySignatory: PrimarySignatory): string;
export declare function primarySignatoryFromJSON(jsonString: string): SafeParseResult<PrimarySignatory, SDKValidationError>;
/** @internal */
export declare const PrimaryPayrollAdmin$inboundSchema: z.ZodType<PrimaryPayrollAdmin, z.ZodTypeDef, unknown>;
/** @internal */
export type PrimaryPayrollAdmin$Outbound = {
    first_name?: string | undefined;
    last_name?: string | undefined;
    phone?: string | null | undefined;
    email?: string | undefined;
};
/** @internal */
export declare const PrimaryPayrollAdmin$outboundSchema: z.ZodType<PrimaryPayrollAdmin$Outbound, z.ZodTypeDef, PrimaryPayrollAdmin>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PrimaryPayrollAdmin$ {
    /** @deprecated use `PrimaryPayrollAdmin$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PrimaryPayrollAdmin, z.ZodTypeDef, unknown>;
    /** @deprecated use `PrimaryPayrollAdmin$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PrimaryPayrollAdmin$Outbound, z.ZodTypeDef, PrimaryPayrollAdmin>;
    /** @deprecated use `PrimaryPayrollAdmin$Outbound` instead. */
    type Outbound = PrimaryPayrollAdmin$Outbound;
}
export declare function primaryPayrollAdminToJSON(primaryPayrollAdmin: PrimaryPayrollAdmin): string;
export declare function primaryPayrollAdminFromJSON(jsonString: string): SafeParseResult<PrimaryPayrollAdmin, SDKValidationError>;
/** @internal */
export declare const Company$inboundSchema: z.ZodType<Company, z.ZodTypeDef, unknown>;
/** @internal */
export type Company$Outbound = {
    ein?: string | undefined;
    entity_type?: string | null | undefined;
    contractor_only?: boolean | undefined;
    tier?: string | null | undefined;
    is_suspended?: boolean | undefined;
    company_status?: string | undefined;
    uuid: string;
    name?: string | undefined;
    slug?: string | undefined;
    trade_name?: string | null | undefined;
    is_partner_managed?: boolean | undefined;
    pay_schedule_type?: string | null | undefined;
    join_date?: string | null | undefined;
    funding_type?: string | null | undefined;
    locations?: Array<CompanyAddress$Outbound> | undefined;
    compensations?: Compensations$Outbound | undefined;
    primary_signatory?: PrimarySignatory$Outbound | null | undefined;
    primary_payroll_admin?: PrimaryPayrollAdmin$Outbound | undefined;
};
/** @internal */
export declare const Company$outboundSchema: z.ZodType<Company$Outbound, z.ZodTypeDef, Company>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Company$ {
    /** @deprecated use `Company$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Company, z.ZodTypeDef, unknown>;
    /** @deprecated use `Company$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Company$Outbound, z.ZodTypeDef, Company>;
    /** @deprecated use `Company$Outbound` instead. */
    type Outbound = Company$Outbound;
}
export declare function companyToJSON(company: Company): string;
export declare function companyFromJSON(jsonString: string): SafeParseResult<Company, SDKValidationError>;
//# sourceMappingURL=company.d.ts.map