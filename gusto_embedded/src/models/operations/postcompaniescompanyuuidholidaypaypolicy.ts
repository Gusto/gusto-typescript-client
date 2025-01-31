/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NewYearsDay = {
  selected?: boolean | undefined;
};

export type MlkDay = {
  selected?: boolean | undefined;
};

export type PresidentsDay = {
  selected?: boolean | undefined;
};

export type MemorialDay = {
  selected?: boolean | undefined;
};

export type Juneteenth = {
  selected?: boolean | undefined;
};

export type IndependenceDay = {
  selected?: boolean | undefined;
};

export type LaborDay = {
  selected?: boolean | undefined;
};

export type ColumbusDay = {
  selected?: boolean | undefined;
};

export type VeteransDay = {
  selected?: boolean | undefined;
};

export type Thanksgiving = {
  selected?: boolean | undefined;
};

export type ChristmasDay = {
  selected?: boolean | undefined;
};

/**
 * An object containing federal holiday objects, each containing a boolean selected property.
 */
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
  christmasDay?: ChristmasDay | undefined;
};

export type PostCompaniesCompanyUuidHolidayPayPolicyRequestBody = {
  /**
   * An object containing federal holiday objects, each containing a boolean selected property.
   */
  federalHolidays?: FederalHolidays | undefined;
};

export type PostCompaniesCompanyUuidHolidayPayPolicyRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostCompaniesCompanyUuidHolidayPayPolicyRequestBody;
};

/** @internal */
export const NewYearsDay$inboundSchema: z.ZodType<
  NewYearsDay,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type NewYearsDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const NewYearsDay$outboundSchema: z.ZodType<
  NewYearsDay$Outbound,
  z.ZodTypeDef,
  NewYearsDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NewYearsDay$ {
  /** @deprecated use `NewYearsDay$inboundSchema` instead. */
  export const inboundSchema = NewYearsDay$inboundSchema;
  /** @deprecated use `NewYearsDay$outboundSchema` instead. */
  export const outboundSchema = NewYearsDay$outboundSchema;
  /** @deprecated use `NewYearsDay$Outbound` instead. */
  export type Outbound = NewYearsDay$Outbound;
}

export function newYearsDayToJSON(newYearsDay: NewYearsDay): string {
  return JSON.stringify(NewYearsDay$outboundSchema.parse(newYearsDay));
}

export function newYearsDayFromJSON(
  jsonString: string,
): SafeParseResult<NewYearsDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NewYearsDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NewYearsDay' from JSON`,
  );
}

/** @internal */
export const MlkDay$inboundSchema: z.ZodType<MlkDay, z.ZodTypeDef, unknown> = z
  .object({
    selected: z.boolean().optional(),
  });

/** @internal */
export type MlkDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const MlkDay$outboundSchema: z.ZodType<
  MlkDay$Outbound,
  z.ZodTypeDef,
  MlkDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MlkDay$ {
  /** @deprecated use `MlkDay$inboundSchema` instead. */
  export const inboundSchema = MlkDay$inboundSchema;
  /** @deprecated use `MlkDay$outboundSchema` instead. */
  export const outboundSchema = MlkDay$outboundSchema;
  /** @deprecated use `MlkDay$Outbound` instead. */
  export type Outbound = MlkDay$Outbound;
}

export function mlkDayToJSON(mlkDay: MlkDay): string {
  return JSON.stringify(MlkDay$outboundSchema.parse(mlkDay));
}

export function mlkDayFromJSON(
  jsonString: string,
): SafeParseResult<MlkDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MlkDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MlkDay' from JSON`,
  );
}

/** @internal */
export const PresidentsDay$inboundSchema: z.ZodType<
  PresidentsDay,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type PresidentsDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const PresidentsDay$outboundSchema: z.ZodType<
  PresidentsDay$Outbound,
  z.ZodTypeDef,
  PresidentsDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PresidentsDay$ {
  /** @deprecated use `PresidentsDay$inboundSchema` instead. */
  export const inboundSchema = PresidentsDay$inboundSchema;
  /** @deprecated use `PresidentsDay$outboundSchema` instead. */
  export const outboundSchema = PresidentsDay$outboundSchema;
  /** @deprecated use `PresidentsDay$Outbound` instead. */
  export type Outbound = PresidentsDay$Outbound;
}

export function presidentsDayToJSON(presidentsDay: PresidentsDay): string {
  return JSON.stringify(PresidentsDay$outboundSchema.parse(presidentsDay));
}

export function presidentsDayFromJSON(
  jsonString: string,
): SafeParseResult<PresidentsDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PresidentsDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PresidentsDay' from JSON`,
  );
}

/** @internal */
export const MemorialDay$inboundSchema: z.ZodType<
  MemorialDay,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type MemorialDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const MemorialDay$outboundSchema: z.ZodType<
  MemorialDay$Outbound,
  z.ZodTypeDef,
  MemorialDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MemorialDay$ {
  /** @deprecated use `MemorialDay$inboundSchema` instead. */
  export const inboundSchema = MemorialDay$inboundSchema;
  /** @deprecated use `MemorialDay$outboundSchema` instead. */
  export const outboundSchema = MemorialDay$outboundSchema;
  /** @deprecated use `MemorialDay$Outbound` instead. */
  export type Outbound = MemorialDay$Outbound;
}

export function memorialDayToJSON(memorialDay: MemorialDay): string {
  return JSON.stringify(MemorialDay$outboundSchema.parse(memorialDay));
}

export function memorialDayFromJSON(
  jsonString: string,
): SafeParseResult<MemorialDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MemorialDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MemorialDay' from JSON`,
  );
}

/** @internal */
export const Juneteenth$inboundSchema: z.ZodType<
  Juneteenth,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type Juneteenth$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const Juneteenth$outboundSchema: z.ZodType<
  Juneteenth$Outbound,
  z.ZodTypeDef,
  Juneteenth
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Juneteenth$ {
  /** @deprecated use `Juneteenth$inboundSchema` instead. */
  export const inboundSchema = Juneteenth$inboundSchema;
  /** @deprecated use `Juneteenth$outboundSchema` instead. */
  export const outboundSchema = Juneteenth$outboundSchema;
  /** @deprecated use `Juneteenth$Outbound` instead. */
  export type Outbound = Juneteenth$Outbound;
}

export function juneteenthToJSON(juneteenth: Juneteenth): string {
  return JSON.stringify(Juneteenth$outboundSchema.parse(juneteenth));
}

export function juneteenthFromJSON(
  jsonString: string,
): SafeParseResult<Juneteenth, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Juneteenth$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Juneteenth' from JSON`,
  );
}

/** @internal */
export const IndependenceDay$inboundSchema: z.ZodType<
  IndependenceDay,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type IndependenceDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const IndependenceDay$outboundSchema: z.ZodType<
  IndependenceDay$Outbound,
  z.ZodTypeDef,
  IndependenceDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndependenceDay$ {
  /** @deprecated use `IndependenceDay$inboundSchema` instead. */
  export const inboundSchema = IndependenceDay$inboundSchema;
  /** @deprecated use `IndependenceDay$outboundSchema` instead. */
  export const outboundSchema = IndependenceDay$outboundSchema;
  /** @deprecated use `IndependenceDay$Outbound` instead. */
  export type Outbound = IndependenceDay$Outbound;
}

export function independenceDayToJSON(
  independenceDay: IndependenceDay,
): string {
  return JSON.stringify(IndependenceDay$outboundSchema.parse(independenceDay));
}

export function independenceDayFromJSON(
  jsonString: string,
): SafeParseResult<IndependenceDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IndependenceDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IndependenceDay' from JSON`,
  );
}

/** @internal */
export const LaborDay$inboundSchema: z.ZodType<
  LaborDay,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type LaborDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const LaborDay$outboundSchema: z.ZodType<
  LaborDay$Outbound,
  z.ZodTypeDef,
  LaborDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LaborDay$ {
  /** @deprecated use `LaborDay$inboundSchema` instead. */
  export const inboundSchema = LaborDay$inboundSchema;
  /** @deprecated use `LaborDay$outboundSchema` instead. */
  export const outboundSchema = LaborDay$outboundSchema;
  /** @deprecated use `LaborDay$Outbound` instead. */
  export type Outbound = LaborDay$Outbound;
}

export function laborDayToJSON(laborDay: LaborDay): string {
  return JSON.stringify(LaborDay$outboundSchema.parse(laborDay));
}

export function laborDayFromJSON(
  jsonString: string,
): SafeParseResult<LaborDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LaborDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LaborDay' from JSON`,
  );
}

/** @internal */
export const ColumbusDay$inboundSchema: z.ZodType<
  ColumbusDay,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type ColumbusDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const ColumbusDay$outboundSchema: z.ZodType<
  ColumbusDay$Outbound,
  z.ZodTypeDef,
  ColumbusDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ColumbusDay$ {
  /** @deprecated use `ColumbusDay$inboundSchema` instead. */
  export const inboundSchema = ColumbusDay$inboundSchema;
  /** @deprecated use `ColumbusDay$outboundSchema` instead. */
  export const outboundSchema = ColumbusDay$outboundSchema;
  /** @deprecated use `ColumbusDay$Outbound` instead. */
  export type Outbound = ColumbusDay$Outbound;
}

export function columbusDayToJSON(columbusDay: ColumbusDay): string {
  return JSON.stringify(ColumbusDay$outboundSchema.parse(columbusDay));
}

export function columbusDayFromJSON(
  jsonString: string,
): SafeParseResult<ColumbusDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ColumbusDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ColumbusDay' from JSON`,
  );
}

/** @internal */
export const VeteransDay$inboundSchema: z.ZodType<
  VeteransDay,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type VeteransDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const VeteransDay$outboundSchema: z.ZodType<
  VeteransDay$Outbound,
  z.ZodTypeDef,
  VeteransDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VeteransDay$ {
  /** @deprecated use `VeteransDay$inboundSchema` instead. */
  export const inboundSchema = VeteransDay$inboundSchema;
  /** @deprecated use `VeteransDay$outboundSchema` instead. */
  export const outboundSchema = VeteransDay$outboundSchema;
  /** @deprecated use `VeteransDay$Outbound` instead. */
  export type Outbound = VeteransDay$Outbound;
}

export function veteransDayToJSON(veteransDay: VeteransDay): string {
  return JSON.stringify(VeteransDay$outboundSchema.parse(veteransDay));
}

export function veteransDayFromJSON(
  jsonString: string,
): SafeParseResult<VeteransDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VeteransDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VeteransDay' from JSON`,
  );
}

/** @internal */
export const Thanksgiving$inboundSchema: z.ZodType<
  Thanksgiving,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type Thanksgiving$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const Thanksgiving$outboundSchema: z.ZodType<
  Thanksgiving$Outbound,
  z.ZodTypeDef,
  Thanksgiving
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Thanksgiving$ {
  /** @deprecated use `Thanksgiving$inboundSchema` instead. */
  export const inboundSchema = Thanksgiving$inboundSchema;
  /** @deprecated use `Thanksgiving$outboundSchema` instead. */
  export const outboundSchema = Thanksgiving$outboundSchema;
  /** @deprecated use `Thanksgiving$Outbound` instead. */
  export type Outbound = Thanksgiving$Outbound;
}

export function thanksgivingToJSON(thanksgiving: Thanksgiving): string {
  return JSON.stringify(Thanksgiving$outboundSchema.parse(thanksgiving));
}

export function thanksgivingFromJSON(
  jsonString: string,
): SafeParseResult<Thanksgiving, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Thanksgiving$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Thanksgiving' from JSON`,
  );
}

/** @internal */
export const ChristmasDay$inboundSchema: z.ZodType<
  ChristmasDay,
  z.ZodTypeDef,
  unknown
> = z.object({
  selected: z.boolean().optional(),
});

/** @internal */
export type ChristmasDay$Outbound = {
  selected?: boolean | undefined;
};

/** @internal */
export const ChristmasDay$outboundSchema: z.ZodType<
  ChristmasDay$Outbound,
  z.ZodTypeDef,
  ChristmasDay
> = z.object({
  selected: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChristmasDay$ {
  /** @deprecated use `ChristmasDay$inboundSchema` instead. */
  export const inboundSchema = ChristmasDay$inboundSchema;
  /** @deprecated use `ChristmasDay$outboundSchema` instead. */
  export const outboundSchema = ChristmasDay$outboundSchema;
  /** @deprecated use `ChristmasDay$Outbound` instead. */
  export type Outbound = ChristmasDay$Outbound;
}

export function christmasDayToJSON(christmasDay: ChristmasDay): string {
  return JSON.stringify(ChristmasDay$outboundSchema.parse(christmasDay));
}

export function christmasDayFromJSON(
  jsonString: string,
): SafeParseResult<ChristmasDay, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChristmasDay$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChristmasDay' from JSON`,
  );
}

/** @internal */
export const FederalHolidays$inboundSchema: z.ZodType<
  FederalHolidays,
  z.ZodTypeDef,
  unknown
> = z.object({
  new_years_day: z.lazy(() => NewYearsDay$inboundSchema).optional(),
  mlk_day: z.lazy(() => MlkDay$inboundSchema).optional(),
  presidents_day: z.lazy(() => PresidentsDay$inboundSchema).optional(),
  memorial_day: z.lazy(() => MemorialDay$inboundSchema).optional(),
  juneteenth: z.lazy(() => Juneteenth$inboundSchema).optional(),
  independence_day: z.lazy(() => IndependenceDay$inboundSchema).optional(),
  labor_day: z.lazy(() => LaborDay$inboundSchema).optional(),
  columbus_day: z.lazy(() => ColumbusDay$inboundSchema).optional(),
  veterans_day: z.lazy(() => VeteransDay$inboundSchema).optional(),
  thanksgiving: z.lazy(() => Thanksgiving$inboundSchema).optional(),
  christmas_day: z.lazy(() => ChristmasDay$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "new_years_day": "newYearsDay",
    "mlk_day": "mlkDay",
    "presidents_day": "presidentsDay",
    "memorial_day": "memorialDay",
    "independence_day": "independenceDay",
    "labor_day": "laborDay",
    "columbus_day": "columbusDay",
    "veterans_day": "veteransDay",
    "christmas_day": "christmasDay",
  });
});

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
  christmas_day?: ChristmasDay$Outbound | undefined;
};

/** @internal */
export const FederalHolidays$outboundSchema: z.ZodType<
  FederalHolidays$Outbound,
  z.ZodTypeDef,
  FederalHolidays
> = z.object({
  newYearsDay: z.lazy(() => NewYearsDay$outboundSchema).optional(),
  mlkDay: z.lazy(() => MlkDay$outboundSchema).optional(),
  presidentsDay: z.lazy(() => PresidentsDay$outboundSchema).optional(),
  memorialDay: z.lazy(() => MemorialDay$outboundSchema).optional(),
  juneteenth: z.lazy(() => Juneteenth$outboundSchema).optional(),
  independenceDay: z.lazy(() => IndependenceDay$outboundSchema).optional(),
  laborDay: z.lazy(() => LaborDay$outboundSchema).optional(),
  columbusDay: z.lazy(() => ColumbusDay$outboundSchema).optional(),
  veteransDay: z.lazy(() => VeteransDay$outboundSchema).optional(),
  thanksgiving: z.lazy(() => Thanksgiving$outboundSchema).optional(),
  christmasDay: z.lazy(() => ChristmasDay$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    newYearsDay: "new_years_day",
    mlkDay: "mlk_day",
    presidentsDay: "presidents_day",
    memorialDay: "memorial_day",
    independenceDay: "independence_day",
    laborDay: "labor_day",
    columbusDay: "columbus_day",
    veteransDay: "veterans_day",
    christmasDay: "christmas_day",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FederalHolidays$ {
  /** @deprecated use `FederalHolidays$inboundSchema` instead. */
  export const inboundSchema = FederalHolidays$inboundSchema;
  /** @deprecated use `FederalHolidays$outboundSchema` instead. */
  export const outboundSchema = FederalHolidays$outboundSchema;
  /** @deprecated use `FederalHolidays$Outbound` instead. */
  export type Outbound = FederalHolidays$Outbound;
}

export function federalHolidaysToJSON(
  federalHolidays: FederalHolidays,
): string {
  return JSON.stringify(FederalHolidays$outboundSchema.parse(federalHolidays));
}

export function federalHolidaysFromJSON(
  jsonString: string,
): SafeParseResult<FederalHolidays, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FederalHolidays$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FederalHolidays' from JSON`,
  );
}

/** @internal */
export const PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidHolidayPayPolicyRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    federal_holidays: z.lazy(() => FederalHolidays$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "federal_holidays": "federalHolidays",
    });
  });

/** @internal */
export type PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound = {
  federal_holidays?: FederalHolidays$Outbound | undefined;
};

/** @internal */
export const PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound,
    z.ZodTypeDef,
    PostCompaniesCompanyUuidHolidayPayPolicyRequestBody
  > = z.object({
    federalHolidays: z.lazy(() => FederalHolidays$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      federalHolidays: "federal_holidays",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$ {
  /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound` instead. */
  export type Outbound =
    PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound;
}

export function postCompaniesCompanyUuidHolidayPayPolicyRequestBodyToJSON(
  postCompaniesCompanyUuidHolidayPayPolicyRequestBody:
    PostCompaniesCompanyUuidHolidayPayPolicyRequestBody,
): string {
  return JSON.stringify(
    PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema.parse(
      postCompaniesCompanyUuidHolidayPayPolicyRequestBody,
    ),
  );
}

export function postCompaniesCompanyUuidHolidayPayPolicyRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostCompaniesCompanyUuidHolidayPayPolicyRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostCompaniesCompanyUuidHolidayPayPolicyRequestBody' from JSON`,
  );
}

/** @internal */
export const PostCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidHolidayPayPolicyRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound;
};

/** @internal */
export const PostCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound,
    z.ZodTypeDef,
    PostCompaniesCompanyUuidHolidayPayPolicyRequest
  > = z.object({
    companyUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidHolidayPayPolicyRequest$ {
  /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound` instead. */
  export type Outbound =
    PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound;
}

export function postCompaniesCompanyUuidHolidayPayPolicyRequestToJSON(
  postCompaniesCompanyUuidHolidayPayPolicyRequest:
    PostCompaniesCompanyUuidHolidayPayPolicyRequest,
): string {
  return JSON.stringify(
    PostCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema.parse(
      postCompaniesCompanyUuidHolidayPayPolicyRequest,
    ),
  );
}

export function postCompaniesCompanyUuidHolidayPayPolicyRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostCompaniesCompanyUuidHolidayPayPolicyRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostCompaniesCompanyUuidHolidayPayPolicyRequest' from JSON`,
  );
}
