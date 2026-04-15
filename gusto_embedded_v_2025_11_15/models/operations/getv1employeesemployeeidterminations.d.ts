import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdTerminationsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdTerminationsResponse = {
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
    terminationList?: Array<components.Termination> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdTerminationsRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdTerminationsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdTerminationsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdTerminationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdTerminationsRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdTerminationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdTerminationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdTerminationsRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdTerminationsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdTerminationsRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdTerminationsRequestToJSON(getV1EmployeesEmployeeIdTerminationsRequest: GetV1EmployeesEmployeeIdTerminationsRequest): string;
export declare function getV1EmployeesEmployeeIdTerminationsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdTerminationsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdTerminationsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdTerminationsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Termination-List"?: Array<components.Termination$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdTerminationsResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdTerminationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdTerminationsResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdTerminationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdTerminationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdTerminationsResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdTerminationsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdTerminationsResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdTerminationsResponseToJSON(getV1EmployeesEmployeeIdTerminationsResponse: GetV1EmployeesEmployeeIdTerminationsResponse): string;
export declare function getV1EmployeesEmployeeIdTerminationsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdTerminationsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidterminations.d.ts.map