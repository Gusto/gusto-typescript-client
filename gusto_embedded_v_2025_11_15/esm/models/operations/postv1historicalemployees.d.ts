import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Employee } from "../components/employee.js";
import { HistoricalEmployeeBody, HistoricalEmployeeBody$Outbound } from "../components/historicalemployeebody.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1HistoricalEmployeesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    /**
     * Create a historical employee.
     */
    historicalEmployeeBody: HistoricalEmployeeBody;
};
export type PostV1HistoricalEmployeesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employee?: Employee | undefined;
};
/** @internal */
export type PostV1HistoricalEmployeesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    "Historical-Employee-Body": HistoricalEmployeeBody$Outbound;
};
/** @internal */
export declare const PostV1HistoricalEmployeesRequest$outboundSchema: z.ZodType<PostV1HistoricalEmployeesRequest$Outbound, z.ZodTypeDef, PostV1HistoricalEmployeesRequest>;
export declare function postV1HistoricalEmployeesRequestToJSON(postV1HistoricalEmployeesRequest: PostV1HistoricalEmployeesRequest): string;
/** @internal */
export declare const PostV1HistoricalEmployeesResponse$inboundSchema: z.ZodType<PostV1HistoricalEmployeesResponse, z.ZodTypeDef, unknown>;
export declare function postV1HistoricalEmployeesResponseFromJSON(jsonString: string): SafeParseResult<PostV1HistoricalEmployeesResponse, SDKValidationError>;
//# sourceMappingURL=postv1historicalemployees.d.ts.map