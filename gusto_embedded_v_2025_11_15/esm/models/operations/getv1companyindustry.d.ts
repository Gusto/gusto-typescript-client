import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Industry } from "../components/industry.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1CompanyIndustryHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1CompanyIndustryHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1CompanyIndustryHeaderXGustoAPIVersion>;
export type GetV1CompanyIndustryRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1CompanyIndustryHeaderXGustoAPIVersion | undefined;
};
export type GetV1CompanyIndustryResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    industry?: Industry | undefined;
};
/** @internal */
export declare const GetV1CompanyIndustryHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1CompanyIndustryHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1CompanyIndustryRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyIndustryRequest$outboundSchema: z.ZodType<GetV1CompanyIndustryRequest$Outbound, z.ZodTypeDef, GetV1CompanyIndustryRequest>;
export declare function getV1CompanyIndustryRequestToJSON(getV1CompanyIndustryRequest: GetV1CompanyIndustryRequest): string;
/** @internal */
export declare const GetV1CompanyIndustryResponse$inboundSchema: z.ZodType<GetV1CompanyIndustryResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyIndustryResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyIndustryResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyindustry.d.ts.map