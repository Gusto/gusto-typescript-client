import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { GeneralLedgerReport } from "../components/generalledgerreport.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The breakdown of the report. Use 'default' for no split.
 */
export declare const Aggregation: {
    readonly Default: "default";
    readonly Job: "job";
    readonly Department: "department";
    readonly Integration: "integration";
};
/**
 * The breakdown of the report. Use 'default' for no split.
 */
export type Aggregation = ClosedEnum<typeof Aggregation>;
/**
 * The kind of integration set up for the company. Required when `aggregation` is 'integration'. Must be null if `aggregation` is not 'integration'.
 */
export declare const IntegrationType: {
    readonly Xero: "xero";
    readonly Qbo: "qbo";
};
/**
 * The kind of integration set up for the company. Required when `aggregation` is 'integration'. Must be null if `aggregation` is not 'integration'.
 */
export type IntegrationType = ClosedEnum<typeof IntegrationType>;
export type PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody = {
    /**
     * The breakdown of the report. Use 'default' for no split.
     */
    aggregation: Aggregation;
    /**
     * The kind of integration set up for the company. Required when `aggregation` is 'integration'. Must be null if `aggregation` is not 'integration'.
     */
    integrationType?: IntegrationType | null | undefined;
};
export type PostPayrollsPayrollUuidReportsGeneralLedgerRequest = {
    /**
     * The UUID of the payroll
     */
    payrollUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody;
};
export type PostPayrollsPayrollUuidReportsGeneralLedgerResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful response for general ledger report generation
     */
    generalLedgerReport?: GeneralLedgerReport | undefined;
};
/** @internal */
export declare const Aggregation$outboundSchema: z.ZodNativeEnum<typeof Aggregation>;
/** @internal */
export declare const IntegrationType$outboundSchema: z.ZodNativeEnum<typeof IntegrationType>;
/** @internal */
export type PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody$Outbound = {
    aggregation: string;
    integration_type?: string | null | undefined;
};
/** @internal */
export declare const PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody$outboundSchema: z.ZodType<PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody$Outbound, z.ZodTypeDef, PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody>;
export declare function postPayrollsPayrollUuidReportsGeneralLedgerRequestBodyToJSON(postPayrollsPayrollUuidReportsGeneralLedgerRequestBody: PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody): string;
/** @internal */
export type PostPayrollsPayrollUuidReportsGeneralLedgerRequest$Outbound = {
    payroll_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostPayrollsPayrollUuidReportsGeneralLedgerRequestBody$Outbound;
};
/** @internal */
export declare const PostPayrollsPayrollUuidReportsGeneralLedgerRequest$outboundSchema: z.ZodType<PostPayrollsPayrollUuidReportsGeneralLedgerRequest$Outbound, z.ZodTypeDef, PostPayrollsPayrollUuidReportsGeneralLedgerRequest>;
export declare function postPayrollsPayrollUuidReportsGeneralLedgerRequestToJSON(postPayrollsPayrollUuidReportsGeneralLedgerRequest: PostPayrollsPayrollUuidReportsGeneralLedgerRequest): string;
/** @internal */
export declare const PostPayrollsPayrollUuidReportsGeneralLedgerResponse$inboundSchema: z.ZodType<PostPayrollsPayrollUuidReportsGeneralLedgerResponse, z.ZodTypeDef, unknown>;
export declare function postPayrollsPayrollUuidReportsGeneralLedgerResponseFromJSON(jsonString: string): SafeParseResult<PostPayrollsPayrollUuidReportsGeneralLedgerResponse, SDKValidationError>;
//# sourceMappingURL=postpayrollspayrolluuidreportsgeneralledger.d.ts.map