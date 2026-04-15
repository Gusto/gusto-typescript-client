import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageHeaderXGustoAPIVersion = ClosedEnum<typeof PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageHeaderXGustoAPIVersion>;
export type PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody = {
    /**
     * The start year for the report (must be 2011 or later)
     */
    startYear: number;
    /**
     * The end year for the report (must be the current year or earlier, and must be >= start_year)
     */
    endYear: number;
};
export type PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageHeaderXGustoAPIVersion | undefined;
    /**
     * The UUID of the company
     */
    companyId: string;
    requestBody: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody;
};
/**
 * accepted
 */
export type PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBody = {
    /**
     * The UUID of the report request. Use this to poll for report completion.
     */
    requestUuid: string;
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The start year for the report
     */
    startYear: number;
    /**
     * The end year for the report
     */
    endYear: number;
};
export type PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponse = {
    httpMeta: HTTPMetadata;
    /**
     * accepted
     */
    object?: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBody | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageHeaderXGustoAPIVersion>;
/** @internal */
export type PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody$Outbound = {
    start_year: number;
    end_year: number;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody>;
export declare function postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBodyToJSON(postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody): string;
/** @internal */
export type PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest$Outbound = {
    "X-Gusto-API-Version": string;
    company_id: string;
    RequestBody: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest>;
export declare function postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestToJSON(postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBody, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidreportsemployeesannualficawage.d.ts.map