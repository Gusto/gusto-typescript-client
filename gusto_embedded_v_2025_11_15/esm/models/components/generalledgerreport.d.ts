import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The breakdown level used for the report
 */
export declare const Aggregation: {
    readonly Default: "default";
    readonly Job: "job";
    readonly Department: "department";
    readonly Integration: "integration";
};
/**
 * The breakdown level used for the report
 */
export type Aggregation = ClosedEnum<typeof Aggregation>;
/**
 * The `integration_type` used for the report, if `aggregation` was 'integration.' Otherwise, this will be null.
 */
export declare const IntegrationType: {
    readonly Xero: "xero";
    readonly Qbo: "qbo";
};
/**
 * The `integration_type` used for the report, if `aggregation` was 'integration.' Otherwise, this will be null.
 */
export type IntegrationType = ClosedEnum<typeof IntegrationType>;
/**
 * Successful response for general ledger report generation
 */
export type GeneralLedgerReport = {
    /**
     * The UUID of the payroll record for which the report was generated
     */
    payrollUuid?: string | undefined;
    /**
     * The breakdown level used for the report
     */
    aggregation?: Aggregation | undefined;
    /**
     * The `integration_type` used for the report, if `aggregation` was 'integration.' Otherwise, this will be null.
     */
    integrationType?: IntegrationType | null | undefined;
    /**
     * UUID to use for polling the report status
     */
    requestUuid?: string | undefined;
};
/** @internal */
export declare const Aggregation$inboundSchema: z.ZodNativeEnum<typeof Aggregation>;
/** @internal */
export declare const IntegrationType$inboundSchema: z.ZodNativeEnum<typeof IntegrationType>;
/** @internal */
export declare const GeneralLedgerReport$inboundSchema: z.ZodType<GeneralLedgerReport, z.ZodTypeDef, unknown>;
export declare function generalLedgerReportFromJSON(jsonString: string): SafeParseResult<GeneralLedgerReport, SDKValidationError>;
//# sourceMappingURL=generalledgerreport.d.ts.map