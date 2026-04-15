import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorFormsRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorFormsResponse = {
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
    form1099s?: Array<components.Form1099> | undefined;
};
/** @internal */
export declare const GetV1ContractorFormsRequest$inboundSchema: z.ZodType<GetV1ContractorFormsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorFormsRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorFormsRequest$outboundSchema: z.ZodType<GetV1ContractorFormsRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorFormsRequest$ {
    /** @deprecated use `GetV1ContractorFormsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorFormsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorFormsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorFormsRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormsRequest>;
    /** @deprecated use `GetV1ContractorFormsRequest$Outbound` instead. */
    type Outbound = GetV1ContractorFormsRequest$Outbound;
}
export declare function getV1ContractorFormsRequestToJSON(getV1ContractorFormsRequest: GetV1ContractorFormsRequest): string;
export declare function getV1ContractorFormsRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorFormsResponse$inboundSchema: z.ZodType<GetV1ContractorFormsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorFormsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Form_1099s?: Array<components.Form1099$Outbound> | undefined;
};
/** @internal */
export declare const GetV1ContractorFormsResponse$outboundSchema: z.ZodType<GetV1ContractorFormsResponse$Outbound, z.ZodTypeDef, GetV1ContractorFormsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorFormsResponse$ {
    /** @deprecated use `GetV1ContractorFormsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorFormsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorFormsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorFormsResponse$Outbound, z.ZodTypeDef, GetV1ContractorFormsResponse>;
    /** @deprecated use `GetV1ContractorFormsResponse$Outbound` instead. */
    type Outbound = GetV1ContractorFormsResponse$Outbound;
}
export declare function getV1ContractorFormsResponseToJSON(getV1ContractorFormsResponse: GetV1ContractorFormsResponse): string;
export declare function getV1ContractorFormsResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormsResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorforms.d.ts.map