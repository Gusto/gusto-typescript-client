import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The document option's section in the list of acceptable documents on the Form I-9
 */
export declare const Section: {
    readonly A: "A";
    readonly A1: "A1";
    readonly A2: "A2";
    readonly A3: "A3";
    readonly B: "B";
    readonly C: "C";
};
/**
 * The document option's section in the list of acceptable documents on the Form I-9
 */
export type Section = ClosedEnum<typeof Section>;
/**
 * An employee's I-9 verification document option based on the authorization status
 */
export type I9AuthorizationDocumentOption = {
    /**
     * The document option's section in the list of acceptable documents on the Form I-9
     */
    section: Section;
    /**
     * The document option's description
     */
    description: string;
    /**
     * The document option's document type
     */
    documentType: string;
    /**
     * The document option's document titles
     */
    documentTitle: Array<string>;
    /**
     * Whether the document is a common choice for I-9 verification
     */
    commonChoice: boolean;
};
/** @internal */
export declare const Section$inboundSchema: z.ZodNativeEnum<typeof Section>;
/** @internal */
export declare const Section$outboundSchema: z.ZodNativeEnum<typeof Section>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Section$ {
    /** @deprecated use `Section$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly A: "A";
        readonly A1: "A1";
        readonly A2: "A2";
        readonly A3: "A3";
        readonly B: "B";
        readonly C: "C";
    }>;
    /** @deprecated use `Section$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly A: "A";
        readonly A1: "A1";
        readonly A2: "A2";
        readonly A3: "A3";
        readonly B: "B";
        readonly C: "C";
    }>;
}
/** @internal */
export declare const I9AuthorizationDocumentOption$inboundSchema: z.ZodType<I9AuthorizationDocumentOption, z.ZodTypeDef, unknown>;
/** @internal */
export type I9AuthorizationDocumentOption$Outbound = {
    section: string;
    description: string;
    document_type: string;
    document_title: Array<string>;
    common_choice: boolean;
};
/** @internal */
export declare const I9AuthorizationDocumentOption$outboundSchema: z.ZodType<I9AuthorizationDocumentOption$Outbound, z.ZodTypeDef, I9AuthorizationDocumentOption>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace I9AuthorizationDocumentOption$ {
    /** @deprecated use `I9AuthorizationDocumentOption$inboundSchema` instead. */
    const inboundSchema: z.ZodType<I9AuthorizationDocumentOption, z.ZodTypeDef, unknown>;
    /** @deprecated use `I9AuthorizationDocumentOption$outboundSchema` instead. */
    const outboundSchema: z.ZodType<I9AuthorizationDocumentOption$Outbound, z.ZodTypeDef, I9AuthorizationDocumentOption>;
    /** @deprecated use `I9AuthorizationDocumentOption$Outbound` instead. */
    type Outbound = I9AuthorizationDocumentOption$Outbound;
}
export declare function i9AuthorizationDocumentOptionToJSON(i9AuthorizationDocumentOption: I9AuthorizationDocumentOption): string;
export declare function i9AuthorizationDocumentOptionFromJSON(jsonString: string): SafeParseResult<I9AuthorizationDocumentOption, SDKValidationError>;
//# sourceMappingURL=i9authorizationdocumentoption.d.ts.map