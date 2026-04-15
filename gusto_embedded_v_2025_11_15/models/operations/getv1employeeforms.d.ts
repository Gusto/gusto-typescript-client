import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeeFormsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeeFormsResponse = {
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
    formList?: Array<components.Form> | undefined;
};
/** @internal */
export declare const GetV1EmployeeFormsRequest$inboundSchema: z.ZodType<GetV1EmployeeFormsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeeFormsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeeFormsRequest$outboundSchema: z.ZodType<GetV1EmployeeFormsRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeeFormsRequest$ {
    /** @deprecated use `GetV1EmployeeFormsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeeFormsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeeFormsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeeFormsRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormsRequest>;
    /** @deprecated use `GetV1EmployeeFormsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeeFormsRequest$Outbound;
}
export declare function getV1EmployeeFormsRequestToJSON(getV1EmployeeFormsRequest: GetV1EmployeeFormsRequest): string;
export declare function getV1EmployeeFormsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeeFormsResponse$inboundSchema: z.ZodType<GetV1EmployeeFormsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeeFormsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Form-List"?: Array<components.Form$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeeFormsResponse$outboundSchema: z.ZodType<GetV1EmployeeFormsResponse$Outbound, z.ZodTypeDef, GetV1EmployeeFormsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeeFormsResponse$ {
    /** @deprecated use `GetV1EmployeeFormsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeeFormsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeeFormsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeeFormsResponse$Outbound, z.ZodTypeDef, GetV1EmployeeFormsResponse>;
    /** @deprecated use `GetV1EmployeeFormsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeeFormsResponse$Outbound;
}
export declare function getV1EmployeeFormsResponseToJSON(getV1EmployeeFormsResponse: GetV1EmployeeFormsResponse): string;
export declare function getV1EmployeeFormsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeeforms.d.ts.map