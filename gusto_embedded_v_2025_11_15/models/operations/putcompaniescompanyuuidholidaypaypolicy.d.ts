import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyMlkDay = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyLaborDay = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving = {
    selected?: boolean | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay = {
    selected?: boolean | undefined;
};
/**
 * An object containing federal holiday objects, each containing a boolean selected property.
 */
export type PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays = {
    newYearsDay?: PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay | undefined;
    mlkDay?: PutCompaniesCompanyUuidHolidayPayPolicyMlkDay | undefined;
    presidentsDay?: PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay | undefined;
    memorialDay?: PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay | undefined;
    juneteenth?: PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth | undefined;
    independenceDay?: PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay | undefined;
    laborDay?: PutCompaniesCompanyUuidHolidayPayPolicyLaborDay | undefined;
    columbusDay?: PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay | undefined;
    veteransDay?: PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay | undefined;
    thanksgiving?: PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving | undefined;
    christmasDay?: PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * An object containing federal holiday objects, each containing a boolean selected property.
     */
    federalHolidays?: PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays | undefined;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutCompaniesCompanyUuidHolidayPayPolicyRequestBody;
};
export type PutCompaniesCompanyUuidHolidayPayPolicyResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Holiday Pay Policy Object Example
     */
    holidayPayPolicy?: components.HolidayPayPolicy | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyNewYearsDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyNewYearsDay: PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyNewYearsDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyMlkDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyMlkDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyMlkDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyMlkDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyMlkDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyMlkDay: PutCompaniesCompanyUuidHolidayPayPolicyMlkDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyMlkDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyMlkDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyPresidentsDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyPresidentsDay: PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyPresidentsDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyMemorialDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyMemorialDay: PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyMemorialDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyJuneteenthToJSON(putCompaniesCompanyUuidHolidayPayPolicyJuneteenth: PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyJuneteenthFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyIndependenceDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyIndependenceDay: PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyIndependenceDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyLaborDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyLaborDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyLaborDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyLaborDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyLaborDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyLaborDay: PutCompaniesCompanyUuidHolidayPayPolicyLaborDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyLaborDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyLaborDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyColumbusDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyColumbusDay: PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyColumbusDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyVeteransDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyVeteransDay: PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyVeteransDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyThanksgivingToJSON(putCompaniesCompanyUuidHolidayPayPolicyThanksgiving: PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyThanksgivingFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyChristmasDayToJSON(putCompaniesCompanyUuidHolidayPayPolicyChristmasDay: PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyChristmasDayFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$Outbound = {
    new_years_day?: PutCompaniesCompanyUuidHolidayPayPolicyNewYearsDay$Outbound | undefined;
    mlk_day?: PutCompaniesCompanyUuidHolidayPayPolicyMlkDay$Outbound | undefined;
    presidents_day?: PutCompaniesCompanyUuidHolidayPayPolicyPresidentsDay$Outbound | undefined;
    memorial_day?: PutCompaniesCompanyUuidHolidayPayPolicyMemorialDay$Outbound | undefined;
    juneteenth?: PutCompaniesCompanyUuidHolidayPayPolicyJuneteenth$Outbound | undefined;
    independence_day?: PutCompaniesCompanyUuidHolidayPayPolicyIndependenceDay$Outbound | undefined;
    labor_day?: PutCompaniesCompanyUuidHolidayPayPolicyLaborDay$Outbound | undefined;
    columbus_day?: PutCompaniesCompanyUuidHolidayPayPolicyColumbusDay$Outbound | undefined;
    veterans_day?: PutCompaniesCompanyUuidHolidayPayPolicyVeteransDay$Outbound | undefined;
    thanksgiving?: PutCompaniesCompanyUuidHolidayPayPolicyThanksgiving$Outbound | undefined;
    christmas_day?: PutCompaniesCompanyUuidHolidayPayPolicyChristmasDay$Outbound | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyFederalHolidaysToJSON(putCompaniesCompanyUuidHolidayPayPolicyFederalHolidays: PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyFederalHolidaysFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound = {
    version: string;
    federal_holidays?: PutCompaniesCompanyUuidHolidayPayPolicyFederalHolidays$Outbound | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRequestBody>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyRequestBodyToJSON(putCompaniesCompanyUuidHolidayPayPolicyRequestBody: PutCompaniesCompanyUuidHolidayPayPolicyRequestBody): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyRequestBodyFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyRequestBody, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyRequest$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyRequest>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyRequestToJSON(putCompaniesCompanyUuidHolidayPayPolicyRequest: PutCompaniesCompanyUuidHolidayPayPolicyRequest): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyRequestFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyRequest, SDKValidationError>;
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Holiday-Pay-Policy"?: components.HolidayPayPolicy$Outbound | undefined;
};
/** @internal */
export declare const PutCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutCompaniesCompanyUuidHolidayPayPolicyResponse$ {
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound, z.ZodTypeDef, PutCompaniesCompanyUuidHolidayPayPolicyResponse>;
    /** @deprecated use `PutCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound` instead. */
    type Outbound = PutCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound;
}
export declare function putCompaniesCompanyUuidHolidayPayPolicyResponseToJSON(putCompaniesCompanyUuidHolidayPayPolicyResponse: PutCompaniesCompanyUuidHolidayPayPolicyResponse): string;
export declare function putCompaniesCompanyUuidHolidayPayPolicyResponseFromJSON(jsonString: string): SafeParseResult<PutCompaniesCompanyUuidHolidayPayPolicyResponse, SDKValidationError>;
//# sourceMappingURL=putcompaniescompanyuuidholidaypaypolicy.d.ts.map