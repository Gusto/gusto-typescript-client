import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PayScheduleAssignmentEmployeeChange, PayScheduleAssignmentEmployeeChange$Outbound } from "./payscheduleassignmentemployeechange.js";
/**
 * The pay schedule assignment type.
 */
export declare const PayScheduleAssignmentPreviewType: {
    readonly Single: "single";
    readonly HourlySalaried: "hourly_salaried";
    readonly ByEmployee: "by_employee";
    readonly ByDepartment: "by_department";
};
/**
 * The pay schedule assignment type.
 */
export type PayScheduleAssignmentPreviewType = ClosedEnum<typeof PayScheduleAssignmentPreviewType>;
/**
 * The representation of a pay schedule assignment preview.
 */
export type PayScheduleAssignmentPreview = {
    /**
     * The pay schedule assignment type.
     */
    type?: PayScheduleAssignmentPreviewType | null | undefined;
    /**
     * A list of pay schedule changes including pay period and transition pay period.
     */
    employeeChanges?: Array<PayScheduleAssignmentEmployeeChange> | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentPreviewType$inboundSchema: z.ZodNativeEnum<typeof PayScheduleAssignmentPreviewType>;
/** @internal */
export declare const PayScheduleAssignmentPreviewType$outboundSchema: z.ZodNativeEnum<typeof PayScheduleAssignmentPreviewType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentPreviewType$ {
    /** @deprecated use `PayScheduleAssignmentPreviewType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Single: "single";
        readonly HourlySalaried: "hourly_salaried";
        readonly ByEmployee: "by_employee";
        readonly ByDepartment: "by_department";
    }>;
    /** @deprecated use `PayScheduleAssignmentPreviewType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Single: "single";
        readonly HourlySalaried: "hourly_salaried";
        readonly ByEmployee: "by_employee";
        readonly ByDepartment: "by_department";
    }>;
}
/** @internal */
export declare const PayScheduleAssignmentPreview$inboundSchema: z.ZodType<PayScheduleAssignmentPreview, z.ZodTypeDef, unknown>;
/** @internal */
export type PayScheduleAssignmentPreview$Outbound = {
    type?: string | null | undefined;
    employee_changes?: Array<PayScheduleAssignmentEmployeeChange$Outbound> | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentPreview$outboundSchema: z.ZodType<PayScheduleAssignmentPreview$Outbound, z.ZodTypeDef, PayScheduleAssignmentPreview>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentPreview$ {
    /** @deprecated use `PayScheduleAssignmentPreview$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayScheduleAssignmentPreview, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayScheduleAssignmentPreview$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayScheduleAssignmentPreview$Outbound, z.ZodTypeDef, PayScheduleAssignmentPreview>;
    /** @deprecated use `PayScheduleAssignmentPreview$Outbound` instead. */
    type Outbound = PayScheduleAssignmentPreview$Outbound;
}
export declare function payScheduleAssignmentPreviewToJSON(payScheduleAssignmentPreview: PayScheduleAssignmentPreview): string;
export declare function payScheduleAssignmentPreviewFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignmentPreview, SDKValidationError>;
//# sourceMappingURL=payscheduleassignmentpreview.d.ts.map