import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PayScheduleAssignment } from "../components/payscheduleassignment.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    payScheduleAssignment?: PayScheduleAssignment | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest>;
export declare function getV1CompaniesCompanyIdPaySchedulesAssignmentsRequestToJSON(getV1CompaniesCompanyIdPaySchedulesAssignmentsRequest: GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdPaySchedulesAssignmentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayschedulesassignments.d.ts.map