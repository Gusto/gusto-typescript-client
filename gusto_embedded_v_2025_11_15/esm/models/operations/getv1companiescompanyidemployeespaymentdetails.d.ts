import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeePaymentDetail } from "../components/employeepaymentdetail.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdEmployeesPaymentDetailsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of a specific employee to fetch payment details for.
     */
    employeeUuid?: string | undefined;
    /**
     * The UUID of a specific payroll to fetch payment details for employees on that payroll.
     */
    payrollUuid?: string | undefined;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdEmployeesPaymentDetailsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * A list of employee payment details.
     */
    employeePaymentDetailsList?: Array<EmployeePaymentDetail> | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyIdEmployeesPaymentDetailsRequest$Outbound = {
    company_id: string;
    employee_uuid?: string | undefined;
    payroll_uuid?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdEmployeesPaymentDetailsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesPaymentDetailsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEmployeesPaymentDetailsRequest>;
export declare function getV1CompaniesCompanyIdEmployeesPaymentDetailsRequestToJSON(getV1CompaniesCompanyIdEmployeesPaymentDetailsRequest: GetV1CompaniesCompanyIdEmployeesPaymentDetailsRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdEmployeesPaymentDetailsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEmployeesPaymentDetailsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdEmployeesPaymentDetailsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdEmployeesPaymentDetailsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidemployeespaymentdetails.d.ts.map