import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Example response
     */
    unprocessedTerminationPayPeriodList?: Array<components.UnprocessedTerminationPayPeriod> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequestToJSON(getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest): string;
export declare function getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Unprocessed-Termination-Pay-Period-List"?: Array<components.UnprocessedTerminationPayPeriod$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponseToJSON(getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse): string;
export declare function getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidunprocessedterminationpayperiods.d.ts.map