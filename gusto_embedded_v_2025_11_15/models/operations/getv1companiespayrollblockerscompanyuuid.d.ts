import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesPayrollBlockersCompanyUuidRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesPayrollBlockersCompanyUuidResponse = {
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
    payrollBlockerList?: Array<components.PayrollBlocker> | undefined;
};
/** @internal */
export declare const GetV1CompaniesPayrollBlockersCompanyUuidRequest$inboundSchema: z.ZodType<GetV1CompaniesPayrollBlockersCompanyUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesPayrollBlockersCompanyUuidRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesPayrollBlockersCompanyUuidRequest$outboundSchema: z.ZodType<GetV1CompaniesPayrollBlockersCompanyUuidRequest$Outbound, z.ZodTypeDef, GetV1CompaniesPayrollBlockersCompanyUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesPayrollBlockersCompanyUuidRequest$ {
    /** @deprecated use `GetV1CompaniesPayrollBlockersCompanyUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesPayrollBlockersCompanyUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesPayrollBlockersCompanyUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesPayrollBlockersCompanyUuidRequest$Outbound, z.ZodTypeDef, GetV1CompaniesPayrollBlockersCompanyUuidRequest>;
    /** @deprecated use `GetV1CompaniesPayrollBlockersCompanyUuidRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesPayrollBlockersCompanyUuidRequest$Outbound;
}
export declare function getV1CompaniesPayrollBlockersCompanyUuidRequestToJSON(getV1CompaniesPayrollBlockersCompanyUuidRequest: GetV1CompaniesPayrollBlockersCompanyUuidRequest): string;
export declare function getV1CompaniesPayrollBlockersCompanyUuidRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesPayrollBlockersCompanyUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesPayrollBlockersCompanyUuidResponse$inboundSchema: z.ZodType<GetV1CompaniesPayrollBlockersCompanyUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesPayrollBlockersCompanyUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payroll-Blocker-List"?: Array<components.PayrollBlocker$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesPayrollBlockersCompanyUuidResponse$outboundSchema: z.ZodType<GetV1CompaniesPayrollBlockersCompanyUuidResponse$Outbound, z.ZodTypeDef, GetV1CompaniesPayrollBlockersCompanyUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesPayrollBlockersCompanyUuidResponse$ {
    /** @deprecated use `GetV1CompaniesPayrollBlockersCompanyUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesPayrollBlockersCompanyUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesPayrollBlockersCompanyUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesPayrollBlockersCompanyUuidResponse$Outbound, z.ZodTypeDef, GetV1CompaniesPayrollBlockersCompanyUuidResponse>;
    /** @deprecated use `GetV1CompaniesPayrollBlockersCompanyUuidResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesPayrollBlockersCompanyUuidResponse$Outbound;
}
export declare function getV1CompaniesPayrollBlockersCompanyUuidResponseToJSON(getV1CompaniesPayrollBlockersCompanyUuidResponse: GetV1CompaniesPayrollBlockersCompanyUuidResponse): string;
export declare function getV1CompaniesPayrollBlockersCompanyUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesPayrollBlockersCompanyUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiespayrollblockerscompanyuuid.d.ts.map