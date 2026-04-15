import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1EmployeesEmployeeIdRehireRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    rehireBody: components.RehireBody;
};
export type PostV1EmployeesEmployeeIdRehireResponse = {
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
export declare const PostV1EmployeesEmployeeIdRehireRequest$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdRehireRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdRehireRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    "Rehire-Body": components.RehireBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdRehireRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdRehireRequest$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdRehireRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdRehireRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdRehireRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdRehireRequest>;
    /** @deprecated use `PostV1EmployeesEmployeeIdRehireRequest$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdRehireRequest$Outbound;
}
export declare function postV1EmployeesEmployeeIdRehireRequestToJSON(postV1EmployeesEmployeeIdRehireRequest: PostV1EmployeesEmployeeIdRehireRequest): string;
export declare function postV1EmployeesEmployeeIdRehireRequestFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdRehireRequest, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdRehireResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Rehire?: components.Rehire$Outbound | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdRehireResponse$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdRehireResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdRehireResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdRehireResponse$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdRehireResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdRehireResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdRehireResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdRehireResponse>;
    /** @deprecated use `PostV1EmployeesEmployeeIdRehireResponse$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdRehireResponse$Outbound;
}
export declare function postV1EmployeesEmployeeIdRehireResponseToJSON(postV1EmployeesEmployeeIdRehireResponse: PostV1EmployeesEmployeeIdRehireResponse): string;
export declare function postV1EmployeesEmployeeIdRehireResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdRehireResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidrehire.d.ts.map