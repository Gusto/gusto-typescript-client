import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetRecoveryCasesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetRecoveryCasesResponse = {
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
    /**
     * Example response
     */
    recoveryCaseList?: Array<components.RecoveryCase> | undefined;
};
/** @internal */
export declare const GetRecoveryCasesRequest$inboundSchema: z.ZodType<GetRecoveryCasesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRecoveryCasesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetRecoveryCasesRequest$outboundSchema: z.ZodType<GetRecoveryCasesRequest$Outbound, z.ZodTypeDef, GetRecoveryCasesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetRecoveryCasesRequest$ {
    /** @deprecated use `GetRecoveryCasesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetRecoveryCasesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetRecoveryCasesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetRecoveryCasesRequest$Outbound, z.ZodTypeDef, GetRecoveryCasesRequest>;
    /** @deprecated use `GetRecoveryCasesRequest$Outbound` instead. */
    type Outbound = GetRecoveryCasesRequest$Outbound;
}
export declare function getRecoveryCasesRequestToJSON(getRecoveryCasesRequest: GetRecoveryCasesRequest): string;
export declare function getRecoveryCasesRequestFromJSON(jsonString: string): SafeParseResult<GetRecoveryCasesRequest, SDKValidationError>;
/** @internal */
export declare const GetRecoveryCasesResponse$inboundSchema: z.ZodType<GetRecoveryCasesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRecoveryCasesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Recovery-Case-List"?: Array<components.RecoveryCase$Outbound> | undefined;
};
/** @internal */
export declare const GetRecoveryCasesResponse$outboundSchema: z.ZodType<GetRecoveryCasesResponse$Outbound, z.ZodTypeDef, GetRecoveryCasesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetRecoveryCasesResponse$ {
    /** @deprecated use `GetRecoveryCasesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetRecoveryCasesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetRecoveryCasesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetRecoveryCasesResponse$Outbound, z.ZodTypeDef, GetRecoveryCasesResponse>;
    /** @deprecated use `GetRecoveryCasesResponse$Outbound` instead. */
    type Outbound = GetRecoveryCasesResponse$Outbound;
}
export declare function getRecoveryCasesResponseToJSON(getRecoveryCasesResponse: GetRecoveryCasesResponse): string;
export declare function getRecoveryCasesResponseFromJSON(jsonString: string): SafeParseResult<GetRecoveryCasesResponse, SDKValidationError>;
//# sourceMappingURL=getrecoverycases.d.ts.map