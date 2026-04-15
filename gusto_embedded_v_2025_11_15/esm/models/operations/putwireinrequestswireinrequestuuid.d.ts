import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { WireInRequest } from "../components/wireinrequest.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutWireInRequestsWireInRequestUuidRequestBody = {
    /**
     * The date the wire was sent
     */
    dateSent: string;
    /**
     * Name of the bank sending the wire
     */
    bankName: string;
    /**
     * Amount of money sent
     */
    amountSent: string;
    /**
     * Additional notes
     */
    additionalNotes?: string | undefined;
};
export type PutWireInRequestsWireInRequestUuidRequest = {
    /**
     * The UUID of the Wire In Request
     */
    wireInRequestUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutWireInRequestsWireInRequestUuidRequestBody;
};
export type PutWireInRequestsWireInRequestUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    wireInRequest?: WireInRequest | undefined;
};
/** @internal */
export type PutWireInRequestsWireInRequestUuidRequestBody$Outbound = {
    date_sent: string;
    bank_name: string;
    amount_sent: string;
    additional_notes?: string | undefined;
};
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidRequestBody$outboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequestBody$Outbound, z.ZodTypeDef, PutWireInRequestsWireInRequestUuidRequestBody>;
export declare function putWireInRequestsWireInRequestUuidRequestBodyToJSON(putWireInRequestsWireInRequestUuidRequestBody: PutWireInRequestsWireInRequestUuidRequestBody): string;
/** @internal */
export type PutWireInRequestsWireInRequestUuidRequest$Outbound = {
    wire_in_request_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutWireInRequestsWireInRequestUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidRequest$outboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequest$Outbound, z.ZodTypeDef, PutWireInRequestsWireInRequestUuidRequest>;
export declare function putWireInRequestsWireInRequestUuidRequestToJSON(putWireInRequestsWireInRequestUuidRequest: PutWireInRequestsWireInRequestUuidRequest): string;
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidResponse$inboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
export declare function putWireInRequestsWireInRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<PutWireInRequestsWireInRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=putwireinrequestswireinrequestuuid.d.ts.map