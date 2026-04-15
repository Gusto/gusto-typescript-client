import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
/**
 * The contractor type.
 */
export declare const ContractorCreateRequestBodyType: {
    readonly Individual: "Individual";
    readonly Business: "Business";
};
/**
 * The contractor type.
 */
export type ContractorCreateRequestBodyType = ClosedEnum<typeof ContractorCreateRequestBodyType>;
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
 * Request body for creating a contractor.
 */
export type ContractorCreateRequestBody = {
    /**
     * The contractor type.
     */
    type?: ContractorCreateRequestBodyType | undefined;
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
/** @internal */
export declare const ContractorCreateRequestBodyType$outboundSchema: z.ZodNativeEnum<typeof ContractorCreateRequestBodyType>;
/** @internal */
export declare const WageType$outboundSchema: z.ZodNativeEnum<typeof WageType>;
/** @internal */
export type ContractorCreateRequestBody$Outbound = {
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
export declare const ContractorCreateRequestBody$outboundSchema: z.ZodType<ContractorCreateRequestBody$Outbound, z.ZodTypeDef, ContractorCreateRequestBody>;
export declare function contractorCreateRequestBodyToJSON(contractorCreateRequestBody: ContractorCreateRequestBody): string;
//# sourceMappingURL=contractorcreaterequestbody.d.ts.map