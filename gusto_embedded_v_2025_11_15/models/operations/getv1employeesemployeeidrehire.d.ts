import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdRehireRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdRehireResponse = {
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
    rehire?: components.Rehire | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdRehireRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdRehireRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdRehireRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdRehireRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdRehireRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdRehireRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdRehireRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdRehireRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdRehireRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdRehireRequestToJSON(getV1EmployeesEmployeeIdRehireRequest: GetV1EmployeesEmployeeIdRehireRequest): string;
export declare function getV1EmployeesEmployeeIdRehireRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdRehireRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdRehireResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Rehire?: components.Rehire$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdRehireResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdRehireResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdRehireResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdRehireResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdRehireResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdRehireResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdRehireResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdRehireResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdRehireResponseToJSON(getV1EmployeesEmployeeIdRehireResponse: GetV1EmployeesEmployeeIdRehireResponse): string;
export declare function getV1EmployeesEmployeeIdRehireResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdRehireResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidrehire.d.ts.map