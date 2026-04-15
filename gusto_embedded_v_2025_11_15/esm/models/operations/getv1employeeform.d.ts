import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Form } from "../components/form.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeeFormRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1EmployeeFormResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    form?: Form | undefined;
};
/** @internal */
export type GetV1EmployeeFormRequest$Outbound = {
    employee_id: string;
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeeFormRequest$outboundSchema: z.ZodType<GetV1EmployeeFormRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormRequest>;
export declare function getV1EmployeeFormRequestToJSON(getV1EmployeeFormRequest: GetV1EmployeeFormRequest): string;
/** @internal */
export declare const GetV1EmployeeFormResponse$inboundSchema: z.ZodType<GetV1EmployeeFormResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeeFormResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeeform.d.ts.map