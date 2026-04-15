import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const QueryParamInclude: {
    readonly AllCompensations: "all_compensations";
    readonly CustomFields: "custom_fields";
};
export type QueryParamInclude = ClosedEnum<typeof QueryParamInclude>;
export type GetV1EmployeesRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:
     *
     * @remarks
     * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
     * - custom_fields: Include employees' custom fields
     */
    include?: Array<QueryParamInclude> | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesResponse = {
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
    employee?: components.Employee | undefined;
};
/** @internal */
export declare const QueryParamInclude$inboundSchema: z.ZodNativeEnum<typeof QueryParamInclude>;
/** @internal */
export declare const QueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof QueryParamInclude>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace QueryParamInclude$ {
    /** @deprecated use `QueryParamInclude$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
        readonly CustomFields: "custom_fields";
    }>;
    /** @deprecated use `QueryParamInclude$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
        readonly CustomFields: "custom_fields";
    }>;
}
/** @internal */
export declare const GetV1EmployeesRequest$inboundSchema: z.ZodType<GetV1EmployeesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesRequest$Outbound = {
    employee_id: string;
    include?: Array<string> | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesRequest$outboundSchema: z.ZodType<GetV1EmployeesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesRequest$ {
    /** @deprecated use `GetV1EmployeesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesRequest>;
    /** @deprecated use `GetV1EmployeesRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesRequest$Outbound;
}
export declare function getV1EmployeesRequestToJSON(getV1EmployeesRequest: GetV1EmployeesRequest): string;
export declare function getV1EmployeesRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesResponse$inboundSchema: z.ZodType<GetV1EmployeesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Employee?: components.Employee$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeesResponse$outboundSchema: z.ZodType<GetV1EmployeesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesResponse$ {
    /** @deprecated use `GetV1EmployeesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesResponse$Outbound, z.ZodTypeDef, GetV1EmployeesResponse>;
    /** @deprecated use `GetV1EmployeesResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesResponse$Outbound;
}
export declare function getV1EmployeesResponseToJSON(getV1EmployeesResponse: GetV1EmployeesResponse): string;
export declare function getV1EmployeesResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesResponse, SDKValidationError>;
//# sourceMappingURL=getv1employees.d.ts.map