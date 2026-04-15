import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteDepartmentRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteDepartmentResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteDepartmentRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteDepartmentRequest$outboundSchema: z.ZodType<DeleteDepartmentRequest$Outbound, z.ZodTypeDef, DeleteDepartmentRequest>;
export declare function deleteDepartmentRequestToJSON(deleteDepartmentRequest: DeleteDepartmentRequest): string;
/** @internal */
export declare const DeleteDepartmentResponse$inboundSchema: z.ZodType<DeleteDepartmentResponse, z.ZodTypeDef, unknown>;
export declare function deleteDepartmentResponseFromJSON(jsonString: string): SafeParseResult<DeleteDepartmentResponse, SDKValidationError>;
//# sourceMappingURL=deletedepartment.d.ts.map