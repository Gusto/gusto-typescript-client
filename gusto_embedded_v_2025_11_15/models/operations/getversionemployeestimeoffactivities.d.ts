import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetVersionEmployeesTimeOffActivitiesRequest = {
    /**
     * The UUID of the employee
     */
    employeeUuid: string;
    /**
     * The time off type name you want to query data for. ex: 'sick' or 'vacation'
     */
    timeOffType: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetVersionEmployeesTimeOffActivitiesResponse = {
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
    timeOffActivity?: components.TimeOffActivity | undefined;
};
/** @internal */
export declare const GetVersionEmployeesTimeOffActivitiesRequest$inboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetVersionEmployeesTimeOffActivitiesRequest$Outbound = {
    employee_uuid: string;
    time_off_type: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetVersionEmployeesTimeOffActivitiesRequest$outboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesRequest$Outbound, z.ZodTypeDef, GetVersionEmployeesTimeOffActivitiesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetVersionEmployeesTimeOffActivitiesRequest$ {
    /** @deprecated use `GetVersionEmployeesTimeOffActivitiesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetVersionEmployeesTimeOffActivitiesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesRequest$Outbound, z.ZodTypeDef, GetVersionEmployeesTimeOffActivitiesRequest>;
    /** @deprecated use `GetVersionEmployeesTimeOffActivitiesRequest$Outbound` instead. */
    type Outbound = GetVersionEmployeesTimeOffActivitiesRequest$Outbound;
}
export declare function getVersionEmployeesTimeOffActivitiesRequestToJSON(getVersionEmployeesTimeOffActivitiesRequest: GetVersionEmployeesTimeOffActivitiesRequest): string;
export declare function getVersionEmployeesTimeOffActivitiesRequestFromJSON(jsonString: string): SafeParseResult<GetVersionEmployeesTimeOffActivitiesRequest, SDKValidationError>;
/** @internal */
export declare const GetVersionEmployeesTimeOffActivitiesResponse$inboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetVersionEmployeesTimeOffActivitiesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Activity"?: components.TimeOffActivity$Outbound | undefined;
};
/** @internal */
export declare const GetVersionEmployeesTimeOffActivitiesResponse$outboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesResponse$Outbound, z.ZodTypeDef, GetVersionEmployeesTimeOffActivitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetVersionEmployeesTimeOffActivitiesResponse$ {
    /** @deprecated use `GetVersionEmployeesTimeOffActivitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetVersionEmployeesTimeOffActivitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesResponse$Outbound, z.ZodTypeDef, GetVersionEmployeesTimeOffActivitiesResponse>;
    /** @deprecated use `GetVersionEmployeesTimeOffActivitiesResponse$Outbound` instead. */
    type Outbound = GetVersionEmployeesTimeOffActivitiesResponse$Outbound;
}
export declare function getVersionEmployeesTimeOffActivitiesResponseToJSON(getVersionEmployeesTimeOffActivitiesResponse: GetVersionEmployeesTimeOffActivitiesResponse): string;
export declare function getVersionEmployeesTimeOffActivitiesResponseFromJSON(jsonString: string): SafeParseResult<GetVersionEmployeesTimeOffActivitiesResponse, SDKValidationError>;
//# sourceMappingURL=getversionemployeestimeoffactivities.d.ts.map