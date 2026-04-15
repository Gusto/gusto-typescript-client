import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of recipient associated with the document (will be `Contractor` for Contractor Documents)
 */
export declare const DocumentSignedRecipientType: {
    readonly Company: "Company";
    readonly Employee: "Employee";
    readonly Contractor: "Contractor";
};
/**
 * The type of recipient associated with the document (will be `Contractor` for Contractor Documents)
 */
export type DocumentSignedRecipientType = ClosedEnum<typeof DocumentSignedRecipientType>;
export type DocumentSigned = {
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
    recipientType?: DocumentSignedRecipientType | undefined;
    /**
     * Unique identifier for the recipient associated with the document
     */
    recipientUuid?: string | undefined;
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
export declare const DocumentSignedRecipientType$inboundSchema: z.ZodNativeEnum<typeof DocumentSignedRecipientType>;
/** @internal */
export declare const DocumentSigned$inboundSchema: z.ZodType<DocumentSigned, z.ZodTypeDef, unknown>;
export declare function documentSignedFromJSON(jsonString: string): SafeParseResult<DocumentSigned, SDKValidationError>;
//# sourceMappingURL=documentsigned.d.ts.map