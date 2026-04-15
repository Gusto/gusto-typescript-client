import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdPaymentMethodRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdPaymentMethodResponse = {
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
    employeePaymentMethod?: components.EmployeePaymentMethod | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdPaymentMethodRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdPaymentMethodRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdPaymentMethodRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdPaymentMethodRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdPaymentMethodRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdPaymentMethodRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdPaymentMethodRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdPaymentMethodRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdPaymentMethodRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdPaymentMethodRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdPaymentMethodRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdPaymentMethodRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdPaymentMethodRequestToJSON(getV1EmployeesEmployeeIdPaymentMethodRequest: GetV1EmployeesEmployeeIdPaymentMethodRequest): string;
export declare function getV1EmployeesEmployeeIdPaymentMethodRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdPaymentMethodRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdPaymentMethodResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdPaymentMethodResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdPaymentMethodResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Payment-Method"?: components.EmployeePaymentMethod$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdPaymentMethodResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdPaymentMethodResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdPaymentMethodResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdPaymentMethodResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdPaymentMethodResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdPaymentMethodResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdPaymentMethodResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdPaymentMethodResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdPaymentMethodResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdPaymentMethodResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdPaymentMethodResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdPaymentMethodResponseToJSON(getV1EmployeesEmployeeIdPaymentMethodResponse: GetV1EmployeesEmployeeIdPaymentMethodResponse): string;
export declare function getV1EmployeesEmployeeIdPaymentMethodResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdPaymentMethodResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidpaymentmethod.d.ts.map