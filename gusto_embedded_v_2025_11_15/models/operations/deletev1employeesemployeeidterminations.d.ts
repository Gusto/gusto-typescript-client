import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeesEmployeeIdTerminationsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1EmployeesEmployeeIdTerminationsResponse = {
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
export declare const DeleteV1EmployeesEmployeeIdTerminationsRequest$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdTerminationsRequest$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdTerminationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeesEmployeeIdTerminationsRequest$ {
    /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdTerminationsRequest>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound` instead. */
    type Outbound = DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound;
}
export declare function deleteV1EmployeesEmployeeIdTerminationsRequestToJSON(deleteV1EmployeesEmployeeIdTerminationsRequest: DeleteV1EmployeesEmployeeIdTerminationsRequest): string;
export declare function deleteV1EmployeesEmployeeIdTerminationsRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdTerminationsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdTerminationsResponse$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdTerminationsResponse$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdTerminationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeesEmployeeIdTerminationsResponse$ {
    /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdTerminationsResponse>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound` instead. */
    type Outbound = DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound;
}
export declare function deleteV1EmployeesEmployeeIdTerminationsResponseToJSON(deleteV1EmployeesEmployeeIdTerminationsResponse: DeleteV1EmployeesEmployeeIdTerminationsResponse): string;
export declare function deleteV1EmployeesEmployeeIdTerminationsResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdTerminationsResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeesemployeeidterminations.d.ts.map