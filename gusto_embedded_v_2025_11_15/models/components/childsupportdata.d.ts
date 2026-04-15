import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type FipsCodes = {
    /**
     * FIPS code for state or county
     */
    code?: string | undefined;
    /**
     * Name of county in the state for the corresponding FIPS code. When `null` the FIPS code applies state wide.
     */
    county?: string | null | undefined;
};
/**
 * A required attribute when creating a garnishment for this state agency. The current values are listed as an enum; though unlikely, values could be added if state agency requirements change in the future.
 */
export declare const Key: {
    readonly CaseNumber: "case_number";
    readonly OrderNumber: "order_number";
    readonly RemittanceNumber: "remittance_number";
};
/**
 * A required attribute when creating a garnishment for this state agency. The current values are listed as an enum; though unlikely, values could be added if state agency requirements change in the future.
 */
export type Key = ClosedEnum<typeof Key>;
export type RequiredAttributes = {
    /**
     * A required attribute when creating a garnishment for this state agency. The current values are listed as an enum; though unlikely, values could be added if state agency requirements change in the future.
     */
    key?: Key | undefined;
    /**
     * A human readable name of the attribute, e.g. CSE Case Number
     */
    label?: string | undefined;
};
export type Agencies = {
    /**
     * Two letter state abbreviation
     */
    state?: string | undefined;
    /**
     * Name of state child support agency
     */
    name?: string | undefined;
    /**
     * Specifies if remitting payment to the agency is required outside of Gusto. If true, Gusto includes garnishment amounts for this agency in payroll calculation, but does not debit for or remit payment to the agency automatically. As of September 2024, only garnishments for South Carolina Integrated Child Support Services require manual payment.
     *
     * @remarks
     */
    manualPaymentRequired?: boolean | undefined;
    /**
     * FIPS codes for state or county child support orders
     */
    fipsCodes?: Array<FipsCodes> | undefined;
    /**
     * Describes which child support case identifying attributes are required for this agency. While most agencies only require a single identifier, some (e.g. OH) require multiple identifiers.
     */
    requiredAttributes?: Array<RequiredAttributes> | undefined;
};
/**
 * Child Support agency data
 */
export type ChildSupportData = {
    /**
     * State child support agencies
     */
    agencies?: Array<Agencies> | undefined;
};
/** @internal */
export declare const FipsCodes$inboundSchema: z.ZodType<FipsCodes, z.ZodTypeDef, unknown>;
/** @internal */
export type FipsCodes$Outbound = {
    code?: string | undefined;
    county?: string | null | undefined;
};
/** @internal */
export declare const FipsCodes$outboundSchema: z.ZodType<FipsCodes$Outbound, z.ZodTypeDef, FipsCodes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FipsCodes$ {
    /** @deprecated use `FipsCodes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FipsCodes, z.ZodTypeDef, unknown>;
    /** @deprecated use `FipsCodes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FipsCodes$Outbound, z.ZodTypeDef, FipsCodes>;
    /** @deprecated use `FipsCodes$Outbound` instead. */
    type Outbound = FipsCodes$Outbound;
}
export declare function fipsCodesToJSON(fipsCodes: FipsCodes): string;
export declare function fipsCodesFromJSON(jsonString: string): SafeParseResult<FipsCodes, SDKValidationError>;
/** @internal */
export declare const Key$inboundSchema: z.ZodNativeEnum<typeof Key>;
/** @internal */
export declare const Key$outboundSchema: z.ZodNativeEnum<typeof Key>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Key$ {
    /** @deprecated use `Key$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CaseNumber: "case_number";
        readonly OrderNumber: "order_number";
        readonly RemittanceNumber: "remittance_number";
    }>;
    /** @deprecated use `Key$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CaseNumber: "case_number";
        readonly OrderNumber: "order_number";
        readonly RemittanceNumber: "remittance_number";
    }>;
}
/** @internal */
export declare const RequiredAttributes$inboundSchema: z.ZodType<RequiredAttributes, z.ZodTypeDef, unknown>;
/** @internal */
export type RequiredAttributes$Outbound = {
    key?: string | undefined;
    label?: string | undefined;
};
/** @internal */
export declare const RequiredAttributes$outboundSchema: z.ZodType<RequiredAttributes$Outbound, z.ZodTypeDef, RequiredAttributes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequiredAttributes$ {
    /** @deprecated use `RequiredAttributes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequiredAttributes, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequiredAttributes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequiredAttributes$Outbound, z.ZodTypeDef, RequiredAttributes>;
    /** @deprecated use `RequiredAttributes$Outbound` instead. */
    type Outbound = RequiredAttributes$Outbound;
}
export declare function requiredAttributesToJSON(requiredAttributes: RequiredAttributes): string;
export declare function requiredAttributesFromJSON(jsonString: string): SafeParseResult<RequiredAttributes, SDKValidationError>;
/** @internal */
export declare const Agencies$inboundSchema: z.ZodType<Agencies, z.ZodTypeDef, unknown>;
/** @internal */
export type Agencies$Outbound = {
    state?: string | undefined;
    name?: string | undefined;
    manual_payment_required?: boolean | undefined;
    fips_codes?: Array<FipsCodes$Outbound> | undefined;
    required_attributes?: Array<RequiredAttributes$Outbound> | undefined;
};
/** @internal */
export declare const Agencies$outboundSchema: z.ZodType<Agencies$Outbound, z.ZodTypeDef, Agencies>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Agencies$ {
    /** @deprecated use `Agencies$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Agencies, z.ZodTypeDef, unknown>;
    /** @deprecated use `Agencies$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Agencies$Outbound, z.ZodTypeDef, Agencies>;
    /** @deprecated use `Agencies$Outbound` instead. */
    type Outbound = Agencies$Outbound;
}
export declare function agenciesToJSON(agencies: Agencies): string;
export declare function agenciesFromJSON(jsonString: string): SafeParseResult<Agencies, SDKValidationError>;
/** @internal */
export declare const ChildSupportData$inboundSchema: z.ZodType<ChildSupportData, z.ZodTypeDef, unknown>;
/** @internal */
export type ChildSupportData$Outbound = {
    agencies?: Array<Agencies$Outbound> | undefined;
};
/** @internal */
export declare const ChildSupportData$outboundSchema: z.ZodType<ChildSupportData$Outbound, z.ZodTypeDef, ChildSupportData>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ChildSupportData$ {
    /** @deprecated use `ChildSupportData$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ChildSupportData, z.ZodTypeDef, unknown>;
    /** @deprecated use `ChildSupportData$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ChildSupportData$Outbound, z.ZodTypeDef, ChildSupportData>;
    /** @deprecated use `ChildSupportData$Outbound` instead. */
    type Outbound = ChildSupportData$Outbound;
}
export declare function childSupportDataToJSON(childSupportData: ChildSupportData): string;
export declare function childSupportDataFromJSON(jsonString: string): SafeParseResult<ChildSupportData, SDKValidationError>;
//# sourceMappingURL=childsupportdata.d.ts.map