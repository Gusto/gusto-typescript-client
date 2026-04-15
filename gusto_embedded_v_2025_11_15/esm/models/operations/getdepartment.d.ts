import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Department } from "../components/department.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetDepartmentRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetDepartmentResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Department Object Example
     */
    department?: Department | undefined;
};
/** @internal */
export type GetDepartmentRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetDepartmentRequest$outboundSchema: z.ZodType<GetDepartmentRequest$Outbound, z.ZodTypeDef, GetDepartmentRequest>;
export declare function getDepartmentRequestToJSON(getDepartmentRequest: GetDepartmentRequest): string;
/** @internal */
export declare const GetDepartmentResponse$inboundSchema: z.ZodType<GetDepartmentResponse, z.ZodTypeDef, unknown>;
export declare function getDepartmentResponseFromJSON(jsonString: string): SafeParseResult<GetDepartmentResponse, SDKValidationError>;
//# sourceMappingURL=getdepartment.d.ts.map