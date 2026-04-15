import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PayScheduleAssignmentBody, PayScheduleAssignmentBody$Outbound } from "../components/payscheduleassignmentbody.js";
import { PayScheduleAssignmentPreview } from "../components/payscheduleassignmentpreview.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest = {
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
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    payScheduleAssignmentPreview?: PayScheduleAssignmentPreview | undefined;
};
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    "Pay-Schedule-Assignment-Body": PayScheduleAssignmentBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest>;
export declare function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequestToJSON(postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest: PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidpayschedulesassignmentpreview.d.ts.map