import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CompanyCustomField, CompanyCustomField$Outbound } from "./companycustomfield.js";
/**
 * Example response
 */
export type CompanyCustomFieldList = {
    customFields?: Array<CompanyCustomField> | undefined;
};
/** @internal */
export declare const CompanyCustomFieldList$inboundSchema: z.ZodType<CompanyCustomFieldList, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyCustomFieldList$Outbound = {
    custom_fields?: Array<CompanyCustomField$Outbound> | undefined;
};
/** @internal */
export declare const CompanyCustomFieldList$outboundSchema: z.ZodType<CompanyCustomFieldList$Outbound, z.ZodTypeDef, CompanyCustomFieldList>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyCustomFieldList$ {
    /** @deprecated use `CompanyCustomFieldList$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyCustomFieldList, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyCustomFieldList$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyCustomFieldList$Outbound, z.ZodTypeDef, CompanyCustomFieldList>;
    /** @deprecated use `CompanyCustomFieldList$Outbound` instead. */
    type Outbound = CompanyCustomFieldList$Outbound;
}
export declare function companyCustomFieldListToJSON(companyCustomFieldList: CompanyCustomFieldList): string;
export declare function companyCustomFieldListFromJSON(jsonString: string): SafeParseResult<CompanyCustomFieldList, SDKValidationError>;
//# sourceMappingURL=companycustomfieldlist.d.ts.map