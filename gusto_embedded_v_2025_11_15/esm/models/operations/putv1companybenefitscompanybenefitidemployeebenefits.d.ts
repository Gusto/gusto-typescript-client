import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeBenefit } from "../components/employeebenefit.js";
import { EmployeeBenefitForCompanyBenefit, EmployeeBenefitForCompanyBenefit$Outbound } from "../components/employeebenefitforcompanybenefit.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody = {
    /**
     * The list of employee benefits to create or update
     */
    employeeBenefits: Array<EmployeeBenefitForCompanyBenefit>;
};
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody;
};
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employeeBenefitList?: Array<EmployeeBenefit> | undefined;
};
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound = {
    employee_benefits: Array<EmployeeBenefitForCompanyBenefit$Outbound>;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody>;
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBodyToJSON(putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody): string;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound = {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest>;
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestToJSON(putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest): string;
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=putv1companybenefitscompanybenefitidemployeebenefits.d.ts.map