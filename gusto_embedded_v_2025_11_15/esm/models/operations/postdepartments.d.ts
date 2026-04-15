import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Department } from "../components/department.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostDepartmentsRequestBody = {
    title?: string | undefined;
};
export type PostDepartmentsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostDepartmentsRequestBody;
};
export type PostDepartmentsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Department Object Example
     */
    department?: Department | undefined;
};
/** @internal */
export type PostDepartmentsRequestBody$Outbound = {
    title?: string | undefined;
};
/** @internal */
export declare const PostDepartmentsRequestBody$outboundSchema: z.ZodType<PostDepartmentsRequestBody$Outbound, z.ZodTypeDef, PostDepartmentsRequestBody>;
export declare function postDepartmentsRequestBodyToJSON(postDepartmentsRequestBody: PostDepartmentsRequestBody): string;
/** @internal */
export type PostDepartmentsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostDepartmentsRequestBody$Outbound;
};
/** @internal */
export declare const PostDepartmentsRequest$outboundSchema: z.ZodType<PostDepartmentsRequest$Outbound, z.ZodTypeDef, PostDepartmentsRequest>;
export declare function postDepartmentsRequestToJSON(postDepartmentsRequest: PostDepartmentsRequest): string;
/** @internal */
export declare const PostDepartmentsResponse$inboundSchema: z.ZodType<PostDepartmentsResponse, z.ZodTypeDef, unknown>;
export declare function postDepartmentsResponseFromJSON(jsonString: string): SafeParseResult<PostDepartmentsResponse, SDKValidationError>;
//# sourceMappingURL=postdepartments.d.ts.map