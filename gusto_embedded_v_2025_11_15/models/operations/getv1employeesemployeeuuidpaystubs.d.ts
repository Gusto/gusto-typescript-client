import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeUuidPayStubsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeUuidPayStubsResponse = {
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
    employeePayStubsList?: Array<components.EmployeePayStub> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeUuidPayStubsRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidPayStubsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeUuidPayStubsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeUuidPayStubsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidPayStubsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeUuidPayStubsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeUuidPayStubsRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeUuidPayStubsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidPayStubsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeUuidPayStubsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidPayStubsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeUuidPayStubsRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeUuidPayStubsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeUuidPayStubsRequest$Outbound;
}
export declare function getV1EmployeesEmployeeUuidPayStubsRequestToJSON(getV1EmployeesEmployeeUuidPayStubsRequest: GetV1EmployeesEmployeeUuidPayStubsRequest): string;
export declare function getV1EmployeesEmployeeUuidPayStubsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeUuidPayStubsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeUuidPayStubsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidPayStubsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeUuidPayStubsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Pay-Stubs-List"?: Array<components.EmployeePayStub$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeUuidPayStubsResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidPayStubsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeUuidPayStubsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeUuidPayStubsResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeUuidPayStubsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidPayStubsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeUuidPayStubsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidPayStubsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeUuidPayStubsResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeUuidPayStubsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeUuidPayStubsResponse$Outbound;
}
export declare function getV1EmployeesEmployeeUuidPayStubsResponseToJSON(getV1EmployeesEmployeeUuidPayStubsResponse: GetV1EmployeesEmployeeUuidPayStubsResponse): string;
export declare function getV1EmployeesEmployeeUuidPayStubsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeUuidPayStubsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeuuidpaystubs.d.ts.map