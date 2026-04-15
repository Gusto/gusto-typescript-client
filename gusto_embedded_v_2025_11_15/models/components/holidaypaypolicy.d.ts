import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type NewYearsDay = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type MlkDay = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type PresidentsDay = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type MemorialDay = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type Juneteenth = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type IndependenceDay = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type LaborDay = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type ColumbusDay = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type VeteransDay = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type Thanksgiving = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
export type FederalHolidays = {
    newYearsDay?: NewYearsDay | undefined;
    mlkDay?: MlkDay | undefined;
    presidentsDay?: PresidentsDay | undefined;
    memorialDay?: MemorialDay | undefined;
    juneteenth?: Juneteenth | undefined;
    independenceDay?: IndependenceDay | undefined;
    laborDay?: LaborDay | undefined;
    columbusDay?: ColumbusDay | undefined;
    veteransDay?: VeteransDay | undefined;
    thanksgiving?: Thanksgiving | undefined;
};
export type HolidayPayPolicyEmployees = {
    uuid?: string | undefined;
};
/**
 * Representation of a Holiday Pay Policy
 */
export type HolidayPayPolicy = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    /**
     * A unique identifier for the company owning the holiday pay policy
     */
    companyUuid: string;
    /**
     * List of the eleven supported federal holidays and their details
     */
    federalHolidays: Array<FederalHolidays>;
    /**
     * List of employee uuids under a time off policy
     */
    employees: Array<HolidayPayPolicyEmployees>;
};
/** @internal */
export declare const NewYearsDay$inboundSchema: z.ZodType<NewYearsDay, z.ZodTypeDef, unknown>;
/** @internal */
export type NewYearsDay$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const NewYearsDay$outboundSchema: z.ZodType<NewYearsDay$Outbound, z.ZodTypeDef, NewYearsDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NewYearsDay$ {
    /** @deprecated use `NewYearsDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NewYearsDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `NewYearsDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NewYearsDay$Outbound, z.ZodTypeDef, NewYearsDay>;
    /** @deprecated use `NewYearsDay$Outbound` instead. */
    type Outbound = NewYearsDay$Outbound;
}
export declare function newYearsDayToJSON(newYearsDay: NewYearsDay): string;
export declare function newYearsDayFromJSON(jsonString: string): SafeParseResult<NewYearsDay, SDKValidationError>;
/** @internal */
export declare const MlkDay$inboundSchema: z.ZodType<MlkDay, z.ZodTypeDef, unknown>;
/** @internal */
export type MlkDay$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const MlkDay$outboundSchema: z.ZodType<MlkDay$Outbound, z.ZodTypeDef, MlkDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MlkDay$ {
    /** @deprecated use `MlkDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MlkDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `MlkDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MlkDay$Outbound, z.ZodTypeDef, MlkDay>;
    /** @deprecated use `MlkDay$Outbound` instead. */
    type Outbound = MlkDay$Outbound;
}
export declare function mlkDayToJSON(mlkDay: MlkDay): string;
export declare function mlkDayFromJSON(jsonString: string): SafeParseResult<MlkDay, SDKValidationError>;
/** @internal */
export declare const PresidentsDay$inboundSchema: z.ZodType<PresidentsDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PresidentsDay$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const PresidentsDay$outboundSchema: z.ZodType<PresidentsDay$Outbound, z.ZodTypeDef, PresidentsDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PresidentsDay$ {
    /** @deprecated use `PresidentsDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PresidentsDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PresidentsDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PresidentsDay$Outbound, z.ZodTypeDef, PresidentsDay>;
    /** @deprecated use `PresidentsDay$Outbound` instead. */
    type Outbound = PresidentsDay$Outbound;
}
export declare function presidentsDayToJSON(presidentsDay: PresidentsDay): string;
export declare function presidentsDayFromJSON(jsonString: string): SafeParseResult<PresidentsDay, SDKValidationError>;
/** @internal */
export declare const MemorialDay$inboundSchema: z.ZodType<MemorialDay, z.ZodTypeDef, unknown>;
/** @internal */
export type MemorialDay$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const MemorialDay$outboundSchema: z.ZodType<MemorialDay$Outbound, z.ZodTypeDef, MemorialDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MemorialDay$ {
    /** @deprecated use `MemorialDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MemorialDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `MemorialDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MemorialDay$Outbound, z.ZodTypeDef, MemorialDay>;
    /** @deprecated use `MemorialDay$Outbound` instead. */
    type Outbound = MemorialDay$Outbound;
}
export declare function memorialDayToJSON(memorialDay: MemorialDay): string;
export declare function memorialDayFromJSON(jsonString: string): SafeParseResult<MemorialDay, SDKValidationError>;
/** @internal */
export declare const Juneteenth$inboundSchema: z.ZodType<Juneteenth, z.ZodTypeDef, unknown>;
/** @internal */
export type Juneteenth$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const Juneteenth$outboundSchema: z.ZodType<Juneteenth$Outbound, z.ZodTypeDef, Juneteenth>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Juneteenth$ {
    /** @deprecated use `Juneteenth$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Juneteenth, z.ZodTypeDef, unknown>;
    /** @deprecated use `Juneteenth$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Juneteenth$Outbound, z.ZodTypeDef, Juneteenth>;
    /** @deprecated use `Juneteenth$Outbound` instead. */
    type Outbound = Juneteenth$Outbound;
}
export declare function juneteenthToJSON(juneteenth: Juneteenth): string;
export declare function juneteenthFromJSON(jsonString: string): SafeParseResult<Juneteenth, SDKValidationError>;
/** @internal */
export declare const IndependenceDay$inboundSchema: z.ZodType<IndependenceDay, z.ZodTypeDef, unknown>;
/** @internal */
export type IndependenceDay$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const IndependenceDay$outboundSchema: z.ZodType<IndependenceDay$Outbound, z.ZodTypeDef, IndependenceDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IndependenceDay$ {
    /** @deprecated use `IndependenceDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IndependenceDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `IndependenceDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IndependenceDay$Outbound, z.ZodTypeDef, IndependenceDay>;
    /** @deprecated use `IndependenceDay$Outbound` instead. */
    type Outbound = IndependenceDay$Outbound;
}
export declare function independenceDayToJSON(independenceDay: IndependenceDay): string;
export declare function independenceDayFromJSON(jsonString: string): SafeParseResult<IndependenceDay, SDKValidationError>;
/** @internal */
export declare const LaborDay$inboundSchema: z.ZodType<LaborDay, z.ZodTypeDef, unknown>;
/** @internal */
export type LaborDay$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const LaborDay$outboundSchema: z.ZodType<LaborDay$Outbound, z.ZodTypeDef, LaborDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LaborDay$ {
    /** @deprecated use `LaborDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LaborDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `LaborDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LaborDay$Outbound, z.ZodTypeDef, LaborDay>;
    /** @deprecated use `LaborDay$Outbound` instead. */
    type Outbound = LaborDay$Outbound;
}
export declare function laborDayToJSON(laborDay: LaborDay): string;
export declare function laborDayFromJSON(jsonString: string): SafeParseResult<LaborDay, SDKValidationError>;
/** @internal */
export declare const ColumbusDay$inboundSchema: z.ZodType<ColumbusDay, z.ZodTypeDef, unknown>;
/** @internal */
export type ColumbusDay$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const ColumbusDay$outboundSchema: z.ZodType<ColumbusDay$Outbound, z.ZodTypeDef, ColumbusDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ColumbusDay$ {
    /** @deprecated use `ColumbusDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ColumbusDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `ColumbusDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ColumbusDay$Outbound, z.ZodTypeDef, ColumbusDay>;
    /** @deprecated use `ColumbusDay$Outbound` instead. */
    type Outbound = ColumbusDay$Outbound;
}
export declare function columbusDayToJSON(columbusDay: ColumbusDay): string;
export declare function columbusDayFromJSON(jsonString: string): SafeParseResult<ColumbusDay, SDKValidationError>;
/** @internal */
export declare const VeteransDay$inboundSchema: z.ZodType<VeteransDay, z.ZodTypeDef, unknown>;
/** @internal */
export type VeteransDay$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const VeteransDay$outboundSchema: z.ZodType<VeteransDay$Outbound, z.ZodTypeDef, VeteransDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VeteransDay$ {
    /** @deprecated use `VeteransDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VeteransDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `VeteransDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VeteransDay$Outbound, z.ZodTypeDef, VeteransDay>;
    /** @deprecated use `VeteransDay$Outbound` instead. */
    type Outbound = VeteransDay$Outbound;
}
export declare function veteransDayToJSON(veteransDay: VeteransDay): string;
export declare function veteransDayFromJSON(jsonString: string): SafeParseResult<VeteransDay, SDKValidationError>;
/** @internal */
export declare const Thanksgiving$inboundSchema: z.ZodType<Thanksgiving, z.ZodTypeDef, unknown>;
/** @internal */
export type Thanksgiving$Outbound = {
    selected?: boolean | undefined;
    name?: string | undefined;
    date?: string | undefined;
};
/** @internal */
export declare const Thanksgiving$outboundSchema: z.ZodType<Thanksgiving$Outbound, z.ZodTypeDef, Thanksgiving>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Thanksgiving$ {
    /** @deprecated use `Thanksgiving$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Thanksgiving, z.ZodTypeDef, unknown>;
    /** @deprecated use `Thanksgiving$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Thanksgiving$Outbound, z.ZodTypeDef, Thanksgiving>;
    /** @deprecated use `Thanksgiving$Outbound` instead. */
    type Outbound = Thanksgiving$Outbound;
}
export declare function thanksgivingToJSON(thanksgiving: Thanksgiving): string;
export declare function thanksgivingFromJSON(jsonString: string): SafeParseResult<Thanksgiving, SDKValidationError>;
/** @internal */
export declare const FederalHolidays$inboundSchema: z.ZodType<FederalHolidays, z.ZodTypeDef, unknown>;
/** @internal */
export type FederalHolidays$Outbound = {
    new_years_day?: NewYearsDay$Outbound | undefined;
    mlk_day?: MlkDay$Outbound | undefined;
    presidents_day?: PresidentsDay$Outbound | undefined;
    memorial_day?: MemorialDay$Outbound | undefined;
    juneteenth?: Juneteenth$Outbound | undefined;
    independence_day?: IndependenceDay$Outbound | undefined;
    labor_day?: LaborDay$Outbound | undefined;
    columbus_day?: ColumbusDay$Outbound | undefined;
    veterans_day?: VeteransDay$Outbound | undefined;
    thanksgiving?: Thanksgiving$Outbound | undefined;
};
/** @internal */
export declare const FederalHolidays$outboundSchema: z.ZodType<FederalHolidays$Outbound, z.ZodTypeDef, FederalHolidays>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FederalHolidays$ {
    /** @deprecated use `FederalHolidays$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FederalHolidays, z.ZodTypeDef, unknown>;
    /** @deprecated use `FederalHolidays$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FederalHolidays$Outbound, z.ZodTypeDef, FederalHolidays>;
    /** @deprecated use `FederalHolidays$Outbound` instead. */
    type Outbound = FederalHolidays$Outbound;
}
export declare function federalHolidaysToJSON(federalHolidays: FederalHolidays): string;
export declare function federalHolidaysFromJSON(jsonString: string): SafeParseResult<FederalHolidays, SDKValidationError>;
/** @internal */
export declare const HolidayPayPolicyEmployees$inboundSchema: z.ZodType<HolidayPayPolicyEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type HolidayPayPolicyEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const HolidayPayPolicyEmployees$outboundSchema: z.ZodType<HolidayPayPolicyEmployees$Outbound, z.ZodTypeDef, HolidayPayPolicyEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HolidayPayPolicyEmployees$ {
    /** @deprecated use `HolidayPayPolicyEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HolidayPayPolicyEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `HolidayPayPolicyEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HolidayPayPolicyEmployees$Outbound, z.ZodTypeDef, HolidayPayPolicyEmployees>;
    /** @deprecated use `HolidayPayPolicyEmployees$Outbound` instead. */
    type Outbound = HolidayPayPolicyEmployees$Outbound;
}
export declare function holidayPayPolicyEmployeesToJSON(holidayPayPolicyEmployees: HolidayPayPolicyEmployees): string;
export declare function holidayPayPolicyEmployeesFromJSON(jsonString: string): SafeParseResult<HolidayPayPolicyEmployees, SDKValidationError>;
/** @internal */
export declare const HolidayPayPolicy$inboundSchema: z.ZodType<HolidayPayPolicy, z.ZodTypeDef, unknown>;
/** @internal */
export type HolidayPayPolicy$Outbound = {
    version: string;
    company_uuid: string;
    federal_holidays: Array<FederalHolidays$Outbound>;
    employees: Array<HolidayPayPolicyEmployees$Outbound>;
};
/** @internal */
export declare const HolidayPayPolicy$outboundSchema: z.ZodType<HolidayPayPolicy$Outbound, z.ZodTypeDef, HolidayPayPolicy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HolidayPayPolicy$ {
    /** @deprecated use `HolidayPayPolicy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HolidayPayPolicy, z.ZodTypeDef, unknown>;
    /** @deprecated use `HolidayPayPolicy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HolidayPayPolicy$Outbound, z.ZodTypeDef, HolidayPayPolicy>;
    /** @deprecated use `HolidayPayPolicy$Outbound` instead. */
    type Outbound = HolidayPayPolicy$Outbound;
}
export declare function holidayPayPolicyToJSON(holidayPayPolicy: HolidayPayPolicy): string;
export declare function holidayPayPolicyFromJSON(jsonString: string): SafeParseResult<HolidayPayPolicy, SDKValidationError>;
//# sourceMappingURL=holidaypaypolicy.d.ts.map