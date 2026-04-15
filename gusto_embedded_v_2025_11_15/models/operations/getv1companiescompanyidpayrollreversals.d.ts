import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdPayrollReversalsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdPayrollReversalsResponse = {
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
    payrollReversal?: components.PayrollReversal | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollReversalsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollReversalsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPayrollReversalsRequest$Outbound = {
    company_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollReversalsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollReversalsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollReversalsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayrollReversalsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollReversalsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollReversalsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollReversalsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollReversalsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollReversalsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollReversalsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPayrollReversalsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdPayrollReversalsRequestToJSON(getV1CompaniesCompanyIdPayrollReversalsRequest: GetV1CompaniesCompanyIdPayrollReversalsRequest): string;
export declare function getV1CompaniesCompanyIdPayrollReversalsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayrollReversalsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollReversalsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollReversalsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPayrollReversalsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payroll-Reversal"?: components.PayrollReversal$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollReversalsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollReversalsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollReversalsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayrollReversalsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollReversalsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollReversalsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollReversalsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollReversalsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollReversalsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollReversalsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPayrollReversalsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdPayrollReversalsResponseToJSON(getV1CompaniesCompanyIdPayrollReversalsResponse: GetV1CompaniesCompanyIdPayrollReversalsResponse): string;
export declare function getV1CompaniesCompanyIdPayrollReversalsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayrollReversalsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayrollreversals.d.ts.map