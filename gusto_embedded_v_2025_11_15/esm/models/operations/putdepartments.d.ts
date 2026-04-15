import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Department } from "../components/department.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutDepartmentsRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    title?: string | undefined;
};
export type PutDepartmentsRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutDepartmentsRequestBody;
};
export type PutDepartmentsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Department Object Example
     */
    department?: Department | undefined;
};
/** @internal */
export type PutDepartmentsRequestBody$Outbound = {
    version: string;
    title?: string | undefined;
};
/** @internal */
export declare const PutDepartmentsRequestBody$outboundSchema: z.ZodType<PutDepartmentsRequestBody$Outbound, z.ZodTypeDef, PutDepartmentsRequestBody>;
export declare function putDepartmentsRequestBodyToJSON(putDepartmentsRequestBody: PutDepartmentsRequestBody): string;
/** @internal */
export type PutDepartmentsRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutDepartmentsRequestBody$Outbound;
};
/** @internal */
export declare const PutDepartmentsRequest$outboundSchema: z.ZodType<PutDepartmentsRequest$Outbound, z.ZodTypeDef, PutDepartmentsRequest>;
export declare function putDepartmentsRequestToJSON(putDepartmentsRequest: PutDepartmentsRequest): string;
/** @internal */
export declare const PutDepartmentsResponse$inboundSchema: z.ZodType<PutDepartmentsResponse, z.ZodTypeDef, unknown>;
export declare function putDepartmentsResponseFromJSON(jsonString: string): SafeParseResult<PutDepartmentsResponse, SDKValidationError>;
//# sourceMappingURL=putdepartments.d.ts.map