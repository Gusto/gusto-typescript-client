import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { Frequency, GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion, GetV1CompaniesCompanyIdPaySchedulesPreviewRequest } from "../models/operations/getv1companiescompanyidpayschedulespreview.js";
import { RFCDate } from "../types/rfcdate.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildPaySchedulesGetPreviewQuery, PaySchedulesGetPreviewQueryData, prefetchPaySchedulesGetPreview, queryKeyPaySchedulesGetPreview } from "./paySchedulesGetPreview.core.js";
export { buildPaySchedulesGetPreviewQuery, type PaySchedulesGetPreviewQueryData, prefetchPaySchedulesGetPreview, queryKeyPaySchedulesGetPreview, };
export type PaySchedulesGetPreviewQueryError = NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Preview pay schedule dates
 *
 * @remarks
 * Returns a preview of pay period dates and holidays for the given parameters (e.g. frequency, anchor pay date) for the next 18 months. Use this before creating or updating a pay schedule to show expected check dates and payroll deadlines.
 *
 * ### Related guides
 * - [Create a pay schedule](doc:create-a-pay-schedule)
 * - [Manage Pay Schedules via API](doc:manage-pay-schedules-api)
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesGetPreview(request: GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: QueryHookOptions<PaySchedulesGetPreviewQueryData, PaySchedulesGetPreviewQueryError>): UseQueryResult<PaySchedulesGetPreviewQueryData, PaySchedulesGetPreviewQueryError>;
/**
 * Preview pay schedule dates
 *
 * @remarks
 * Returns a preview of pay period dates and holidays for the given parameters (e.g. frequency, anchor pay date) for the next 18 months. Use this before creating or updating a pay schedule to show expected check dates and payroll deadlines.
 *
 * ### Related guides
 * - [Create a pay schedule](doc:create-a-pay-schedule)
 * - [Manage Pay Schedules via API](doc:manage-pay-schedules-api)
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesGetPreviewSuspense(request: GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetPreviewQueryData, PaySchedulesGetPreviewQueryError>): UseSuspenseQueryResult<PaySchedulesGetPreviewQueryData, PaySchedulesGetPreviewQueryError>;
export declare function setPaySchedulesGetPreviewData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion | undefined;
        frequency: Frequency;
        anchorPayDate: RFCDate;
        anchorEndOfPayPeriod: RFCDate;
        day1?: number | undefined;
        day2?: number | undefined;
        endDate?: RFCDate | undefined;
    }
], data: PaySchedulesGetPreviewQueryData): PaySchedulesGetPreviewQueryData | undefined;
export declare function invalidatePaySchedulesGetPreview(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion | undefined;
        frequency: Frequency;
        anchorPayDate: RFCDate;
        anchorEndOfPayPeriod: RFCDate;
        day1?: number | undefined;
        day2?: number | undefined;
        endDate?: RFCDate | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetPreview(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=paySchedulesGetPreview.d.ts.map