import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Department } from "../components/department.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutRemovePeopleFromDepartmentEmployees = {
    uuid?: string | undefined;
};
export type PutRemovePeopleFromDepartmentContractors = {
    uuid?: string | undefined;
};
export type PutRemovePeopleFromDepartmentRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * Array of employees to remove from a department
     */
    employees?: Array<PutRemovePeopleFromDepartmentEmployees> | undefined;
    /**
     * Array of contractors to remove from a department
     */
    contractors?: Array<PutRemovePeopleFromDepartmentContractors> | undefined;
};
export type PutRemovePeopleFromDepartmentRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutRemovePeopleFromDepartmentRequestBody;
};
export type PutRemovePeopleFromDepartmentResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Department Object Example
     */
    department?: Department | undefined;
};
/** @internal */
export type PutRemovePeopleFromDepartmentEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentEmployees$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentEmployees$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentEmployees>;
export declare function putRemovePeopleFromDepartmentEmployeesToJSON(putRemovePeopleFromDepartmentEmployees: PutRemovePeopleFromDepartmentEmployees): string;
/** @internal */
export type PutRemovePeopleFromDepartmentContractors$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentContractors$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentContractors$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentContractors>;
export declare function putRemovePeopleFromDepartmentContractorsToJSON(putRemovePeopleFromDepartmentContractors: PutRemovePeopleFromDepartmentContractors): string;
/** @internal */
export type PutRemovePeopleFromDepartmentRequestBody$Outbound = {
    version?: string | undefined;
    employees?: Array<PutRemovePeopleFromDepartmentEmployees$Outbound> | undefined;
    contractors?: Array<PutRemovePeopleFromDepartmentContractors$Outbound> | undefined;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentRequestBody$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequestBody$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentRequestBody>;
export declare function putRemovePeopleFromDepartmentRequestBodyToJSON(putRemovePeopleFromDepartmentRequestBody: PutRemovePeopleFromDepartmentRequestBody): string;
/** @internal */
export type PutRemovePeopleFromDepartmentRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutRemovePeopleFromDepartmentRequestBody$Outbound;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentRequest$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequest$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentRequest>;
export declare function putRemovePeopleFromDepartmentRequestToJSON(putRemovePeopleFromDepartmentRequest: PutRemovePeopleFromDepartmentRequest): string;
/** @internal */
export declare const PutRemovePeopleFromDepartmentResponse$inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentResponse, z.ZodTypeDef, unknown>;
export declare function putRemovePeopleFromDepartmentResponseFromJSON(jsonString: string): SafeParseResult<PutRemovePeopleFromDepartmentResponse, SDKValidationError>;
//# sourceMappingURL=putremovepeoplefromdepartment.d.ts.map