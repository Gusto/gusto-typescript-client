import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { WireInRequest } from "../components/wireinrequest.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetWireInRequestsWireInRequestUuidRequest = {
    /**
     * The UUID of the Wire In Request
     */
    wireInRequestUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetWireInRequestsWireInRequestUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    wireInRequest?: WireInRequest | undefined;
};
/** @internal */
export type GetWireInRequestsWireInRequestUuidRequest$Outbound = {
    wire_in_request_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetWireInRequestsWireInRequestUuidRequest$outboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidRequest$Outbound, z.ZodTypeDef, GetWireInRequestsWireInRequestUuidRequest>;
export declare function getWireInRequestsWireInRequestUuidRequestToJSON(getWireInRequestsWireInRequestUuidRequest: GetWireInRequestsWireInRequestUuidRequest): string;
/** @internal */
export declare const GetWireInRequestsWireInRequestUuidResponse$inboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
export declare function getWireInRequestsWireInRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<GetWireInRequestsWireInRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=getwireinrequestswireinrequestuuid.d.ts.map