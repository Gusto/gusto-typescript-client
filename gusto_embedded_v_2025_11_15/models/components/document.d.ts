import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of recipient associated with the document (will be `Contractor` for Contractor Documents)
 */
export declare const RecipientType: {
    readonly Company: "Company";
    readonly Employee: "Employee";
    readonly Contractor: "Contractor";
};
/**
 * The type of recipient associated with the document (will be `Contractor` for Contractor Documents)
 */
export type RecipientType = ClosedEnum<typeof RecipientType>;
export type Pages = {
    /**
     * Image URL for the page
     */
    imageUrl?: string | undefined;
    /**
     * Page number
     */
    pageNumber?: number | undefined;
};
export type Fields = {
    /**
     * Unique identifier of the field
     */
    key?: string | undefined;
    /**
     * Auto-filled value of the field
     */
    value?: string | null | undefined;
    /**
     * X-coordinate location of the field on the page
     */
    x?: number | undefined;
    /**
     * Y-coordinate location of the field on the page
     */
    y?: number | undefined;
    /**
     * Width of the field
     */
    width?: number | undefined;
    /**
     * Height of the field
     */
    height?: number | undefined;
    /**
     * Page number of the field
     */
    pageNumber?: number | undefined;
    /**
     * The field's data type
     */
    dataType?: string | undefined;
    /**
     * Whether the field is required
     */
    required?: boolean | undefined;
};
export type Document = {
    /**
     * The UUID of the document
     */
    uuid?: string | undefined;
    /**
     * The title of the document
     */
    title?: string | undefined;
    /**
     * The type identifier of the document
     */
    name?: string | undefined;
    /**
     * The type of recipient associated with the document (will be `Contractor` for Contractor Documents)
     */
    recipientType?: RecipientType | undefined;
    /**
     * Unique identifier for the recipient associated with the document
     */
    recipientUuid?: string | undefined;
    /**
     * List of the document's pages and associated image URLs. This is only returned for documents with `required_signing` = `true`, and can be used for signing preparation.
     */
    pages?: Array<Pages> | undefined;
    /**
     * List of the document's fields and associated data. Values are set for auto-filled fields. This is only returned for documents with `required_signing` = `true`, and can be used for signing preparation.
     */
    fields?: Array<Fields> | undefined;
    /**
     * When the document was signed (will be `null` if unsigned)
     */
    signedAt?: string | null | undefined;
    /**
     * The description of the document
     */
    description?: string | undefined;
    /**
     * A boolean flag that indicates whether the document needs signing or not. Note that this value will change after the document is signed.
     */
    requiresSigning?: boolean | undefined;
    /**
     * If the document is in a draft state
     */
    draft?: boolean | undefined;
    /**
     * The year of this document. This value is nullable and will not be present on all documents.
     */
    year?: number | null | undefined;
    /**
     * The quarter of this document. This value is nullable and will not be present on all documents.
     */
    quarter?: number | null | undefined;
};
/** @internal */
export declare const RecipientType$inboundSchema: z.ZodNativeEnum<typeof RecipientType>;
/** @internal */
export declare const RecipientType$outboundSchema: z.ZodNativeEnum<typeof RecipientType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecipientType$ {
    /** @deprecated use `RecipientType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Company: "Company";
        readonly Employee: "Employee";
        readonly Contractor: "Contractor";
    }>;
    /** @deprecated use `RecipientType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Company: "Company";
        readonly Employee: "Employee";
        readonly Contractor: "Contractor";
    }>;
}
/** @internal */
export declare const Pages$inboundSchema: z.ZodType<Pages, z.ZodTypeDef, unknown>;
/** @internal */
export type Pages$Outbound = {
    image_url?: string | undefined;
    page_number?: number | undefined;
};
/** @internal */
export declare const Pages$outboundSchema: z.ZodType<Pages$Outbound, z.ZodTypeDef, Pages>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Pages$ {
    /** @deprecated use `Pages$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Pages, z.ZodTypeDef, unknown>;
    /** @deprecated use `Pages$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Pages$Outbound, z.ZodTypeDef, Pages>;
    /** @deprecated use `Pages$Outbound` instead. */
    type Outbound = Pages$Outbound;
}
export declare function pagesToJSON(pages: Pages): string;
export declare function pagesFromJSON(jsonString: string): SafeParseResult<Pages, SDKValidationError>;
/** @internal */
export declare const Fields$inboundSchema: z.ZodType<Fields, z.ZodTypeDef, unknown>;
/** @internal */
export type Fields$Outbound = {
    key?: string | undefined;
    value?: string | null | undefined;
    x?: number | undefined;
    y?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    page_number?: number | undefined;
    data_type?: string | undefined;
    required?: boolean | undefined;
};
/** @internal */
export declare const Fields$outboundSchema: z.ZodType<Fields$Outbound, z.ZodTypeDef, Fields>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Fields$ {
    /** @deprecated use `Fields$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Fields, z.ZodTypeDef, unknown>;
    /** @deprecated use `Fields$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Fields$Outbound, z.ZodTypeDef, Fields>;
    /** @deprecated use `Fields$Outbound` instead. */
    type Outbound = Fields$Outbound;
}
export declare function fieldsToJSON(fields: Fields): string;
export declare function fieldsFromJSON(jsonString: string): SafeParseResult<Fields, SDKValidationError>;
/** @internal */
export declare const Document$inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown>;
/** @internal */
export type Document$Outbound = {
    uuid?: string | undefined;
    title?: string | undefined;
    name?: string | undefined;
    recipient_type?: string | undefined;
    recipient_uuid?: string | undefined;
    pages?: Array<Pages$Outbound> | undefined;
    fields?: Array<Fields$Outbound> | undefined;
    signed_at?: string | null | undefined;
    description?: string | undefined;
    requires_signing?: boolean | undefined;
    draft?: boolean | undefined;
    year?: number | null | undefined;
    quarter?: number | null | undefined;
};
/** @internal */
export declare const Document$outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Document$ {
    /** @deprecated use `Document$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown>;
    /** @deprecated use `Document$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document>;
    /** @deprecated use `Document$Outbound` instead. */
    type Outbound = Document$Outbound;
}
export declare function documentToJSON(document: Document): string;
export declare function documentFromJSON(jsonString: string): SafeParseResult<Document, SDKValidationError>;
//# sourceMappingURL=document.d.ts.map