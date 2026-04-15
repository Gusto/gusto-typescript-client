import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HolidayPayPolicy } from "../components/holidaypaypolicy.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PutV1CompaniesCompanyUuidHolidayPayPolicyAddHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PutV1CompaniesCompanyUuidHolidayPayPolicyAddHeaderXGustoAPIVersion = ClosedEnum<typeof PutV1CompaniesCompanyUuidHolidayPayPolicyAddHeaderXGustoAPIVersion>;
export type PutV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees = {
    uuid?: string | undefined;
};
export type PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * An array of employee objects, each containing an employee_uuid.
     */
    employees: Array<PutV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees>;
};
export type PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PutV1CompaniesCompanyUuidHolidayPayPolicyAddHeaderXGustoAPIVersion | undefined;
    /**
     * The UUID of the company
     */
    companyUuid: string;
    requestBody: PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody;
};
export type PutV1CompaniesCompanyUuidHolidayPayPolicyAddResponse = {
    httpMeta: HTTPMetadata;
    /**
     * successful
     */
    holidayPayPolicy?: HolidayPayPolicy | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidHolidayPayPolicyAddHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PutV1CompaniesCompanyUuidHolidayPayPolicyAddHeaderXGustoAPIVersion>;
/** @internal */
export type PutV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees>;
export declare function putV1CompaniesCompanyUuidHolidayPayPolicyAddEmployeesToJSON(putV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees: PutV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees): string;
/** @internal */
export type PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound = {
    version: string;
    employees: Array<PutV1CompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound>;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody>;
export declare function putV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBodyToJSON(putV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody: PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody): string;
/** @internal */
export type PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequest$Outbound = {
    "X-Gusto-API-Version": string;
    company_uuid: string;
    RequestBody: PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequest>;
export declare function putV1CompaniesCompanyUuidHolidayPayPolicyAddRequestToJSON(putV1CompaniesCompanyUuidHolidayPayPolicyAddRequest: PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequest): string;
/** @internal */
export declare const PutV1CompaniesCompanyUuidHolidayPayPolicyAddResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidHolidayPayPolicyAddResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompaniesCompanyUuidHolidayPayPolicyAddResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidHolidayPayPolicyAddResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyuuidholidaypaypolicyadd.d.ts.map