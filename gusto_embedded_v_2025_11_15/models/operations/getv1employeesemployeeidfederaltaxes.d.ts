import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdFederalTaxesRequest = {
    /**
     * The UUID of the employee
     */
    employeeUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdFederalTaxesResponse = {
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
    employeeFederalTax?: components.EmployeeFederalTax | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdFederalTaxesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdFederalTaxesRequest$Outbound = {
    employee_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdFederalTaxesRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdFederalTaxesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdFederalTaxesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdFederalTaxesRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdFederalTaxesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdFederalTaxesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdFederalTaxesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdFederalTaxesRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdFederalTaxesRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdFederalTaxesRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdFederalTaxesRequestToJSON(getV1EmployeesEmployeeIdFederalTaxesRequest: GetV1EmployeesEmployeeIdFederalTaxesRequest): string;
export declare function getV1EmployeesEmployeeIdFederalTaxesRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdFederalTaxesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdFederalTaxesResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdFederalTaxesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdFederalTaxesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Federal-Tax"?: components.EmployeeFederalTax$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdFederalTaxesResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdFederalTaxesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdFederalTaxesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdFederalTaxesResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdFederalTaxesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdFederalTaxesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdFederalTaxesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdFederalTaxesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdFederalTaxesResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdFederalTaxesResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdFederalTaxesResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdFederalTaxesResponseToJSON(getV1EmployeesEmployeeIdFederalTaxesResponse: GetV1EmployeesEmployeeIdFederalTaxesResponse): string;
export declare function getV1EmployeesEmployeeIdFederalTaxesResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdFederalTaxesResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidfederaltaxes.d.ts.map