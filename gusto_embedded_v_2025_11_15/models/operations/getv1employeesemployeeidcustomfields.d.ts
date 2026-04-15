import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdCustomFieldsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
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
/**
 * OK
 */
export type GetV1EmployeesEmployeeIdCustomFieldsResponseBody = {
    customFields?: Array<components.EmployeeCustomField> | undefined;
};
export type GetV1EmployeesEmployeeIdCustomFieldsResponse = {
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
     * OK
     */
    object?: GetV1EmployeesEmployeeIdCustomFieldsResponseBody | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdCustomFieldsRequest$Outbound = {
    employee_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdCustomFieldsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdCustomFieldsRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdCustomFieldsRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdCustomFieldsRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdCustomFieldsRequestToJSON(getV1EmployeesEmployeeIdCustomFieldsRequest: GetV1EmployeesEmployeeIdCustomFieldsRequest): string;
export declare function getV1EmployeesEmployeeIdCustomFieldsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdCustomFieldsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsResponseBody$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdCustomFieldsResponseBody$Outbound = {
    custom_fields?: Array<components.EmployeeCustomField$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsResponseBody$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponseBody$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdCustomFieldsResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdCustomFieldsResponseBody$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponseBody$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdCustomFieldsResponseBody>;
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsResponseBody$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdCustomFieldsResponseBody$Outbound;
}
export declare function getV1EmployeesEmployeeIdCustomFieldsResponseBodyToJSON(getV1EmployeesEmployeeIdCustomFieldsResponseBody: GetV1EmployeesEmployeeIdCustomFieldsResponseBody): string;
export declare function getV1EmployeesEmployeeIdCustomFieldsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdCustomFieldsResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdCustomFieldsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: GetV1EmployeesEmployeeIdCustomFieldsResponseBody$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdCustomFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdCustomFieldsResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdCustomFieldsResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdCustomFieldsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdCustomFieldsResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdCustomFieldsResponseToJSON(getV1EmployeesEmployeeIdCustomFieldsResponse: GetV1EmployeesEmployeeIdCustomFieldsResponse): string;
export declare function getV1EmployeesEmployeeIdCustomFieldsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdCustomFieldsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidcustomfields.d.ts.map