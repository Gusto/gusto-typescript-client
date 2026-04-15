import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomFieldType } from "./customfieldtype.js";
/**
 * A custom field of an employee
 */
export type EmployeeCustomField = {
    id: string;
    /**
     * This is the id of the response object from when you get the company custom fields
     */
    companyCustomFieldId: string;
    name: string;
    /**
     * Input type for the custom field.
     */
    type: CustomFieldType;
    description?: string | undefined;
    value: string;
    /**
     * An array of options for fields of type radio. Otherwise, null.
     */
    selectionOptions?: Array<string> | null | undefined;
};
/** @internal */
export declare const EmployeeCustomField$inboundSchema: z.ZodType<EmployeeCustomField, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeCustomField$Outbound = {
    id: string;
    company_custom_field_id: string;
    name: string;
    type: string;
    description?: string | undefined;
    value: string;
    selection_options?: Array<string> | null | undefined;
};
/** @internal */
export declare const EmployeeCustomField$outboundSchema: z.ZodType<EmployeeCustomField$Outbound, z.ZodTypeDef, EmployeeCustomField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeCustomField$ {
    /** @deprecated use `EmployeeCustomField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeCustomField, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeCustomField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeCustomField$Outbound, z.ZodTypeDef, EmployeeCustomField>;
    /** @deprecated use `EmployeeCustomField$Outbound` instead. */
    type Outbound = EmployeeCustomField$Outbound;
}
export declare function employeeCustomFieldToJSON(employeeCustomField: EmployeeCustomField): string;
export declare function employeeCustomFieldFromJSON(jsonString: string): SafeParseResult<EmployeeCustomField, SDKValidationError>;
//# sourceMappingURL=employeecustomfield.d.ts.map