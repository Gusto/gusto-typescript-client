import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompaniesRequestBody = {
    /**
     * Whether the company only supports contractors. Must be updated in order for the company to start supporting W-2 employees. Can only be updated from true to false. Note that updating this value will require additional onboarding steps to be completed in order for the company to support W-2 employees.
     */
    contractorOnly: boolean;
};
export type PutV1CompaniesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompaniesRequestBody;
};
export type PutV1CompaniesResponse = {
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
    company?: components.Company | undefined;
};
/** @internal */
export declare const PutV1CompaniesRequestBody$inboundSchema: z.ZodType<PutV1CompaniesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesRequestBody$Outbound = {
    contractor_only: boolean;
};
/** @internal */
export declare const PutV1CompaniesRequestBody$outboundSchema: z.ZodType<PutV1CompaniesRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesRequestBody$ {
    /** @deprecated use `PutV1CompaniesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesRequestBody>;
    /** @deprecated use `PutV1CompaniesRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesRequestBody$Outbound;
}
export declare function putV1CompaniesRequestBodyToJSON(putV1CompaniesRequestBody: PutV1CompaniesRequestBody): string;
export declare function putV1CompaniesRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesRequest$inboundSchema: z.ZodType<PutV1CompaniesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesRequest$outboundSchema: z.ZodType<PutV1CompaniesRequest$Outbound, z.ZodTypeDef, PutV1CompaniesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesRequest$ {
    /** @deprecated use `PutV1CompaniesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesRequest$Outbound, z.ZodTypeDef, PutV1CompaniesRequest>;
    /** @deprecated use `PutV1CompaniesRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesRequest$Outbound;
}
export declare function putV1CompaniesRequestToJSON(putV1CompaniesRequest: PutV1CompaniesRequest): string;
export declare function putV1CompaniesRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesResponse$inboundSchema: z.ZodType<PutV1CompaniesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Company?: components.Company$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesResponse$outboundSchema: z.ZodType<PutV1CompaniesResponse$Outbound, z.ZodTypeDef, PutV1CompaniesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesResponse$ {
    /** @deprecated use `PutV1CompaniesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesResponse$Outbound, z.ZodTypeDef, PutV1CompaniesResponse>;
    /** @deprecated use `PutV1CompaniesResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesResponse$Outbound;
}
export declare function putV1CompaniesResponseToJSON(putV1CompaniesResponse: PutV1CompaniesResponse): string;
export declare function putV1CompaniesResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesResponse, SDKValidationError>;
//# sourceMappingURL=putv1companies.d.ts.map