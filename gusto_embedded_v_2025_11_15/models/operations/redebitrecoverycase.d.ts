import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RedebitRecoveryCaseRequest = {
    /**
     * The UUID of the recovery case
     */
    recoveryCaseUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type RedebitRecoveryCaseResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};
/** @internal */
export declare const RedebitRecoveryCaseRequest$inboundSchema: z.ZodType<RedebitRecoveryCaseRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RedebitRecoveryCaseRequest$Outbound = {
    recovery_case_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const RedebitRecoveryCaseRequest$outboundSchema: z.ZodType<RedebitRecoveryCaseRequest$Outbound, z.ZodTypeDef, RedebitRecoveryCaseRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RedebitRecoveryCaseRequest$ {
    /** @deprecated use `RedebitRecoveryCaseRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RedebitRecoveryCaseRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RedebitRecoveryCaseRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RedebitRecoveryCaseRequest$Outbound, z.ZodTypeDef, RedebitRecoveryCaseRequest>;
    /** @deprecated use `RedebitRecoveryCaseRequest$Outbound` instead. */
    type Outbound = RedebitRecoveryCaseRequest$Outbound;
}
export declare function redebitRecoveryCaseRequestToJSON(redebitRecoveryCaseRequest: RedebitRecoveryCaseRequest): string;
export declare function redebitRecoveryCaseRequestFromJSON(jsonString: string): SafeParseResult<RedebitRecoveryCaseRequest, SDKValidationError>;
/** @internal */
export declare const RedebitRecoveryCaseResponse$inboundSchema: z.ZodType<RedebitRecoveryCaseResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RedebitRecoveryCaseResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const RedebitRecoveryCaseResponse$outboundSchema: z.ZodType<RedebitRecoveryCaseResponse$Outbound, z.ZodTypeDef, RedebitRecoveryCaseResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RedebitRecoveryCaseResponse$ {
    /** @deprecated use `RedebitRecoveryCaseResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RedebitRecoveryCaseResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RedebitRecoveryCaseResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RedebitRecoveryCaseResponse$Outbound, z.ZodTypeDef, RedebitRecoveryCaseResponse>;
    /** @deprecated use `RedebitRecoveryCaseResponse$Outbound` instead. */
    type Outbound = RedebitRecoveryCaseResponse$Outbound;
}
export declare function redebitRecoveryCaseResponseToJSON(redebitRecoveryCaseResponse: RedebitRecoveryCaseResponse): string;
export declare function redebitRecoveryCaseResponseFromJSON(jsonString: string): SafeParseResult<RedebitRecoveryCaseResponse, SDKValidationError>;
//# sourceMappingURL=redebitrecoverycase.d.ts.map