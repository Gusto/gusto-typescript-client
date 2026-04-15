import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyCustomFieldList } from "../components/companycustomfieldlist.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdCustomFieldsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
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
export type GetV1CompaniesCompanyIdCustomFieldsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    companyCustomFieldList?: CompanyCustomFieldList | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound = {
    company_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdCustomFieldsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCustomFieldsRequest>;
export declare function getV1CompaniesCompanyIdCustomFieldsRequestToJSON(getV1CompaniesCompanyIdCustomFieldsRequest: GetV1CompaniesCompanyIdCustomFieldsRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdCustomFieldsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCustomFieldsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdCustomFieldsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdCustomFieldsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidcustomfields.d.ts.map