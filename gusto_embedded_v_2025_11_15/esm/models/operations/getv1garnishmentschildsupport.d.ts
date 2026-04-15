import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ChildSupportData } from "../components/childsupportdata.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1GarnishmentsChildSupportRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1GarnishmentsChildSupportResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    childSupportData?: ChildSupportData | undefined;
};
/** @internal */
export type GetV1GarnishmentsChildSupportRequest$Outbound = {
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1GarnishmentsChildSupportRequest$outboundSchema: z.ZodType<GetV1GarnishmentsChildSupportRequest$Outbound, z.ZodTypeDef, GetV1GarnishmentsChildSupportRequest>;
export declare function getV1GarnishmentsChildSupportRequestToJSON(getV1GarnishmentsChildSupportRequest: GetV1GarnishmentsChildSupportRequest): string;
/** @internal */
export declare const GetV1GarnishmentsChildSupportResponse$inboundSchema: z.ZodType<GetV1GarnishmentsChildSupportResponse, z.ZodTypeDef, unknown>;
export declare function getV1GarnishmentsChildSupportResponseFromJSON(jsonString: string): SafeParseResult<GetV1GarnishmentsChildSupportResponse, SDKValidationError>;
//# sourceMappingURL=getv1garnishmentschildsupport.d.ts.map