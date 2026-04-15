import * as z from "zod/v3";
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
export declare const CompanyAttachment$inboundSchema: z.ZodType<CompanyAttachment, z.ZodTypeDef, unknown>;
export declare function companyAttachmentFromJSON(jsonString: string): SafeParseResult<CompanyAttachment, SDKValidationError>;
//# sourceMappingURL=companyattachment.d.ts.map