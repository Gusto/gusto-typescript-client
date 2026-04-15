import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest = {
    /**
     * The UUID of the payroll
     */
    payrollId: string;
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse = {
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
};
/** @internal */
export declare const GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$inboundSchema: z.ZodType<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$Outbound = {
    payroll_id: string;
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$outboundSchema: z.ZodType<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$Outbound, z.ZodTypeDef, GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$ {
    /** @deprecated use `GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$Outbound, z.ZodTypeDef, GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest>;
    /** @deprecated use `GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$Outbound` instead. */
    type Outbound = GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$Outbound;
}
export declare function getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequestToJSON(getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest: GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest): string;
export declare function getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequestFromJSON(jsonString: string): SafeParseResult<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest, SDKValidationError>;
/** @internal */
export declare const GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$inboundSchema: z.ZodType<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$outboundSchema: z.ZodType<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$Outbound, z.ZodTypeDef, GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$ {
    /** @deprecated use `GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$Outbound, z.ZodTypeDef, GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse>;
    /** @deprecated use `GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$Outbound` instead. */
    type Outbound = GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$Outbound;
}
export declare function getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponseToJSON(getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse: GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse): string;
export declare function getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponseFromJSON(jsonString: string): SafeParseResult<GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse, SDKValidationError>;
//# sourceMappingURL=getv1payrollspayrolluuidemployeesemployeeuuidpaystub.d.ts.map