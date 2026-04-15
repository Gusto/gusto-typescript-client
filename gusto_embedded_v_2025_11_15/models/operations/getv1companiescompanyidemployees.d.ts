import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const Include: {
    readonly AllCompensations: "all_compensations";
    readonly CustomFields: "custom_fields";
};
export type Include = ClosedEnum<typeof Include>;
export type GetV1CompaniesCompanyIdEmployeesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Filters employees by the provided boolean
     */
    terminated?: boolean | undefined;
    /**
     * Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:
     *
     * @remarks
     * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
     * - custom_fields: Include employees' custom fields
     */
    include?: Array<Include> | undefined;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * A string to search for in the object's names
     */
    searchTerm?: string | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdEmployeesResponse = {
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
    employeeList?: Array<components.Employee> | undefined;
};
/** @internal */
export declare const Include$inboundSchema: z.ZodNativeEnum<typeof Include>;
/** @internal */
export declare const Include$outboundSchema: z.ZodNativeEnum<typeof Include>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Include$ {
    /** @deprecated use `Include$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
        readonly CustomFields: "custom_fields";
    }>;
    /** @deprecated use `Include$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
        readonly CustomFields: "custom_fields";
    }>;
}
/** @internal */
export declare const GetV1CompaniesCompanyIdEmployeesRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdEmployeesRequest$Outbound = {
    company_id: string;
    terminated?: boolean | undefined;
    include?: Array<string> | undefined;
    page?: number | undefined;
    per?: number | undefined;
    search_term?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdEmployeesRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEmployeesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdEmployeesRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdEmployeesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdEmployeesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEmployeesRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdEmployeesRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdEmployeesRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdEmployeesRequestToJSON(getV1CompaniesCompanyIdEmployeesRequest: GetV1CompaniesCompanyIdEmployeesRequest): string;
export declare function getV1CompaniesCompanyIdEmployeesRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdEmployeesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdEmployeesResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdEmployeesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-List"?: Array<components.Employee$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdEmployeesResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEmployeesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdEmployeesResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdEmployeesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdEmployeesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEmployeesResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdEmployeesResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdEmployeesResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdEmployeesResponseToJSON(getV1CompaniesCompanyIdEmployeesResponse: GetV1CompaniesCompanyIdEmployeesResponse): string;
export declare function getV1CompaniesCompanyIdEmployeesResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdEmployeesResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidemployees.d.ts.map