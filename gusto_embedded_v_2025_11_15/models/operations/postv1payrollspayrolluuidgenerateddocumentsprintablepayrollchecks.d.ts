import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of check stock being printed. Check the "Types of check stock" section in this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types
 */
export declare const PrintingFormat: {
    readonly Top: "top";
    readonly Bottom: "bottom";
};
/**
 * The type of check stock being printed. Check the "Types of check stock" section in this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types
 */
export type PrintingFormat = ClosedEnum<typeof PrintingFormat>;
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody = {
    /**
     * The type of check stock being printed. Check the "Types of check stock" section in this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types
     */
    printingFormat: PrintingFormat;
    /**
     * The starting check number we will start generating checks from. Use to override the sequence that will be used to generate check numbers.
     */
    startingCheckNumber?: number | undefined;
};
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest = {
    /**
     * The UUID of the payroll
     */
    payrollUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody;
};
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse = {
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
    payrollCheck?: components.PayrollCheck | undefined;
};
/** @internal */
export declare const PrintingFormat$inboundSchema: z.ZodNativeEnum<typeof PrintingFormat>;
/** @internal */
export declare const PrintingFormat$outboundSchema: z.ZodNativeEnum<typeof PrintingFormat>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PrintingFormat$ {
    /** @deprecated use `PrintingFormat$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Top: "top";
        readonly Bottom: "bottom";
    }>;
    /** @deprecated use `PrintingFormat$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Top: "top";
        readonly Bottom: "bottom";
    }>;
}
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$inboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound = {
    printing_format: string;
    starting_check_number?: number | undefined;
};
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$outboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$ {
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody>;
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound` instead. */
    type Outbound = PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound;
}
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBodyToJSON(postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody): string;
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$inboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound = {
    payroll_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound;
};
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$outboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$ {
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest>;
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound` instead. */
    type Outbound = PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound;
}
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestToJSON(postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest): string;
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestFromJSON(jsonString: string): SafeParseResult<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest, SDKValidationError>;
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$inboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payroll-Check"?: components.PayrollCheck$Outbound | undefined;
};
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$outboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$ {
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse>;
    /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound` instead. */
    type Outbound = PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound;
}
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponseToJSON(postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse): string;
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponseFromJSON(jsonString: string): SafeParseResult<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse, SDKValidationError>;
//# sourceMappingURL=postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecks.d.ts.map