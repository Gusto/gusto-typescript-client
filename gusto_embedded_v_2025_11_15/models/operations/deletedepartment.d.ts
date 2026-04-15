import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteDepartmentRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteDepartmentResponse = {
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
export declare const DeleteDepartmentRequest$inboundSchema: z.ZodType<DeleteDepartmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteDepartmentRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteDepartmentRequest$outboundSchema: z.ZodType<DeleteDepartmentRequest$Outbound, z.ZodTypeDef, DeleteDepartmentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteDepartmentRequest$ {
    /** @deprecated use `DeleteDepartmentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteDepartmentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteDepartmentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteDepartmentRequest$Outbound, z.ZodTypeDef, DeleteDepartmentRequest>;
    /** @deprecated use `DeleteDepartmentRequest$Outbound` instead. */
    type Outbound = DeleteDepartmentRequest$Outbound;
}
export declare function deleteDepartmentRequestToJSON(deleteDepartmentRequest: DeleteDepartmentRequest): string;
export declare function deleteDepartmentRequestFromJSON(jsonString: string): SafeParseResult<DeleteDepartmentRequest, SDKValidationError>;
/** @internal */
export declare const DeleteDepartmentResponse$inboundSchema: z.ZodType<DeleteDepartmentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteDepartmentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteDepartmentResponse$outboundSchema: z.ZodType<DeleteDepartmentResponse$Outbound, z.ZodTypeDef, DeleteDepartmentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteDepartmentResponse$ {
    /** @deprecated use `DeleteDepartmentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteDepartmentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteDepartmentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteDepartmentResponse$Outbound, z.ZodTypeDef, DeleteDepartmentResponse>;
    /** @deprecated use `DeleteDepartmentResponse$Outbound` instead. */
    type Outbound = DeleteDepartmentResponse$Outbound;
}
export declare function deleteDepartmentResponseToJSON(deleteDepartmentResponse: DeleteDepartmentResponse): string;
export declare function deleteDepartmentResponseFromJSON(jsonString: string): SafeParseResult<DeleteDepartmentResponse, SDKValidationError>;
//# sourceMappingURL=deletedepartment.d.ts.map