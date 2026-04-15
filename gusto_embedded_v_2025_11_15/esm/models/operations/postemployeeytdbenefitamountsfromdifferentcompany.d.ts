import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PostEmployeeYtdBenefitAmountsFromDifferentCompany, PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound } from "../components/postemployeeytdbenefitamountsfromdifferentcompany.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    postEmployeeYtdBenefitAmountsFromDifferentCompany: PostEmployeeYtdBenefitAmountsFromDifferentCompany;
};
export type PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    "post-employee-ytd-benefit-amounts-from-different-company": PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound;
};
/** @internal */
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$outboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound, z.ZodTypeDef, PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest>;
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyRequestToJSON(postEmployeeYtdBenefitAmountsFromDifferentCompanyRequest: PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest): string;
/** @internal */
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$inboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, z.ZodTypeDef, unknown>;
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyResponseFromJSON(jsonString: string): SafeParseResult<PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, SDKValidationError>;
//# sourceMappingURL=postemployeeytdbenefitamountsfromdifferentcompany.d.ts.map