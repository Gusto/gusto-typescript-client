import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DepartmentEmployees = {
    uuid?: string | undefined;
};
export type Contractors = {
    uuid?: string | undefined;
};
export type Department = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The UUID of the department
     */
    uuid?: string | undefined;
    /**
     * The UUID of the company
     */
    companyUuid?: string | undefined;
    /**
     * Name of the department
     */
    title?: string | undefined;
    /**
     * Array of employees assigned to the department.
     */
    employees?: Array<DepartmentEmployees> | undefined;
    /**
     * Array of contractors assigned to the department.
     */
    contractors?: Array<Contractors> | undefined;
};
/** @internal */
export declare const DepartmentEmployees$inboundSchema: z.ZodType<DepartmentEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type DepartmentEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const DepartmentEmployees$outboundSchema: z.ZodType<DepartmentEmployees$Outbound, z.ZodTypeDef, DepartmentEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DepartmentEmployees$ {
    /** @deprecated use `DepartmentEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DepartmentEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `DepartmentEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DepartmentEmployees$Outbound, z.ZodTypeDef, DepartmentEmployees>;
    /** @deprecated use `DepartmentEmployees$Outbound` instead. */
    type Outbound = DepartmentEmployees$Outbound;
}
export declare function departmentEmployeesToJSON(departmentEmployees: DepartmentEmployees): string;
export declare function departmentEmployeesFromJSON(jsonString: string): SafeParseResult<DepartmentEmployees, SDKValidationError>;
/** @internal */
export declare const Contractors$inboundSchema: z.ZodType<Contractors, z.ZodTypeDef, unknown>;
/** @internal */
export type Contractors$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const Contractors$outboundSchema: z.ZodType<Contractors$Outbound, z.ZodTypeDef, Contractors>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Contractors$ {
    /** @deprecated use `Contractors$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Contractors, z.ZodTypeDef, unknown>;
    /** @deprecated use `Contractors$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Contractors$Outbound, z.ZodTypeDef, Contractors>;
    /** @deprecated use `Contractors$Outbound` instead. */
    type Outbound = Contractors$Outbound;
}
export declare function contractorsToJSON(contractors: Contractors): string;
export declare function contractorsFromJSON(jsonString: string): SafeParseResult<Contractors, SDKValidationError>;
/** @internal */
export declare const Department$inboundSchema: z.ZodType<Department, z.ZodTypeDef, unknown>;
/** @internal */
export type Department$Outbound = {
    version?: string | undefined;
    uuid?: string | undefined;
    company_uuid?: string | undefined;
    title?: string | undefined;
    employees?: Array<DepartmentEmployees$Outbound> | undefined;
    contractors?: Array<Contractors$Outbound> | undefined;
};
/** @internal */
export declare const Department$outboundSchema: z.ZodType<Department$Outbound, z.ZodTypeDef, Department>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Department$ {
    /** @deprecated use `Department$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Department, z.ZodTypeDef, unknown>;
    /** @deprecated use `Department$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Department$Outbound, z.ZodTypeDef, Department>;
    /** @deprecated use `Department$Outbound` instead. */
    type Outbound = Department$Outbound;
}
export declare function departmentToJSON(department: Department): string;
export declare function departmentFromJSON(jsonString: string): SafeParseResult<Department, SDKValidationError>;
//# sourceMappingURL=department.d.ts.map