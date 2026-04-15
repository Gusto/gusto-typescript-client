import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorFormRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorFormResponse = {
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
    form1099?: components.Form1099 | undefined;
};
/** @internal */
export declare const GetV1ContractorFormRequest$inboundSchema: z.ZodType<GetV1ContractorFormRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorFormRequest$Outbound = {
    contractor_uuid: string;
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorFormRequest$outboundSchema: z.ZodType<GetV1ContractorFormRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorFormRequest$ {
    /** @deprecated use `GetV1ContractorFormRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorFormRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorFormRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorFormRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormRequest>;
    /** @deprecated use `GetV1ContractorFormRequest$Outbound` instead. */
    type Outbound = GetV1ContractorFormRequest$Outbound;
}
export declare function getV1ContractorFormRequestToJSON(getV1ContractorFormRequest: GetV1ContractorFormRequest): string;
export declare function getV1ContractorFormRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorFormResponse$inboundSchema: z.ZodType<GetV1ContractorFormResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorFormResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Form_1099?: components.Form1099$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorFormResponse$outboundSchema: z.ZodType<GetV1ContractorFormResponse$Outbound, z.ZodTypeDef, GetV1ContractorFormResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorFormResponse$ {
    /** @deprecated use `GetV1ContractorFormResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorFormResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorFormResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorFormResponse$Outbound, z.ZodTypeDef, GetV1ContractorFormResponse>;
    /** @deprecated use `GetV1ContractorFormResponse$Outbound` instead. */
    type Outbound = GetV1ContractorFormResponse$Outbound;
}
export declare function getV1ContractorFormResponseToJSON(getV1ContractorFormResponse: GetV1ContractorFormResponse): string;
export declare function getV1ContractorFormResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorform.d.ts.map