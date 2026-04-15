import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomFieldType } from "./customfieldtype.js";
/**
 * A custom field on a company
 */
export type CompanyCustomField = {
    /**
     * UUID of the company custom field
     */
    uuid: string;
    /**
     * Name of the company custom field
     */
    name: string;
    /**
     * Input type for the custom field.
     */
    type: CustomFieldType;
    /**
     * Description of the company custom field
     */
    description?: string | undefined;
    /**
     * An array of options for fields of type radio. Otherwise, null.
     */
    selectionOptions?: Array<string> | null | undefined;
};
/** @internal */
export declare const CompanyCustomField$inboundSchema: z.ZodType<CompanyCustomField, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyCustomField$Outbound = {
    uuid: string;
    name: string;
    type: string;
    description?: string | undefined;
    selection_options?: Array<string> | null | undefined;
};
/** @internal */
export declare const CompanyCustomField$outboundSchema: z.ZodType<CompanyCustomField$Outbound, z.ZodTypeDef, CompanyCustomField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyCustomField$ {
    /** @deprecated use `CompanyCustomField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyCustomField, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyCustomField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyCustomField$Outbound, z.ZodTypeDef, CompanyCustomField>;
    /** @deprecated use `CompanyCustomField$Outbound` instead. */
    type Outbound = CompanyCustomField$Outbound;
}
export declare function companyCustomFieldToJSON(companyCustomField: CompanyCustomField): string;
export declare function companyCustomFieldFromJSON(jsonString: string): SafeParseResult<CompanyCustomField, SDKValidationError>;
//# sourceMappingURL=companycustomfield.d.ts.map