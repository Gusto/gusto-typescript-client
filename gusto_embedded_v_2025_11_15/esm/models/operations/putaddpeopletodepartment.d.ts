import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Department } from "../components/department.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Employees = {
    uuid?: string | undefined;
};
export type Contractors = {
    uuid?: string | undefined;
};
export type PutAddPeopleToDepartmentRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * Array of employees to add to the department
     */
    employees?: Array<Employees> | undefined;
    /**
     * Array of contractors to add to the department
     */
    contractors?: Array<Contractors> | undefined;
};
export type PutAddPeopleToDepartmentRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutAddPeopleToDepartmentRequestBody;
};
export type PutAddPeopleToDepartmentResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Department Object Example
     */
    department?: Department | undefined;
};
/** @internal */
export type Employees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const Employees$outboundSchema: z.ZodType<Employees$Outbound, z.ZodTypeDef, Employees>;
export declare function employeesToJSON(employees: Employees): string;
/** @internal */
export type Contractors$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const Contractors$outboundSchema: z.ZodType<Contractors$Outbound, z.ZodTypeDef, Contractors>;
export declare function contractorsToJSON(contractors: Contractors): string;
/** @internal */
export type PutAddPeopleToDepartmentRequestBody$Outbound = {
    version?: string | undefined;
    employees?: Array<Employees$Outbound> | undefined;
    contractors?: Array<Contractors$Outbound> | undefined;
};
/** @internal */
export declare const PutAddPeopleToDepartmentRequestBody$outboundSchema: z.ZodType<PutAddPeopleToDepartmentRequestBody$Outbound, z.ZodTypeDef, PutAddPeopleToDepartmentRequestBody>;
export declare function putAddPeopleToDepartmentRequestBodyToJSON(putAddPeopleToDepartmentRequestBody: PutAddPeopleToDepartmentRequestBody): string;
/** @internal */
export type PutAddPeopleToDepartmentRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutAddPeopleToDepartmentRequestBody$Outbound;
};
/** @internal */
export declare const PutAddPeopleToDepartmentRequest$outboundSchema: z.ZodType<PutAddPeopleToDepartmentRequest$Outbound, z.ZodTypeDef, PutAddPeopleToDepartmentRequest>;
export declare function putAddPeopleToDepartmentRequestToJSON(putAddPeopleToDepartmentRequest: PutAddPeopleToDepartmentRequest): string;
/** @internal */
export declare const PutAddPeopleToDepartmentResponse$inboundSchema: z.ZodType<PutAddPeopleToDepartmentResponse, z.ZodTypeDef, unknown>;
export declare function putAddPeopleToDepartmentResponseFromJSON(jsonString: string): SafeParseResult<PutAddPeopleToDepartmentResponse, SDKValidationError>;
//# sourceMappingURL=putaddpeopletodepartment.d.ts.map