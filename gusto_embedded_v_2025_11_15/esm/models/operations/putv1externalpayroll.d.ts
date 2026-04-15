import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ExternalPayroll } from "../components/externalpayroll.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The earning type for the compensation.
 */
export declare const EarningType: {
    readonly CompanyPayType: "CompanyPayType";
    readonly CompanyEarningType: "CompanyEarningType";
};
/**
 * The earning type for the compensation.
 */
export type EarningType = ClosedEnum<typeof EarningType>;
/**
 * An array of earnings for the employee. Depends on your company selections, earnings includes wages, hours, bonuses, tips, commission and more.
 */
export type Earnings = {
    /**
     * The hour of the compensation for the pay period.
     */
    hours?: string | undefined;
    /**
     * The amount of the earning.
     */
    amount?: string | undefined;
    /**
     * The ID of the earning.
     */
    earningId?: number | undefined;
    /**
     * The earning type for the compensation.
     */
    earningType?: EarningType | undefined;
};
/**
 * An array of benefits for the employee. Depends on your company selections, benefits include 401k, health insurance and more.
 */
export type Benefits = {
    /**
     * Company contribution amount towards the benefit
     */
    companyContributionAmount?: string | undefined;
    /**
     * Employee deduction amount towards the benefit
     */
    employeeDeductionAmount?: string | undefined;
    /**
     * The ID of the benefit.
     */
    benefitId?: number | undefined;
};
export type Taxes = {
    /**
     * The amount of the tax.
     */
    amount?: string | undefined;
    /**
     * The ID of the tax.
     */
    taxId?: number | undefined;
};
/**
 * Submit wages, benefits, taxes for each employee
 */
export type ExternalPayrollItems = {
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    earnings?: Array<Earnings> | undefined;
    benefits?: Array<Benefits> | undefined;
    /**
     * An array of taxes for the employee. Depends on your company selections, taxes include federal income tax, social security, medicare, and more.
     */
    taxes?: Array<Taxes> | undefined;
};
export type PutV1ExternalPayrollRequestBody = {
    /**
     * Patch update external payroll items when set to true, otherwise it will overwrite the previous changes.
     */
    replaceFields?: boolean | undefined;
    externalPayrollItems?: Array<ExternalPayrollItems> | undefined;
};
export type PutV1ExternalPayrollRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the external payroll
     */
    externalPayrollId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1ExternalPayrollRequestBody;
};
export type PutV1ExternalPayrollResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    externalPayroll?: ExternalPayroll | undefined;
};
/** @internal */
export declare const EarningType$outboundSchema: z.ZodNativeEnum<typeof EarningType>;
/** @internal */
export type Earnings$Outbound = {
    hours?: string | undefined;
    amount?: string | undefined;
    earning_id?: number | undefined;
    earning_type?: string | undefined;
};
/** @internal */
export declare const Earnings$outboundSchema: z.ZodType<Earnings$Outbound, z.ZodTypeDef, Earnings>;
export declare function earningsToJSON(earnings: Earnings): string;
/** @internal */
export type Benefits$Outbound = {
    company_contribution_amount?: string | undefined;
    employee_deduction_amount?: string | undefined;
    benefit_id?: number | undefined;
};
/** @internal */
export declare const Benefits$outboundSchema: z.ZodType<Benefits$Outbound, z.ZodTypeDef, Benefits>;
export declare function benefitsToJSON(benefits: Benefits): string;
/** @internal */
export type Taxes$Outbound = {
    amount?: string | undefined;
    tax_id?: number | undefined;
};
/** @internal */
export declare const Taxes$outboundSchema: z.ZodType<Taxes$Outbound, z.ZodTypeDef, Taxes>;
export declare function taxesToJSON(taxes: Taxes): string;
/** @internal */
export type ExternalPayrollItems$Outbound = {
    employee_uuid?: string | undefined;
    earnings?: Array<Earnings$Outbound> | undefined;
    benefits?: Array<Benefits$Outbound> | undefined;
    taxes?: Array<Taxes$Outbound> | undefined;
};
/** @internal */
export declare const ExternalPayrollItems$outboundSchema: z.ZodType<ExternalPayrollItems$Outbound, z.ZodTypeDef, ExternalPayrollItems>;
export declare function externalPayrollItemsToJSON(externalPayrollItems: ExternalPayrollItems): string;
/** @internal */
export type PutV1ExternalPayrollRequestBody$Outbound = {
    replace_fields?: boolean | undefined;
    external_payroll_items?: Array<ExternalPayrollItems$Outbound> | undefined;
};
/** @internal */
export declare const PutV1ExternalPayrollRequestBody$outboundSchema: z.ZodType<PutV1ExternalPayrollRequestBody$Outbound, z.ZodTypeDef, PutV1ExternalPayrollRequestBody>;
export declare function putV1ExternalPayrollRequestBodyToJSON(putV1ExternalPayrollRequestBody: PutV1ExternalPayrollRequestBody): string;
/** @internal */
export type PutV1ExternalPayrollRequest$Outbound = {
    company_uuid: string;
    external_payroll_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ExternalPayrollRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ExternalPayrollRequest$outboundSchema: z.ZodType<PutV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, PutV1ExternalPayrollRequest>;
export declare function putV1ExternalPayrollRequestToJSON(putV1ExternalPayrollRequest: PutV1ExternalPayrollRequest): string;
/** @internal */
export declare const PutV1ExternalPayrollResponse$inboundSchema: z.ZodType<PutV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
export declare function putV1ExternalPayrollResponseFromJSON(jsonString: string): SafeParseResult<PutV1ExternalPayrollResponse, SDKValidationError>;
//# sourceMappingURL=putv1externalpayroll.d.ts.map