import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse = {
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
    i9AuthorizationDocumentsObject?: Array<components.I9AuthorizationDocument> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestToJSON(getV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest: GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest): string;
export declare function getV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "I9-Authorization-Documents-Object"?: Array<components.I9AuthorizationDocument$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdI9AuthorizationDocumentsResponseToJSON(getV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse: GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse): string;
export declare function getV1EmployeesEmployeeIdI9AuthorizationDocumentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidi9authorizationdocuments.d.ts.map