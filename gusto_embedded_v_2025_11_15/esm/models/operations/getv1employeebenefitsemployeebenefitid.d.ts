import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeBenefit } from "../components/employeebenefit.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeeBenefitsEmployeeBenefitIdRequest = {
    /**
     * The UUID of the employee benefit.
     */
    employeeBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1EmployeeBenefitsEmployeeBenefitIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employeeBenefit?: EmployeeBenefit | undefined;
};
/** @internal */
export type GetV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound = {
    employee_benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1EmployeeBenefitsEmployeeBenefitIdRequest>;
export declare function getV1EmployeeBenefitsEmployeeBenefitIdRequestToJSON(getV1EmployeeBenefitsEmployeeBenefitIdRequest: GetV1EmployeeBenefitsEmployeeBenefitIdRequest): string;
/** @internal */
export declare const GetV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeeBenefitsEmployeeBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeBenefitsEmployeeBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeebenefitsemployeebenefitid.d.ts.map