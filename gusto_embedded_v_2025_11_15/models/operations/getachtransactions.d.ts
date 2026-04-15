import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetAchTransactionsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the contractor payment
     */
    contractorPaymentUuid?: string | undefined;
    /**
     * The UUID of the payroll
     */
    payrollUuid?: string | undefined;
    /**
     * Used to filter the ACH transactions to only include those with a specific transaction type, such as "Credit employee pay".
     */
    transactionType?: string | undefined;
    /**
     * Used to filter the ACH transactions to only include those with a specific payment direction, either "credit" or "debit".
     */
    paymentDirection?: string | undefined;
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
export type GetAchTransactionsResponse = {
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
    achTransactionList?: Array<components.AchTransaction> | undefined;
};
/** @internal */
export declare const GetAchTransactionsRequest$inboundSchema: z.ZodType<GetAchTransactionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAchTransactionsRequest$Outbound = {
    company_uuid: string;
    contractor_payment_uuid?: string | undefined;
    payroll_uuid?: string | undefined;
    transaction_type?: string | undefined;
    payment_direction?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetAchTransactionsRequest$outboundSchema: z.ZodType<GetAchTransactionsRequest$Outbound, z.ZodTypeDef, GetAchTransactionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAchTransactionsRequest$ {
    /** @deprecated use `GetAchTransactionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAchTransactionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAchTransactionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAchTransactionsRequest$Outbound, z.ZodTypeDef, GetAchTransactionsRequest>;
    /** @deprecated use `GetAchTransactionsRequest$Outbound` instead. */
    type Outbound = GetAchTransactionsRequest$Outbound;
}
export declare function getAchTransactionsRequestToJSON(getAchTransactionsRequest: GetAchTransactionsRequest): string;
export declare function getAchTransactionsRequestFromJSON(jsonString: string): SafeParseResult<GetAchTransactionsRequest, SDKValidationError>;
/** @internal */
export declare const GetAchTransactionsResponse$inboundSchema: z.ZodType<GetAchTransactionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAchTransactionsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Ach-Transaction-List"?: Array<components.AchTransaction$Outbound> | undefined;
};
/** @internal */
export declare const GetAchTransactionsResponse$outboundSchema: z.ZodType<GetAchTransactionsResponse$Outbound, z.ZodTypeDef, GetAchTransactionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAchTransactionsResponse$ {
    /** @deprecated use `GetAchTransactionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAchTransactionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAchTransactionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAchTransactionsResponse$Outbound, z.ZodTypeDef, GetAchTransactionsResponse>;
    /** @deprecated use `GetAchTransactionsResponse$Outbound` instead. */
    type Outbound = GetAchTransactionsResponse$Outbound;
}
export declare function getAchTransactionsResponseToJSON(getAchTransactionsResponse: GetAchTransactionsResponse): string;
export declare function getAchTransactionsResponseFromJSON(jsonString: string): SafeParseResult<GetAchTransactionsResponse, SDKValidationError>;
//# sourceMappingURL=getachtransactions.d.ts.map