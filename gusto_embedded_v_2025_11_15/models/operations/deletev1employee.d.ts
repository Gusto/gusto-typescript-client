import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeeRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1EmployeeResponse = {
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
export declare const DeleteV1EmployeeRequest$inboundSchema: z.ZodType<DeleteV1EmployeeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeeRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeeRequest$outboundSchema: z.ZodType<DeleteV1EmployeeRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeeRequest$ {
    /** @deprecated use `DeleteV1EmployeeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeeRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeeRequest>;
    /** @deprecated use `DeleteV1EmployeeRequest$Outbound` instead. */
    type Outbound = DeleteV1EmployeeRequest$Outbound;
}
export declare function deleteV1EmployeeRequestToJSON(deleteV1EmployeeRequest: DeleteV1EmployeeRequest): string;
export declare function deleteV1EmployeeRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeeRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1EmployeeResponse$inboundSchema: z.ZodType<DeleteV1EmployeeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeeResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1EmployeeResponse$outboundSchema: z.ZodType<DeleteV1EmployeeResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeeResponse$ {
    /** @deprecated use `DeleteV1EmployeeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeeResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeeResponse>;
    /** @deprecated use `DeleteV1EmployeeResponse$Outbound` instead. */
    type Outbound = DeleteV1EmployeeResponse$Outbound;
}
export declare function deleteV1EmployeeResponseToJSON(deleteV1EmployeeResponse: DeleteV1EmployeeResponse): string;
export declare function deleteV1EmployeeResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeeResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employee.d.ts.map