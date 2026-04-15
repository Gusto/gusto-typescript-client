import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Form } from "../components/form.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeeFormsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1EmployeeFormsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    formList?: Array<Form> | undefined;
};
/** @internal */
export type GetV1EmployeeFormsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeeFormsRequest$outboundSchema: z.ZodType<GetV1EmployeeFormsRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormsRequest>;
export declare function getV1EmployeeFormsRequestToJSON(getV1EmployeeFormsRequest: GetV1EmployeeFormsRequest): string;
/** @internal */
export declare const GetV1EmployeeFormsResponse$inboundSchema: z.ZodType<GetV1EmployeeFormsResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeeFormsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeeforms.d.ts.map