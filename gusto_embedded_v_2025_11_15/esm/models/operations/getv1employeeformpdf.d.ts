import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { FormPdf } from "../components/formpdf.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeeFormPdfRequest = {
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
export type GetV1EmployeeFormPdfResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    formPdf?: FormPdf | undefined;
};
/** @internal */
export type GetV1EmployeeFormPdfRequest$Outbound = {
    employee_id: string;
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeeFormPdfRequest$outboundSchema: z.ZodType<GetV1EmployeeFormPdfRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormPdfRequest>;
export declare function getV1EmployeeFormPdfRequestToJSON(getV1EmployeeFormPdfRequest: GetV1EmployeeFormPdfRequest): string;
/** @internal */
export declare const GetV1EmployeeFormPdfResponse$inboundSchema: z.ZodType<GetV1EmployeeFormPdfResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeeFormPdfResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormPdfResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeeformpdf.d.ts.map