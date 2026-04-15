import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeeFormRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeeFormResponse = {
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
    form?: components.Form | undefined;
};
/** @internal */
export declare const GetV1EmployeeFormRequest$inboundSchema: z.ZodType<GetV1EmployeeFormRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeeFormRequest$Outbound = {
    employee_id: string;
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeeFormRequest$outboundSchema: z.ZodType<GetV1EmployeeFormRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeeFormRequest$ {
    /** @deprecated use `GetV1EmployeeFormRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeeFormRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeeFormRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeeFormRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormRequest>;
    /** @deprecated use `GetV1EmployeeFormRequest$Outbound` instead. */
    type Outbound = GetV1EmployeeFormRequest$Outbound;
}
export declare function getV1EmployeeFormRequestToJSON(getV1EmployeeFormRequest: GetV1EmployeeFormRequest): string;
export declare function getV1EmployeeFormRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeeFormResponse$inboundSchema: z.ZodType<GetV1EmployeeFormResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeeFormResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Form?: components.Form$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeeFormResponse$outboundSchema: z.ZodType<GetV1EmployeeFormResponse$Outbound, z.ZodTypeDef, GetV1EmployeeFormResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeeFormResponse$ {
    /** @deprecated use `GetV1EmployeeFormResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeeFormResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeeFormResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeeFormResponse$Outbound, z.ZodTypeDef, GetV1EmployeeFormResponse>;
    /** @deprecated use `GetV1EmployeeFormResponse$Outbound` instead. */
    type Outbound = GetV1EmployeeFormResponse$Outbound;
}
export declare function getV1EmployeeFormResponseToJSON(getV1EmployeeFormResponse: GetV1EmployeeFormResponse): string;
export declare function getV1EmployeeFormResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeeform.d.ts.map