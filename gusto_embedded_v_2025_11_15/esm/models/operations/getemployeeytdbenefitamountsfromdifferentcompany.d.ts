import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { YtdBenefitAmountsFromDifferentCompany } from "../components/ytdbenefitamountsfromdifferentcompany.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The tax year for which to retrieve YTD benefit amounts. Defaults to current year if not specified.
     */
    taxYear?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse = {
    httpMeta: HTTPMetadata;
    /**
     * List of Ytd Benefit Amounts From Different Company List
     */
    ytdBenefitAmountsFromDifferentCompanyList?: Array<YtdBenefitAmountsFromDifferentCompany> | undefined;
};
/** @internal */
export type GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound = {
    employee_id: string;
    tax_year?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$outboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound, z.ZodTypeDef, GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest>;
export declare function getEmployeeYtdBenefitAmountsFromDifferentCompanyRequestToJSON(getEmployeeYtdBenefitAmountsFromDifferentCompanyRequest: GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest): string;
/** @internal */
export declare const GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$inboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, z.ZodTypeDef, unknown>;
export declare function getEmployeeYtdBenefitAmountsFromDifferentCompanyResponseFromJSON(jsonString: string): SafeParseResult<GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, SDKValidationError>;
//# sourceMappingURL=getemployeeytdbenefitamountsfromdifferentcompany.d.ts.map