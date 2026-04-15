import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type Form = {
    /**
     * The UUID of the form
     */
    uuid: string;
    /**
     * The type identifier of the form
     */
    name?: string | undefined;
    /**
     * The title of the form
     */
    title?: string | undefined;
    /**
     * The description of the form
     */
    description?: string | undefined;
    /**
     * If the form is in a draft state. E.g. End of year tax forms may be provided in a draft state prior to being finalized.
     */
    draft?: boolean | undefined;
    /**
     * The year of this form. For some forms, e.g. tax forms, this is the year which the form represents. A W2 for January - December 2022 would be delivered in January 2023 and have a year value of 2022. This value is nullable and will not be present on all forms.
     */
    year?: number | null | undefined;
    /**
     * The quarter of this form. For some forms, e.g. tax forms, this is the calendar quarter which this form represents. An Employer's Quarterly Federal Tax Return (Form 941) for April, May, June 2022 would have a quarter value of 2 (and a year value of 2022). This value is nullable and will not be present on all forms.
     */
    quarter?: number | null | undefined;
    /**
     * A boolean flag that indicates whether the form needs signing or not. Note that this value will change after the form is signed.
     */
    requiresSigning?: boolean | undefined;
    /**
     * The content type of the associated document. Most forms are PDFs with a content type of `application/pdf`. Some tax file packages will be zip files (containing PDFs) with a content type of `application/zip`. This attribute will be `null` when the document has not been prepared.
     */
    documentContentType?: string | null | undefined;
};
/** @internal */
export declare const Form$inboundSchema: z.ZodType<Form, z.ZodTypeDef, unknown>;
/** @internal */
export type Form$Outbound = {
    uuid: string;
    name?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    draft?: boolean | undefined;
    year?: number | null | undefined;
    quarter?: number | null | undefined;
    requires_signing?: boolean | undefined;
    document_content_type?: string | null | undefined;
};
/** @internal */
export declare const Form$outboundSchema: z.ZodType<Form$Outbound, z.ZodTypeDef, Form>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Form$ {
    /** @deprecated use `Form$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Form, z.ZodTypeDef, unknown>;
    /** @deprecated use `Form$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Form$Outbound, z.ZodTypeDef, Form>;
    /** @deprecated use `Form$Outbound` instead. */
    type Outbound = Form$Outbound;
}
export declare function formToJSON(form: Form): string;
export declare function formFromJSON(jsonString: string): SafeParseResult<Form, SDKValidationError>;
//# sourceMappingURL=form.d.ts.map