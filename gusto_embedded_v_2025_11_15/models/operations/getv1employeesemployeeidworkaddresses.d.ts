import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdWorkAddressesRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdWorkAddressesResponse = {
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
     * List of employee work addresses
     */
    employeeWorkAddressList?: Array<components.EmployeeWorkAddress> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdWorkAddressesRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdWorkAddressesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdWorkAddressesRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdWorkAddressesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdWorkAddressesRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdWorkAddressesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdWorkAddressesRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdWorkAddressesRequestToJSON(getV1EmployeesEmployeeIdWorkAddressesRequest: GetV1EmployeesEmployeeIdWorkAddressesRequest): string;
export declare function getV1EmployeesEmployeeIdWorkAddressesRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdWorkAddressesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdWorkAddressesResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdWorkAddressesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdWorkAddressesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Work-Address-List"?: Array<components.EmployeeWorkAddress$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdWorkAddressesResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdWorkAddressesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdWorkAddressesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdWorkAddressesResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdWorkAddressesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdWorkAddressesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdWorkAddressesResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdWorkAddressesResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdWorkAddressesResponseToJSON(getV1EmployeesEmployeeIdWorkAddressesResponse: GetV1EmployeesEmployeeIdWorkAddressesResponse): string;
export declare function getV1EmployeesEmployeeIdWorkAddressesResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdWorkAddressesResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidworkaddresses.d.ts.map