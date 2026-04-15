import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EarningTypeList } from "../components/earningtypelist.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdEarningTypesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdEarningTypesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    earningTypeList?: EarningTypeList | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyIdEarningTypesRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdEarningTypesRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdEarningTypesRequest>;
export declare function getV1CompaniesCompanyIdEarningTypesRequestToJSON(getV1CompaniesCompanyIdEarningTypesRequest: GetV1CompaniesCompanyIdEarningTypesRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdEarningTypesResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdEarningTypesResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdEarningTypesResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdEarningTypesResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidearningtypes.d.ts.map