import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PayrollPrepared } from "../components/payroll.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareHeaderXGustoAPIVersion = ClosedEnum<typeof PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareHeaderXGustoAPIVersion>;
/**
 * Sort employee compensations by name
 */
export declare const QueryParamSortBy: {
    readonly FirstName: "first_name";
    readonly LastName: "last_name";
};
/**
 * Sort employee compensations by name
 */
export type QueryParamSortBy = ClosedEnum<typeof QueryParamSortBy>;
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody = {
    /**
     * An array of employee UUIDs. If passed, only those employees payroll items will be prepared.
     */
    employeeUuids?: Array<string> | null | undefined;
};
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareHeaderXGustoAPIVersion | undefined;
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the payroll
     */
    payrollId: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Sort employee compensations by name
     */
    sortBy?: QueryParamSortBy | undefined;
    requestBody?: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody | undefined;
};
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    payrollPrepared?: PayrollPrepared | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareHeaderXGustoAPIVersion>;
/** @internal */
export declare const QueryParamSortBy$outboundSchema: z.ZodNativeEnum<typeof QueryParamSortBy>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody$Outbound = {
    employee_uuids?: Array<string> | null | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody>;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBodyToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody): string;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound = {
    "X-Gusto-API-Version": string;
    company_id: string;
    payroll_id: string;
    page?: number | undefined;
    per?: number | undefined;
    sort_by?: string | undefined;
    RequestBody?: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestBody$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest>;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest): string;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidpayrollspayrollidprepare.d.ts.map