import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1EmployeesEmployeeIdHomeAddressesRequestBody = {
    street1?: string | undefined;
    street2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    effectiveDate?: RFCDate | undefined;
    courtesyWithholding?: boolean | undefined;
};
export type PostV1EmployeesEmployeeIdHomeAddressesRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1EmployeesEmployeeIdHomeAddressesRequestBody;
};
export type PostV1EmployeesEmployeeIdHomeAddressesResponse = {
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
    employeeAddress?: components.EmployeeAddress | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdHomeAddressesRequestBody$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound = {
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    effective_date?: string | undefined;
    courtesy_withholding?: boolean | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdHomeAddressesRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdHomeAddressesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdHomeAddressesRequestBody$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdHomeAddressesRequestBody>;
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound;
}
export declare function postV1EmployeesEmployeeIdHomeAddressesRequestBodyToJSON(postV1EmployeesEmployeeIdHomeAddressesRequestBody: PostV1EmployeesEmployeeIdHomeAddressesRequestBody): string;
export declare function postV1EmployeesEmployeeIdHomeAddressesRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdHomeAddressesRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdHomeAddressesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdHomeAddressesRequest$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdHomeAddressesRequest>;
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound;
}
export declare function postV1EmployeesEmployeeIdHomeAddressesRequestToJSON(postV1EmployeesEmployeeIdHomeAddressesRequest: PostV1EmployeesEmployeeIdHomeAddressesRequest): string;
export declare function postV1EmployeesEmployeeIdHomeAddressesRequestFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdHomeAddressesRequest, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Address"?: components.EmployeeAddress$Outbound | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdHomeAddressesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdHomeAddressesResponse$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdHomeAddressesResponse>;
    /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound;
}
export declare function postV1EmployeesEmployeeIdHomeAddressesResponseToJSON(postV1EmployeesEmployeeIdHomeAddressesResponse: PostV1EmployeesEmployeeIdHomeAddressesResponse): string;
export declare function postV1EmployeesEmployeeIdHomeAddressesResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdHomeAddressesResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidhomeaddresses.d.ts.map