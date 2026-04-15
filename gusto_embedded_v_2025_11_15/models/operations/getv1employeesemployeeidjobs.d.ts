import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
 */
export declare const GetV1EmployeesEmployeeIdJobsQueryParamInclude: {
    readonly AllCompensations: "all_compensations";
};
/**
 * Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
 */
export type GetV1EmployeesEmployeeIdJobsQueryParamInclude = ClosedEnum<typeof GetV1EmployeesEmployeeIdJobsQueryParamInclude>;
export type GetV1EmployeesEmployeeIdJobsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Available options:
     *
     * @remarks
     * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
     */
    include?: GetV1EmployeesEmployeeIdJobsQueryParamInclude | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdJobsResponse = {
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
    jobList?: Array<components.Job> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdJobsQueryParamInclude$inboundSchema: z.ZodNativeEnum<typeof GetV1EmployeesEmployeeIdJobsQueryParamInclude>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdJobsQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1EmployeesEmployeeIdJobsQueryParamInclude>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdJobsQueryParamInclude$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdJobsQueryParamInclude$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
    }>;
    /** @deprecated use `GetV1EmployeesEmployeeIdJobsQueryParamInclude$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
    }>;
}
/** @internal */
export declare const GetV1EmployeesEmployeeIdJobsRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdJobsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdJobsRequest$Outbound = {
    employee_id: string;
    page?: number | undefined;
    per?: number | undefined;
    include?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdJobsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdJobsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdJobsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdJobsRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdJobsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdJobsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdJobsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdJobsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdJobsRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdJobsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdJobsRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdJobsRequestToJSON(getV1EmployeesEmployeeIdJobsRequest: GetV1EmployeesEmployeeIdJobsRequest): string;
export declare function getV1EmployeesEmployeeIdJobsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdJobsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdJobsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdJobsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdJobsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Job-List"?: Array<components.Job$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdJobsResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdJobsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdJobsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdJobsResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdJobsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdJobsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdJobsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdJobsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdJobsResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdJobsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdJobsResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdJobsResponseToJSON(getV1EmployeesEmployeeIdJobsResponse: GetV1EmployeesEmployeeIdJobsResponse): string;
export declare function getV1EmployeesEmployeeIdJobsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdJobsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidjobs.d.ts.map