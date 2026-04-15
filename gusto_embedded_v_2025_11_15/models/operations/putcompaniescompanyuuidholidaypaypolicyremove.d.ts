import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees = {
    uuid?: string | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * An array of employee objects, each containing an employee_uuid.
     */
    employees?: Array<PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees> | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse = {
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
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyRemoveEmployeesToJSON(putCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees: PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyRemoveEmployeesFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$Outbound = {
    version: string;
    employees?: Array<PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees$Outbound> | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBodyToJSON(putCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody: PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBodyFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody$Outbound;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyRemoveRequestToJSON(putCompaniesCompanyUuidHolidayPayPolicyRemoveRequest: PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyRemoveRequestFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Holiday-Pay-Policy"?: components.HolidayPayPolicy$Outbound | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyRemoveResponseToJSON(putCompaniesCompanyUuidHolidayPayPolicyRemoveResponse: PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyRemoveResponseFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse, SDKValidationError>;
//# sourceMappingURL=putcompaniescompanyuuidholidaypaypolicyremove.d.ts.map