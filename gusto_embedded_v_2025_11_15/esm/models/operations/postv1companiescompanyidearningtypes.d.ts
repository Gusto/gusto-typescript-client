import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EarningType } from "../components/earningtype.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdEarningTypesRequestBody = {
    /**
     * The name of the custom earning type.
     */
    name: string;
};
export type PostV1CompaniesCompanyIdEarningTypesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody;
};
export type PostV1CompaniesCompanyIdEarningTypesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    earningType?: EarningType | undefined;
};
/** @internal */
export type PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound = {
    name: string;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdEarningTypesRequestBody>;
export declare function postV1CompaniesCompanyIdEarningTypesRequestBodyToJSON(postV1CompaniesCompanyIdEarningTypesRequestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody): string;
/** @internal */
export type PostV1CompaniesCompanyIdEarningTypesRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdEarningTypesRequest>;
export declare function postV1CompaniesCompanyIdEarningTypesRequestToJSON(postV1CompaniesCompanyIdEarningTypesRequest: PostV1CompaniesCompanyIdEarningTypesRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdEarningTypesResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdEarningTypesResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidearningtypes.d.ts.map