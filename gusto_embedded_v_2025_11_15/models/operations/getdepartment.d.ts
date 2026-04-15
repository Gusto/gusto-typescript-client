import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetDepartmentRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetDepartmentResponse = {
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
     * Department Object Example
     */
    department?: components.Department | undefined;
};
/** @internal */
export declare const GetDepartmentRequest$inboundSchema: z.ZodType<GetDepartmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDepartmentRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetDepartmentRequest$outboundSchema: z.ZodType<GetDepartmentRequest$Outbound, z.ZodTypeDef, GetDepartmentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetDepartmentRequest$ {
    /** @deprecated use `GetDepartmentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetDepartmentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetDepartmentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetDepartmentRequest$Outbound, z.ZodTypeDef, GetDepartmentRequest>;
    /** @deprecated use `GetDepartmentRequest$Outbound` instead. */
    type Outbound = GetDepartmentRequest$Outbound;
}
export declare function getDepartmentRequestToJSON(getDepartmentRequest: GetDepartmentRequest): string;
export declare function getDepartmentRequestFromJSON(jsonString: string): SafeParseResult<GetDepartmentRequest, SDKValidationError>;
/** @internal */
export declare const GetDepartmentResponse$inboundSchema: z.ZodType<GetDepartmentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDepartmentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Department?: components.Department$Outbound | undefined;
};
/** @internal */
export declare const GetDepartmentResponse$outboundSchema: z.ZodType<GetDepartmentResponse$Outbound, z.ZodTypeDef, GetDepartmentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetDepartmentResponse$ {
    /** @deprecated use `GetDepartmentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetDepartmentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetDepartmentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetDepartmentResponse$Outbound, z.ZodTypeDef, GetDepartmentResponse>;
    /** @deprecated use `GetDepartmentResponse$Outbound` instead. */
    type Outbound = GetDepartmentResponse$Outbound;
}
export declare function getDepartmentResponseToJSON(getDepartmentResponse: GetDepartmentResponse): string;
export declare function getDepartmentResponseFromJSON(jsonString: string): SafeParseResult<GetDepartmentResponse, SDKValidationError>;
//# sourceMappingURL=getdepartment.d.ts.map