import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The category of the company attachment
 */
export declare const Category: {
    readonly GepNotice: "gep_notice";
    readonly Compliance: "compliance";
    readonly Other: "other";
};
/**
 * The category of the company attachment
 */
export type Category = ClosedEnum<typeof Category>;
/**
 * The company attachment
 */
export type CompanyAttachment = {
    /**
     * UUID of the company attachment
     */
    uuid?: string | undefined;
    /**
     * name of the file uploaded
     */
    name?: string | undefined;
    /**
     * The category of the company attachment
     */
    category?: Category | undefined;
    /**
     * The ISO 8601 timestamp of when an attachment was uploaded
     */
    uploadTime?: string | undefined;
};
/** @internal */
export declare const Category$inboundSchema: z.ZodNativeEnum<typeof Category>;
/** @internal */
export declare const Category$outboundSchema: z.ZodNativeEnum<typeof Category>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Category$ {
    /** @deprecated use `Category$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly GepNotice: "gep_notice";
        readonly Compliance: "compliance";
        readonly Other: "other";
    }>;
    /** @deprecated use `Category$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly GepNotice: "gep_notice";
        readonly Compliance: "compliance";
        readonly Other: "other";
    }>;
}
/** @internal */
export declare const CompanyAttachment$inboundSchema: z.ZodType<CompanyAttachment, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyAttachment$Outbound = {
    uuid?: string | undefined;
    name?: string | undefined;
    category?: string | undefined;
    upload_time?: string | undefined;
};
/** @internal */
export declare const CompanyAttachment$outboundSchema: z.ZodType<CompanyAttachment$Outbound, z.ZodTypeDef, CompanyAttachment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyAttachment$ {
    /** @deprecated use `CompanyAttachment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyAttachment, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyAttachment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyAttachment$Outbound, z.ZodTypeDef, CompanyAttachment>;
    /** @deprecated use `CompanyAttachment$Outbound` instead. */
    type Outbound = CompanyAttachment$Outbound;
}
export declare function companyAttachmentToJSON(companyAttachment: CompanyAttachment): string;
export declare function companyAttachmentFromJSON(jsonString: string): SafeParseResult<CompanyAttachment, SDKValidationError>;
//# sourceMappingURL=companyattachment.d.ts.map