import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Termination } from "../components/termination.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdTerminationsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdTerminationsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    terminationList?: Array<Termination> | undefined;
};
/** @internal */
export type GetV1EmployeesEmployeeIdTerminationsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdTerminationsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdTerminationsRequest>;
export declare function getV1EmployeesEmployeeIdTerminationsRequestToJSON(getV1EmployeesEmployeeIdTerminationsRequest: GetV1EmployeesEmployeeIdTerminationsRequest): string;
/** @internal */
export declare const GetV1EmployeesEmployeeIdTerminationsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeesEmployeeIdTerminationsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdTerminationsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidterminations.d.ts.map