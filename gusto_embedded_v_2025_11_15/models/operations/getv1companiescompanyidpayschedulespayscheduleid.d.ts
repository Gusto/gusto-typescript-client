import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the pay schedule
     */
    payScheduleId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse = {
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
    paySchedule?: components.PaySchedule | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound = {
    company_id: string;
    pay_schedule_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestToJSON(getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest): string;
export declare function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Pay-Schedule"?: components.PaySchedule$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponseToJSON(getV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse): string;
export declare function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayschedulespayscheduleid.d.ts.map