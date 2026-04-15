import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdEmploymentHistoryRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdEmploymentHistoryResponse = {
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
    employmentHistoryList?: Array<components.EmploymentHistoryList> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdEmploymentHistoryRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmploymentHistoryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdEmploymentHistoryRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdEmploymentHistoryRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmploymentHistoryRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdEmploymentHistoryRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdEmploymentHistoryRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdEmploymentHistoryRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmploymentHistoryRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdEmploymentHistoryRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmploymentHistoryRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdEmploymentHistoryRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdEmploymentHistoryRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdEmploymentHistoryRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdEmploymentHistoryRequestToJSON(getV1EmployeesEmployeeIdEmploymentHistoryRequest: GetV1EmployeesEmployeeIdEmploymentHistoryRequest): string;
export declare function getV1EmployeesEmployeeIdEmploymentHistoryRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdEmploymentHistoryRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdEmploymentHistoryResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmploymentHistoryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdEmploymentHistoryResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employment-History-List"?: Array<components.EmploymentHistoryList$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdEmploymentHistoryResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmploymentHistoryResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdEmploymentHistoryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdEmploymentHistoryResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdEmploymentHistoryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmploymentHistoryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdEmploymentHistoryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmploymentHistoryResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdEmploymentHistoryResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdEmploymentHistoryResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdEmploymentHistoryResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdEmploymentHistoryResponseToJSON(getV1EmployeesEmployeeIdEmploymentHistoryResponse: GetV1EmployeesEmployeeIdEmploymentHistoryResponse): string;
export declare function getV1EmployeesEmployeeIdEmploymentHistoryResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdEmploymentHistoryResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidemploymenthistory.d.ts.map