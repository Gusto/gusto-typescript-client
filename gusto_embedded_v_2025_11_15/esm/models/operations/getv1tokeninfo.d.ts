import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { TokenInfo } from "../components/tokeninfo.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const XGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type XGustoAPIVersion = ClosedEnum<typeof XGustoAPIVersion>;
export type GetV1TokenInfoRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: XGustoAPIVersion | undefined;
};
export type GetV1TokenInfoResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Success
     */
    tokenInfo?: TokenInfo | undefined;
};
/** @internal */
export declare const XGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof XGustoAPIVersion>;
/** @internal */
export type GetV1TokenInfoRequest$Outbound = {
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1TokenInfoRequest$outboundSchema: z.ZodType<GetV1TokenInfoRequest$Outbound, z.ZodTypeDef, GetV1TokenInfoRequest>;
export declare function getV1TokenInfoRequestToJSON(getV1TokenInfoRequest: GetV1TokenInfoRequest): string;
/** @internal */
export declare const GetV1TokenInfoResponse$inboundSchema: z.ZodType<GetV1TokenInfoResponse, z.ZodTypeDef, unknown>;
export declare function getV1TokenInfoResponseFromJSON(jsonString: string): SafeParseResult<GetV1TokenInfoResponse, SDKValidationError>;
//# sourceMappingURL=getv1tokeninfo.d.ts.map