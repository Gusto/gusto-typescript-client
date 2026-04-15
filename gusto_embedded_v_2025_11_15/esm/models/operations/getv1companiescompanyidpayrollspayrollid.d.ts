import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PayrollShow } from "../components/payroll.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1CompaniesCompanyIdPayrollsPayrollIdHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1CompaniesCompanyIdPayrollsPayrollIdHeaderXGustoAPIVersion>;
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude: {
    readonly Benefits: "benefits";
    readonly Deductions: "deductions";
    readonly Taxes: "taxes";
    readonly PayrollStatusMeta: "payroll_status_meta";
    readonly Totals: "totals";
    readonly RiskBlockers: "risk_blockers";
    readonly Reversals: "reversals";
    readonly PayrollTaxes: "payroll_taxes";
};
export type GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude = ClosedEnum<typeof GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude>;
/**
 * Field to sort employee compensations by
 */
export declare const SortBy: {
    readonly FirstName: "first_name";
    readonly LastName: "last_name";
};
/**
 * Field to sort employee compensations by
 */
export type SortBy = ClosedEnum<typeof SortBy>;
export type GetV1CompaniesCompanyIdPayrollsPayrollIdRequest = {
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
    xGustoAPIVersion?: GetV1CompaniesCompanyIdPayrollsPayrollIdHeaderXGustoAPIVersion | undefined;
    /**
     * Include the requested attribute in the response, for multiple attributes comma separate the values, i.e. `?include=benefits,deductions,taxes`
     */
    include?: Array<GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude> | undefined;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Field to sort employee compensations by
     */
    sortBy?: SortBy | undefined;
};
export type GetV1CompaniesCompanyIdPayrollsPayrollIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * successful
     */
    payrollShow?: PayrollShow | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPayrollsPayrollIdHeaderXGustoAPIVersion>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude>;
/** @internal */
export declare const SortBy$outboundSchema: z.ZodNativeEnum<typeof SortBy>;
/** @internal */
export type GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$Outbound = {
    company_id: string;
    payroll_id: string;
    "X-Gusto-API-Version": string;
    include?: Array<string> | undefined;
    page?: number | undefined;
    per?: number | undefined;
    sort_by?: string | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsPayrollIdRequest>;
export declare function getV1CompaniesCompanyIdPayrollsPayrollIdRequestToJSON(getV1CompaniesCompanyIdPayrollsPayrollIdRequest: GetV1CompaniesCompanyIdPayrollsPayrollIdRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdPayrollsPayrollIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayrollsPayrollIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayrollspayrollid.d.ts.map