import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Garnishment } from "../components/garnishment.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdGarnishmentsRequest = {
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
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdGarnishmentsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    garnishmentList?: Array<Garnishment> | undefined;
};
/** @internal */
export type GetV1EmployeesEmployeeIdGarnishmentsRequest$Outbound = {
    employee_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdGarnishmentsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdGarnishmentsRequest>;
export declare function getV1EmployeesEmployeeIdGarnishmentsRequestToJSON(getV1EmployeesEmployeeIdGarnishmentsRequest: GetV1EmployeesEmployeeIdGarnishmentsRequest): string;
/** @internal */
export declare const GetV1EmployeesEmployeeIdGarnishmentsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdGarnishmentsResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeesEmployeeIdGarnishmentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdGarnishmentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidgarnishments.d.ts.map