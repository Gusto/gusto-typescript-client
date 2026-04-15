import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeCustomField } from "../components/employeecustomfield.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdCustomFieldsRequest = {
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
/**
 * OK
 */
export type GetV1EmployeesEmployeeIdCustomFieldsResponseBody = {
    customFields?: Array<EmployeeCustomField> | undefined;
};
export type GetV1EmployeesEmployeeIdCustomFieldsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * OK
     */
    object?: GetV1EmployeesEmployeeIdCustomFieldsResponseBody | undefined;
};
/** @internal */
export type GetV1EmployeesEmployeeIdCustomFieldsRequest$Outbound = {
    employee_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdCustomFieldsRequest>;
export declare function getV1EmployeesEmployeeIdCustomFieldsRequestToJSON(getV1EmployeesEmployeeIdCustomFieldsRequest: GetV1EmployeesEmployeeIdCustomFieldsRequest): string;
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsResponseBody$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponseBody, z.ZodTypeDef, unknown>;
export declare function getV1EmployeesEmployeeIdCustomFieldsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdCustomFieldsResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdCustomFieldsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdCustomFieldsResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeesEmployeeIdCustomFieldsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdCustomFieldsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidcustomfields.d.ts.map