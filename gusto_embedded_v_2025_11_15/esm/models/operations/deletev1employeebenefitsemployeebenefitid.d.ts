import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest = {
    /**
     * The UUID of the employee benefit.
     */
    employeeBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound = {
    employee_benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest>;
export declare function deleteV1EmployeeBenefitsEmployeeBenefitIdRequestToJSON(deleteV1EmployeeBenefitsEmployeeBenefitIdRequest: DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest): string;
/** @internal */
export declare const DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1EmployeeBenefitsEmployeeBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeebenefitsemployeebenefitid.d.ts.map