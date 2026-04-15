import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Admin } from "../components/admin.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdAdminsRequest = {
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
export type GetV1CompaniesCompanyIdAdminsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    adminList?: Array<Admin> | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyIdAdminsRequest$Outbound = {
    company_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdAdminsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdAdminsRequest>;
export declare function getV1CompaniesCompanyIdAdminsRequestToJSON(getV1CompaniesCompanyIdAdminsRequest: GetV1CompaniesCompanyIdAdminsRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdAdminsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdAdminsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdAdminsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdAdminsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidadmins.d.ts.map