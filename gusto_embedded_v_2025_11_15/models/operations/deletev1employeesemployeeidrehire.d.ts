import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeesEmployeeIdRehireRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1EmployeesEmployeeIdRehireResponse = {
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
export declare const DeleteV1EmployeesEmployeeIdRehireRequest$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeesEmployeeIdRehireRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdRehireRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeesEmployeeIdRehireRequest$ {
    /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdRehireRequest>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireRequest$Outbound` instead. */
    type Outbound = DeleteV1EmployeesEmployeeIdRehireRequest$Outbound;
}
export declare function deleteV1EmployeesEmployeeIdRehireRequestToJSON(deleteV1EmployeesEmployeeIdRehireRequest: DeleteV1EmployeesEmployeeIdRehireRequest): string;
export declare function deleteV1EmployeesEmployeeIdRehireRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdRehireRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeesEmployeeIdRehireResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdRehireResponse$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdRehireResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeesEmployeeIdRehireResponse$ {
    /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdRehireResponse>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireResponse$Outbound` instead. */
    type Outbound = DeleteV1EmployeesEmployeeIdRehireResponse$Outbound;
}
export declare function deleteV1EmployeesEmployeeIdRehireResponseToJSON(deleteV1EmployeesEmployeeIdRehireResponse: DeleteV1EmployeesEmployeeIdRehireResponse): string;
export declare function deleteV1EmployeesEmployeeIdRehireResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdRehireResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeesemployeeidrehire.d.ts.map