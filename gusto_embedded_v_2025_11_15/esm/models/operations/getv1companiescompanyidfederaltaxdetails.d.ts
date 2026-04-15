import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { FederalTaxDetails } from "../components/federaltaxdetails.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdFederalTaxDetailsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdFederalTaxDetailsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    federalTaxDetails?: FederalTaxDetails | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdFederalTaxDetailsRequest>;
export declare function getV1CompaniesCompanyIdFederalTaxDetailsRequestToJSON(getV1CompaniesCompanyIdFederalTaxDetailsRequest: GetV1CompaniesCompanyIdFederalTaxDetailsRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdFederalTaxDetailsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdFederalTaxDetailsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidfederaltaxdetails.d.ts.map