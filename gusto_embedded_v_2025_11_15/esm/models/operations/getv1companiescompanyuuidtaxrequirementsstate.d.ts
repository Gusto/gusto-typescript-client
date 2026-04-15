import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { TaxRequirementsState } from "../components/taxrequirementsstate.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyUuidTaxRequirementsStateRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * 2-letter US state abbreviation
     */
    state: string;
    /**
     * When true, return "new" requirement sets with valid `effective_from` dates that are available to save new effective dated values.
     */
    scheduling?: boolean | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompaniesCompanyUuidTaxRequirementsStateResponse = {
    httpMeta: HTTPMetadata;
    /**
     * OK
     */
    taxRequirementsState?: TaxRequirementsState | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound = {
    company_uuid: string;
    state: string;
    scheduling?: boolean | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsStateRequest>;
export declare function getV1CompaniesCompanyUuidTaxRequirementsStateRequestToJSON(getV1CompaniesCompanyUuidTaxRequirementsStateRequest: GetV1CompaniesCompanyUuidTaxRequirementsStateRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyUuidTaxRequirementsStateResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidTaxRequirementsStateResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyuuidtaxrequirementsstate.d.ts.map