import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Garnishment } from "../components/garnishment.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1GarnishmentsGarnishmentIdRequest = {
    /**
     * The UUID of the garnishment
     */
    garnishmentId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1GarnishmentsGarnishmentIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    garnishment?: Garnishment | undefined;
};
/** @internal */
export type GetV1GarnishmentsGarnishmentIdRequest$Outbound = {
    garnishment_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1GarnishmentsGarnishmentIdRequest$outboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdRequest$Outbound, z.ZodTypeDef, GetV1GarnishmentsGarnishmentIdRequest>;
export declare function getV1GarnishmentsGarnishmentIdRequestToJSON(getV1GarnishmentsGarnishmentIdRequest: GetV1GarnishmentsGarnishmentIdRequest): string;
/** @internal */
export declare const GetV1GarnishmentsGarnishmentIdResponse$inboundSchema: z.ZodType<GetV1GarnishmentsGarnishmentIdResponse, z.ZodTypeDef, unknown>;
export declare function getV1GarnishmentsGarnishmentIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1GarnishmentsGarnishmentIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1garnishmentsgarnishmentid.d.ts.map