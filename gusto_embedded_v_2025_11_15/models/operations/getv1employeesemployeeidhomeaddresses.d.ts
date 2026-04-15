import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdHomeAddressesRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdHomeAddressesResponse = {
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
     * List of employee addresses
     */
    employeeAddressList?: Array<components.EmployeeAddress> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdHomeAddressesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdHomeAddressesRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdHomeAddressesRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdHomeAddressesRequestToJSON(getV1EmployeesEmployeeIdHomeAddressesRequest: GetV1EmployeesEmployeeIdHomeAddressesRequest): string;
export declare function getV1EmployeesEmployeeIdHomeAddressesRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdHomeAddressesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Address-List"?: Array<components.EmployeeAddress$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdHomeAddressesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdHomeAddressesResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdHomeAddressesResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdHomeAddressesResponseToJSON(getV1EmployeesEmployeeIdHomeAddressesResponse: GetV1EmployeesEmployeeIdHomeAddressesResponse): string;
export declare function getV1EmployeesEmployeeIdHomeAddressesResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdHomeAddressesResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidhomeaddresses.d.ts.map