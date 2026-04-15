import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ExternalPayrollBasic } from "../components/externalpayrollbasic.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyExternalPayrollsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompanyExternalPayrollsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    externalPayrollList?: Array<ExternalPayrollBasic> | undefined;
};
/** @internal */
export type GetV1CompanyExternalPayrollsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyExternalPayrollsRequest$outboundSchema: z.ZodType<GetV1CompanyExternalPayrollsRequest$Outbound, z.ZodTypeDef, GetV1CompanyExternalPayrollsRequest>;
export declare function getV1CompanyExternalPayrollsRequestToJSON(getV1CompanyExternalPayrollsRequest: GetV1CompanyExternalPayrollsRequest): string;
/** @internal */
export declare const GetV1CompanyExternalPayrollsResponse$inboundSchema: z.ZodType<GetV1CompanyExternalPayrollsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyExternalPayrollsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyExternalPayrollsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyexternalpayrolls.d.ts.map