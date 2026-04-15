import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ExternalPayroll } from "../components/externalpayroll.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1ExternalPayrollRequestBody = {
    /**
     * External payroll's check date.
     */
    checkDate: string;
    /**
     * External payroll's pay period start date.
     */
    paymentPeriodStartDate: string;
    /**
     * External payroll's pay period end date.
     */
    paymentPeriodEndDate: string;
};
export type PostV1ExternalPayrollRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1ExternalPayrollRequestBody;
};
export type PostV1ExternalPayrollResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    externalPayroll?: ExternalPayroll | undefined;
};
/** @internal */
export type PostV1ExternalPayrollRequestBody$Outbound = {
    check_date: string;
    payment_period_start_date: string;
    payment_period_end_date: string;
};
/** @internal */
export declare const PostV1ExternalPayrollRequestBody$outboundSchema: z.ZodType<PostV1ExternalPayrollRequestBody$Outbound, z.ZodTypeDef, PostV1ExternalPayrollRequestBody>;
export declare function postV1ExternalPayrollRequestBodyToJSON(postV1ExternalPayrollRequestBody: PostV1ExternalPayrollRequestBody): string;
/** @internal */
export type PostV1ExternalPayrollRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1ExternalPayrollRequestBody$Outbound;
};
/** @internal */
export declare const PostV1ExternalPayrollRequest$outboundSchema: z.ZodType<PostV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, PostV1ExternalPayrollRequest>;
export declare function postV1ExternalPayrollRequestToJSON(postV1ExternalPayrollRequest: PostV1ExternalPayrollRequest): string;
/** @internal */
export declare const PostV1ExternalPayrollResponse$inboundSchema: z.ZodType<PostV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
export declare function postV1ExternalPayrollResponseFromJSON(jsonString: string): SafeParseResult<PostV1ExternalPayrollResponse, SDKValidationError>;
//# sourceMappingURL=postv1externalpayroll.d.ts.map