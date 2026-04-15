import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PaySchedule } from "../components/payschedule.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdHeaderXGustoAPIVersion>;
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdHeaderXGustoAPIVersion | undefined;
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the pay schedule
     */
    payScheduleId: string;
};
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    paySchedule?: PaySchedule | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound = {
    "X-Gusto-API-Version": string;
    company_id: string;
    pay_schedule_id: string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest>;
export declare function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestToJSON(getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayschedulespayscheduleid.d.ts.map