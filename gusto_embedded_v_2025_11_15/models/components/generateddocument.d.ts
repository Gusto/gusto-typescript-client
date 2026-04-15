import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Current status of the Generated Document
 */
export declare const GeneratedDocumentStatus: {
    readonly Pending: "pending";
    readonly Started: "started";
    readonly Succeeded: "succeeded";
    readonly Failed: "failed";
};
/**
 * Current status of the Generated Document
 */
export type GeneratedDocumentStatus = ClosedEnum<typeof GeneratedDocumentStatus>;
/**
 * Example response
 */
export type GeneratedDocument = {
    /**
     * A unique identifier of the Generated Document request
     */
    requestUuid?: string | undefined;
    /**
     * Current status of the Generated Document
     */
    status?: GeneratedDocumentStatus | undefined;
    /**
     * The array of urls to access the documents.
     */
    documentUrls?: Array<string> | undefined;
};
/** @internal */
export declare const GeneratedDocumentStatus$inboundSchema: z.ZodNativeEnum<typeof GeneratedDocumentStatus>;
/** @internal */
export declare const GeneratedDocumentStatus$outboundSchema: z.ZodNativeEnum<typeof GeneratedDocumentStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GeneratedDocumentStatus$ {
    /** @deprecated use `GeneratedDocumentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Pending: "pending";
        readonly Started: "started";
        readonly Succeeded: "succeeded";
        readonly Failed: "failed";
    }>;
    /** @deprecated use `GeneratedDocumentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Pending: "pending";
        readonly Started: "started";
        readonly Succeeded: "succeeded";
        readonly Failed: "failed";
    }>;
}
/** @internal */
export declare const GeneratedDocument$inboundSchema: z.ZodType<GeneratedDocument, z.ZodTypeDef, unknown>;
/** @internal */
export type GeneratedDocument$Outbound = {
    request_uuid?: string | undefined;
    status?: string | undefined;
    document_urls?: Array<string> | undefined;
};
/** @internal */
export declare const GeneratedDocument$outboundSchema: z.ZodType<GeneratedDocument$Outbound, z.ZodTypeDef, GeneratedDocument>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GeneratedDocument$ {
    /** @deprecated use `GeneratedDocument$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GeneratedDocument, z.ZodTypeDef, unknown>;
    /** @deprecated use `GeneratedDocument$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GeneratedDocument$Outbound, z.ZodTypeDef, GeneratedDocument>;
    /** @deprecated use `GeneratedDocument$Outbound` instead. */
    type Outbound = GeneratedDocument$Outbound;
}
export declare function generatedDocumentToJSON(generatedDocument: GeneratedDocument): string;
export declare function generatedDocumentFromJSON(jsonString: string): SafeParseResult<GeneratedDocument, SDKValidationError>;
//# sourceMappingURL=generateddocument.d.ts.map