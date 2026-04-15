import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * Input type for the custom field.
 */
export declare const CustomFieldType: {
    readonly Text: "text";
    readonly Currency: "currency";
    readonly Number: "number";
    readonly Date: "date";
    readonly Radio: "radio";
};
/**
 * Input type for the custom field.
 */
export type CustomFieldType = ClosedEnum<typeof CustomFieldType>;
/** @internal */
export declare const CustomFieldType$inboundSchema: z.ZodNativeEnum<typeof CustomFieldType>;
/** @internal */
export declare const CustomFieldType$outboundSchema: z.ZodNativeEnum<typeof CustomFieldType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldType$ {
    /** @deprecated use `CustomFieldType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Text: "text";
        readonly Currency: "currency";
        readonly Number: "number";
        readonly Date: "date";
        readonly Radio: "radio";
    }>;
    /** @deprecated use `CustomFieldType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Text: "text";
        readonly Currency: "currency";
        readonly Number: "number";
        readonly Date: "date";
        readonly Radio: "radio";
    }>;
}
//# sourceMappingURL=customfieldtype.d.ts.map