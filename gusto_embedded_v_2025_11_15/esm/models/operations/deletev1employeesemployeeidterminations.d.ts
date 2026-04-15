import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeesEmployeeIdTerminationsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteV1EmployeesEmployeeIdTerminationsResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdTerminationsRequest$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdTerminationsRequest>;
export declare function deleteV1EmployeesEmployeeIdTerminationsRequestToJSON(deleteV1EmployeesEmployeeIdTerminationsRequest: DeleteV1EmployeesEmployeeIdTerminationsRequest): string;
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdTerminationsResponse$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1EmployeesEmployeeIdTerminationsResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdTerminationsResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeesemployeeidterminations.d.ts.map