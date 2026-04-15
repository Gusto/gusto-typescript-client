import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeesEmployeeIdRehireRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteV1EmployeesEmployeeIdRehireResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1EmployeesEmployeeIdRehireRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdRehireRequest>;
export declare function deleteV1EmployeesEmployeeIdRehireRequestToJSON(deleteV1EmployeesEmployeeIdRehireRequest: DeleteV1EmployeesEmployeeIdRehireRequest): string;
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1EmployeesEmployeeIdRehireResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdRehireResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeesemployeeidrehire.d.ts.map