import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * An employee's I-9 verification document
 */
export type I9AuthorizationDocument = {
    /**
     * The UUID of the I-9 verification document
     */
    uuid: string;
    /**
     * The document's document type
     */
    documentType: string;
    /**
     * The document's document title
     */
    documentTitle: string;
    /**
     * The document's expiration date
     */
    expirationDate?: string | undefined;
    /**
     * The document's issuing authority
     */
    issuingAuthority: string;
};
/** @internal */
export declare const I9AuthorizationDocument$inboundSchema: z.ZodType<I9AuthorizationDocument, z.ZodTypeDef, unknown>;
/** @internal */
export type I9AuthorizationDocument$Outbound = {
    uuid: string;
    document_type: string;
    document_title: string;
    expiration_date?: string | undefined;
    issuing_authority: string;
};
/** @internal */
export declare const I9AuthorizationDocument$outboundSchema: z.ZodType<I9AuthorizationDocument$Outbound, z.ZodTypeDef, I9AuthorizationDocument>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace I9AuthorizationDocument$ {
    /** @deprecated use `I9AuthorizationDocument$inboundSchema` instead. */
    const inboundSchema: z.ZodType<I9AuthorizationDocument, z.ZodTypeDef, unknown>;
    /** @deprecated use `I9AuthorizationDocument$outboundSchema` instead. */
    const outboundSchema: z.ZodType<I9AuthorizationDocument$Outbound, z.ZodTypeDef, I9AuthorizationDocument>;
    /** @deprecated use `I9AuthorizationDocument$Outbound` instead. */
    type Outbound = I9AuthorizationDocument$Outbound;
}
export declare function i9AuthorizationDocumentToJSON(i9AuthorizationDocument: I9AuthorizationDocument): string;
export declare function i9AuthorizationDocumentFromJSON(jsonString: string): SafeParseResult<I9AuthorizationDocument, SDKValidationError>;
//# sourceMappingURL=i9authorizationdocument.d.ts.map