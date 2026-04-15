import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyUuidTaxRequirementsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type ResponseBody = {
    /**
     * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
     */
    state: string;
    /**
     * If all requirements for the state have been satisfied such that the company can complete
     *
     * @remarks
     * onboarding, the company is `setup_complete` in the state. A company must be `setup_complete` in
     * all relevant states to complete the `state_setup` company onboarding step.
     */
    setupComplete: boolean;
};
export type GetV1CompaniesCompanyUuidTaxRequirementsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * OK
     */
    responseBodies?: Array<ResponseBody> | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsRequest>;
export declare function getV1CompaniesCompanyUuidTaxRequirementsRequestToJSON(getV1CompaniesCompanyUuidTaxRequirementsRequest: GetV1CompaniesCompanyUuidTaxRequirementsRequest): string;
/** @internal */
export declare const ResponseBody$inboundSchema: z.ZodType<ResponseBody, z.ZodTypeDef, unknown>;
export declare function responseBodyFromJSON(jsonString: string): SafeParseResult<ResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyUuidTaxRequirementsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidTaxRequirementsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyuuidtaxrequirements.d.ts.map