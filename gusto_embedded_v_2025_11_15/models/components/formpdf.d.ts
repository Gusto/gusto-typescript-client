import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type FormPdf = {
    /**
     * the UUID of the form
     */
    uuid: string;
    /**
     * the URL of the form
     */
    documentUrl?: string | null | undefined;
    /**
     * The content type of the associated document. Most forms are PDFs with a content type of `application/pdf`. Some tax file packages will be zip files (containing PDFs) with a content type of `application/zip`. This attribute will be `null` when the document has not been prepared.
     */
    documentContentType?: string | null | undefined;
};
/** @internal */
export declare const FormPdf$inboundSchema: z.ZodType<FormPdf, z.ZodTypeDef, unknown>;
/** @internal */
export type FormPdf$Outbound = {
    uuid: string;
    document_url?: string | null | undefined;
    document_content_type?: string | null | undefined;
};
/** @internal */
export declare const FormPdf$outboundSchema: z.ZodType<FormPdf$Outbound, z.ZodTypeDef, FormPdf>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormPdf$ {
    /** @deprecated use `FormPdf$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormPdf, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormPdf$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormPdf$Outbound, z.ZodTypeDef, FormPdf>;
    /** @deprecated use `FormPdf$Outbound` instead. */
    type Outbound = FormPdf$Outbound;
}
export declare function formPdfToJSON(formPdf: FormPdf): string;
export declare function formPdfFromJSON(jsonString: string): SafeParseResult<FormPdf, SDKValidationError>;
//# sourceMappingURL=formpdf.d.ts.map