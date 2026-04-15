import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdStateTaxesRequest = {
    /**
     * The UUID of the employee
     */
    employeeUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdStateTaxesResponse = {
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
    employeeStateTaxesList?: Array<components.EmployeeStateTax> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdStateTaxesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdStateTaxesRequest$Outbound = {
    employee_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdStateTaxesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdStateTaxesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdStateTaxesRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdStateTaxesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdStateTaxesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdStateTaxesRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdStateTaxesRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdStateTaxesRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdStateTaxesRequestToJSON(getV1EmployeesEmployeeIdStateTaxesRequest: GetV1EmployeesEmployeeIdStateTaxesRequest): string;
export declare function getV1EmployeesEmployeeIdStateTaxesRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdStateTaxesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdStateTaxesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdStateTaxesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-State-Taxes-List"?: Array<components.EmployeeStateTax$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdStateTaxesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdStateTaxesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdStateTaxesResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdStateTaxesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdStateTaxesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdStateTaxesResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdStateTaxesResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdStateTaxesResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdStateTaxesResponseToJSON(getV1EmployeesEmployeeIdStateTaxesResponse: GetV1EmployeesEmployeeIdStateTaxesResponse): string;
export declare function getV1EmployeesEmployeeIdStateTaxesResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdStateTaxesResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidstatetaxes.d.ts.map