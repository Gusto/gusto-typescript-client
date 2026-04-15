import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdGarnishmentsRequest = {
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
export type GetV1EmployeesEmployeeIdGarnishmentsResponse = {
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
    garnishmentList?: Array<components.Garnishment> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdGarnishmentsRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdGarnishmentsRequest$Outbound = {
    employee_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdGarnishmentsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdGarnishmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdGarnishmentsRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdGarnishmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdGarnishmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdGarnishmentsRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdGarnishmentsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdGarnishmentsRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdGarnishmentsRequestToJSON(getV1EmployeesEmployeeIdGarnishmentsRequest: GetV1EmployeesEmployeeIdGarnishmentsRequest): string;
export declare function getV1EmployeesEmployeeIdGarnishmentsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdGarnishmentsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdGarnishmentsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdGarnishmentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Garnishment-List"?: Array<components.Garnishment$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdGarnishmentsResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdGarnishmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdGarnishmentsResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdGarnishmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdGarnishmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdGarnishmentsResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdGarnishmentsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdGarnishmentsResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdGarnishmentsResponseToJSON(getV1EmployeesEmployeeIdGarnishmentsResponse: GetV1EmployeesEmployeeIdGarnishmentsResponse): string;
export declare function getV1EmployeesEmployeeIdGarnishmentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdGarnishmentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidgarnishments.d.ts.map