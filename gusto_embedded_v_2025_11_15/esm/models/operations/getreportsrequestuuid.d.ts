import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Report } from "../components/report.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetReportsRequestUuidRequest = {
    /**
     * The UUID of the request to generate a document. Generate document endpoints return request_uuids to be used with the GET generated document endpoint.
     */
    requestUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetReportsRequestUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    report?: Report | undefined;
};
/** @internal */
export type GetReportsRequestUuidRequest$Outbound = {
    request_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetReportsRequestUuidRequest$outboundSchema: z.ZodType<GetReportsRequestUuidRequest$Outbound, z.ZodTypeDef, GetReportsRequestUuidRequest>;
export declare function getReportsRequestUuidRequestToJSON(getReportsRequestUuidRequest: GetReportsRequestUuidRequest): string;
/** @internal */
export declare const GetReportsRequestUuidResponse$inboundSchema: z.ZodType<GetReportsRequestUuidResponse, z.ZodTypeDef, unknown>;
export declare function getReportsRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<GetReportsRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=getreportsrequestuuid.d.ts.map