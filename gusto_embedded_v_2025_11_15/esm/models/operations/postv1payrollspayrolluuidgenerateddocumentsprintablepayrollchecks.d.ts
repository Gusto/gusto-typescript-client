import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PayrollCheck } from "../components/payrollcheck.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody;
};
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    payrollCheck?: PayrollCheck | undefined;
};
/** @internal */
export declare const PrintingFormat$outboundSchema: z.ZodNativeEnum<typeof PrintingFormat>;
/** @internal */
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound = {
    printing_format: string;
    starting_check_number?: number | undefined;
};
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$outboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody>;
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBodyToJSON(postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody): string;
/** @internal */
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound = {
    payroll_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound;
};
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$outboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest>;
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestToJSON(postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest: PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest): string;
/** @internal */
export declare const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$inboundSchema: z.ZodType<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse, z.ZodTypeDef, unknown>;
export declare function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponseFromJSON(jsonString: string): SafeParseResult<PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse, SDKValidationError>;
//# sourceMappingURL=postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecks.d.ts.map