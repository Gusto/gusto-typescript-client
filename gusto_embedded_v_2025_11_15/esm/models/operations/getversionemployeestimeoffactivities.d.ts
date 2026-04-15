import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { TimeOffActivity } from "../components/timeoffactivity.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetVersionEmployeesTimeOffActivitiesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    timeOffActivity?: TimeOffActivity | undefined;
};
/** @internal */
export type GetVersionEmployeesTimeOffActivitiesRequest$Outbound = {
    employee_uuid: string;
    time_off_type: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetVersionEmployeesTimeOffActivitiesRequest$outboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesRequest$Outbound, z.ZodTypeDef, GetVersionEmployeesTimeOffActivitiesRequest>;
export declare function getVersionEmployeesTimeOffActivitiesRequestToJSON(getVersionEmployeesTimeOffActivitiesRequest: GetVersionEmployeesTimeOffActivitiesRequest): string;
/** @internal */
export declare const GetVersionEmployeesTimeOffActivitiesResponse$inboundSchema: z.ZodType<GetVersionEmployeesTimeOffActivitiesResponse, z.ZodTypeDef, unknown>;
export declare function getVersionEmployeesTimeOffActivitiesResponseFromJSON(jsonString: string): SafeParseResult<GetVersionEmployeesTimeOffActivitiesResponse, SDKValidationError>;
//# sourceMappingURL=getversionemployeestimeoffactivities.d.ts.map