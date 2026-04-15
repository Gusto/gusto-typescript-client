import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RedebitRecoveryCaseRequest = {
    /**
     * The UUID of the recovery case
     */
    recoveryCaseUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type RedebitRecoveryCaseResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type RedebitRecoveryCaseRequest$Outbound = {
    recovery_case_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const RedebitRecoveryCaseRequest$outboundSchema: z.ZodType<RedebitRecoveryCaseRequest$Outbound, z.ZodTypeDef, RedebitRecoveryCaseRequest>;
export declare function redebitRecoveryCaseRequestToJSON(redebitRecoveryCaseRequest: RedebitRecoveryCaseRequest): string;
/** @internal */
export declare const RedebitRecoveryCaseResponse$inboundSchema: z.ZodType<RedebitRecoveryCaseResponse, z.ZodTypeDef, unknown>;
export declare function redebitRecoveryCaseResponseFromJSON(jsonString: string): SafeParseResult<RedebitRecoveryCaseResponse, SDKValidationError>;
//# sourceMappingURL=redebitrecoverycase.d.ts.map