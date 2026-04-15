import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdContractorPaymentsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The time period for which to retrieve contractor payments
     */
    startDate: string;
    /**
     * The time period for which to retrieve contractor payments. If left empty, defaults to today's date.
     */
    endDate: string;
    /**
     * The UUID of the contractor. When specified, will load all payments for that contractor.
     */
    contractorUuid?: string | undefined;
    /**
     * Display contractor payments results group by check date if set to true.
     */
    groupByDate?: boolean | undefined;
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
/**
 * A JSON object containing contractor payments information
 */
export type GetV1CompaniesCompanyIdContractorPaymentsResponseBody = components.ContractorPaymentSummary | components.ContractorPaymentSummaryByDates;
export type GetV1CompaniesCompanyIdContractorPaymentsResponse = {
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
     * A JSON object containing contractor payments information
     */
    oneOf?: components.ContractorPaymentSummary | components.ContractorPaymentSummaryByDates | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound = {
    company_id: string;
    start_date: string;
    end_date: string;
    contractor_uuid?: string | undefined;
    group_by_date?: boolean | undefined;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdContractorPaymentsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdContractorPaymentsRequestToJSON(getV1CompaniesCompanyIdContractorPaymentsRequest: GetV1CompaniesCompanyIdContractorPaymentsRequest): string;
export declare function getV1CompaniesCompanyIdContractorPaymentsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdContractorPaymentsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentsResponseBody$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound = components.ContractorPaymentSummary$Outbound | components.ContractorPaymentSummaryByDates$Outbound;
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentsResponseBody$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentsResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdContractorPaymentsResponseBody$ {
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentsResponseBody>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound;
}
export declare function getV1CompaniesCompanyIdContractorPaymentsResponseBodyToJSON(getV1CompaniesCompanyIdContractorPaymentsResponseBody: GetV1CompaniesCompanyIdContractorPaymentsResponseBody): string;
export declare function getV1CompaniesCompanyIdContractorPaymentsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdContractorPaymentsResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    oneOf?: components.ContractorPaymentSummary$Outbound | components.ContractorPaymentSummaryByDates$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdContractorPaymentsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdContractorPaymentsResponseToJSON(getV1CompaniesCompanyIdContractorPaymentsResponse: GetV1CompaniesCompanyIdContractorPaymentsResponse): string;
export declare function getV1CompaniesCompanyIdContractorPaymentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdContractorPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidcontractorpayments.d.ts.map