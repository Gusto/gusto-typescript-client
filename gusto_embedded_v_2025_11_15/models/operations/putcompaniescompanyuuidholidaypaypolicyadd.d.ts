import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees = {
    uuid?: string | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * An array of employee objects, each containing an employee_uuid.
     */
    employees?: Array<PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees> | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyAddRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyAddResponse = {
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
     * Holiday Pay Policy Object Example
     */
    holidayPayPolicy?: components.HolidayPayPolicy | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyAddEmployeesToJSON(putCompaniesCompanyUuidHolidayPayPolicyAddEmployees: PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyAddEmployeesFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound = {
    version: string;
    employees?: Array<PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees$Outbound> | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyAddRequestBodyToJSON(putCompaniesCompanyUuidHolidayPayPolicyAddRequestBody: PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyAddRequestBodyFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody$Outbound;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyAddRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyAddRequest>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyAddRequestToJSON(putCompaniesCompanyUuidHolidayPayPolicyAddRequest: PutCompaniesCompanyUuidHolidayPayPolicyAddRequest): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyAddRequestFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyAddRequest, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Holiday-Pay-Policy"?: components.HolidayPayPolicy$Outbound | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyAddResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyAddResponse>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyAddResponse$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyAddResponseToJSON(putCompaniesCompanyUuidHolidayPayPolicyAddResponse: PutCompaniesCompanyUuidHolidayPayPolicyAddResponse): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyAddResponseFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyAddResponse, SDKValidationError>;
//# sourceMappingURL=putcompaniescompanyuuidholidaypaypolicyadd.d.ts.map