import * as z from "zod/v3";
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
export declare const Pages$inboundSchema: z.ZodType<Pages, z.ZodTypeDef, unknown>;
export declare function pagesFromJSON(jsonString: string): SafeParseResult<Pages, SDKValidationError>;
/** @internal */
export declare const Fields$inboundSchema: z.ZodType<Fields, z.ZodTypeDef, unknown>;
export declare function fieldsFromJSON(jsonString: string): SafeParseResult<Fields, SDKValidationError>;
/** @internal */
export declare const Document$inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown>;
export declare function documentFromJSON(jsonString: string): SafeParseResult<Document, SDKValidationError>;
//# sourceMappingURL=document.d.ts.map