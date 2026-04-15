import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PayScheduleAssignmentBody, PayScheduleAssignmentBody$Outbound } from "../components/payscheduleassignmentbody.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdPaySchedulesAssignRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    payScheduleAssignmentBody: PayScheduleAssignmentBody;
};
export type PostV1CompaniesCompanyIdPaySchedulesAssignResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesAssignRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    "Pay-Schedule-Assignment-Body": PayScheduleAssignmentBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignRequest>;
export declare function postV1CompaniesCompanyIdPaySchedulesAssignRequestToJSON(postV1CompaniesCompanyIdPaySchedulesAssignRequest: PostV1CompaniesCompanyIdPaySchedulesAssignRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdPaySchedulesAssignResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesAssignResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidpayschedulesassign.d.ts.map