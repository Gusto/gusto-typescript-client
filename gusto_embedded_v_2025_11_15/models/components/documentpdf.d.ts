import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DocumentPdf = {
    /**
     * the UUID of the document
     */
    uuid?: string | undefined;
    /**
     * the URL of the document
     */
    documentUrl?: string | undefined;
};
/** @internal */
export declare const DocumentPdf$inboundSchema: z.ZodType<DocumentPdf, z.ZodTypeDef, unknown>;
/** @internal */
export type DocumentPdf$Outbound = {
    uuid?: string | undefined;
    document_url?: string | undefined;
};
/** @internal */
export declare const DocumentPdf$outboundSchema: z.ZodType<DocumentPdf$Outbound, z.ZodTypeDef, DocumentPdf>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentPdf$ {
    /** @deprecated use `DocumentPdf$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentPdf, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentPdf$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentPdf$Outbound, z.ZodTypeDef, DocumentPdf>;
    /** @deprecated use `DocumentPdf$Outbound` instead. */
    type Outbound = DocumentPdf$Outbound;
}
export declare function documentPdfToJSON(documentPdf: DocumentPdf): string;
export declare function documentPdfFromJSON(jsonString: string): SafeParseResult<DocumentPdf, SDKValidationError>;
//# sourceMappingURL=documentpdf.d.ts.map