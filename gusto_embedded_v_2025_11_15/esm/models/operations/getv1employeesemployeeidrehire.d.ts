import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Rehire } from "../components/rehire.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdRehireRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdRehireResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    rehire?: Rehire | undefined;
};
/** @internal */
export type GetV1EmployeesEmployeeIdRehireRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdRehireRequest>;
export declare function getV1EmployeesEmployeeIdRehireRequestToJSON(getV1EmployeesEmployeeIdRehireRequest: GetV1EmployeesEmployeeIdRehireRequest): string;
/** @internal */
export declare const GetV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeesEmployeeIdRehireResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdRehireResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidrehire.d.ts.map