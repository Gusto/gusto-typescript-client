import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutDepartmentsRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    title?: string | undefined;
};
export type PutDepartmentsRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutDepartmentsRequestBody;
};
export type PutDepartmentsResponse = {
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
export declare const PutDepartmentsRequestBody$inboundSchema: z.ZodType<PutDepartmentsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutDepartmentsRequestBody$Outbound = {
    version: string;
    title?: string | undefined;
};
/** @internal */
export declare const PutDepartmentsRequestBody$outboundSchema: z.ZodType<PutDepartmentsRequestBody$Outbound, z.ZodTypeDef, PutDepartmentsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutDepartmentsRequestBody$ {
    /** @deprecated use `PutDepartmentsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutDepartmentsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutDepartmentsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutDepartmentsRequestBody$Outbound, z.ZodTypeDef, PutDepartmentsRequestBody>;
    /** @deprecated use `PutDepartmentsRequestBody$Outbound` instead. */
    type Outbound = PutDepartmentsRequestBody$Outbound;
}
export declare function putDepartmentsRequestBodyToJSON(putDepartmentsRequestBody: PutDepartmentsRequestBody): string;
export declare function putDepartmentsRequestBodyFromJSON(jsonString: string): SafeParseResult<PutDepartmentsRequestBody, SDKValidationError>;
/** @internal */
export declare const PutDepartmentsRequest$inboundSchema: z.ZodType<PutDepartmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutDepartmentsRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutDepartmentsRequestBody$Outbound;
};
/** @internal */
export declare const PutDepartmentsRequest$outboundSchema: z.ZodType<PutDepartmentsRequest$Outbound, z.ZodTypeDef, PutDepartmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutDepartmentsRequest$ {
    /** @deprecated use `PutDepartmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutDepartmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutDepartmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutDepartmentsRequest$Outbound, z.ZodTypeDef, PutDepartmentsRequest>;
    /** @deprecated use `PutDepartmentsRequest$Outbound` instead. */
    type Outbound = PutDepartmentsRequest$Outbound;
}
export declare function putDepartmentsRequestToJSON(putDepartmentsRequest: PutDepartmentsRequest): string;
export declare function putDepartmentsRequestFromJSON(jsonString: string): SafeParseResult<PutDepartmentsRequest, SDKValidationError>;
/** @internal */
export declare const PutDepartmentsResponse$inboundSchema: z.ZodType<PutDepartmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutDepartmentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Department?: components.Department$Outbound | undefined;
};
/** @internal */
export declare const PutDepartmentsResponse$outboundSchema: z.ZodType<PutDepartmentsResponse$Outbound, z.ZodTypeDef, PutDepartmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutDepartmentsResponse$ {
    /** @deprecated use `PutDepartmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutDepartmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutDepartmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutDepartmentsResponse$Outbound, z.ZodTypeDef, PutDepartmentsResponse>;
    /** @deprecated use `PutDepartmentsResponse$Outbound` instead. */
    type Outbound = PutDepartmentsResponse$Outbound;
}
export declare function putDepartmentsResponseToJSON(putDepartmentsResponse: PutDepartmentsResponse): string;
export declare function putDepartmentsResponseFromJSON(jsonString: string): SafeParseResult<PutDepartmentsResponse, SDKValidationError>;
//# sourceMappingURL=putdepartments.d.ts.map