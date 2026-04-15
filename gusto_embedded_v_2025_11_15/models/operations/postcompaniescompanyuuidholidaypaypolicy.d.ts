import * as z from "zod";
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
export type PostCompaniesCompanyUuidHolidayPayPolicyResponse = {
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
export declare const NewYearsDay$inboundSchema: z.ZodType<NewYearsDay, z.ZodTypeDef, unknown>;
/** @internal */
export type NewYearsDay$Outbound = {
    selected?: boolean | undefined;
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
export declare const ChristmasDay$inboundSchema: z.ZodType<ChristmasDay, z.ZodTypeDef, unknown>;
/** @internal */
export type ChristmasDay$Outbound = {
    selected?: boolean | undefined;
};
/** @internal */
export declare const ChristmasDay$outboundSchema: z.ZodType<ChristmasDay$Outbound, z.ZodTypeDef, ChristmasDay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ChristmasDay$ {
    /** @deprecated use `ChristmasDay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ChristmasDay, z.ZodTypeDef, unknown>;
    /** @deprecated use `ChristmasDay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ChristmasDay$Outbound, z.ZodTypeDef, ChristmasDay>;
    /** @deprecated use `ChristmasDay$Outbound` instead. */
    type Outbound = ChristmasDay$Outbound;
}
export declare function christmasDayToJSON(christmasDay: ChristmasDay): string;
export declare function christmasDayFromJSON(jsonString: string): SafeParseResult<ChristmasDay, SDKValidationError>;
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
    christmas_day?: ChristmasDay$Outbound | undefined;
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
export declare const PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound = {
    federal_holidays?: FederalHolidays$Outbound | undefined;
};
/** @internal */
export declare const PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidHolidayPayPolicyRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$ {
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidHolidayPayPolicyRequestBody>;
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound;
}
export declare function postCompaniesCompanyUuidHolidayPayPolicyRequestBodyToJSON(postCompaniesCompanyUuidHolidayPayPolicyRequestBody: PostCompaniesCompanyUuidHolidayPayPolicyRequestBody): string;
export declare function postCompaniesCompanyUuidHolidayPayPolicyRequestBodyFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidHolidayPayPolicyRequestBody, SDKValidationError>;
/** @internal */
export declare const PostCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostCompaniesCompanyUuidHolidayPayPolicyRequestBody$Outbound;
};
/** @internal */
export declare const PostCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidHolidayPayPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidHolidayPayPolicyRequest$ {
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidHolidayPayPolicyRequest>;
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound;
}
export declare function postCompaniesCompanyUuidHolidayPayPolicyRequestToJSON(postCompaniesCompanyUuidHolidayPayPolicyRequest: PostCompaniesCompanyUuidHolidayPayPolicyRequest): string;
export declare function postCompaniesCompanyUuidHolidayPayPolicyRequestFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidHolidayPayPolicyRequest, SDKValidationError>;
/** @internal */
export declare const PostCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Holiday-Pay-Policy"?: components.HolidayPayPolicy$Outbound | undefined;
};
/** @internal */
export declare const PostCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidHolidayPayPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidHolidayPayPolicyResponse$ {
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidHolidayPayPolicyResponse>;
    /** @deprecated use `PostCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound;
}
export declare function postCompaniesCompanyUuidHolidayPayPolicyResponseToJSON(postCompaniesCompanyUuidHolidayPayPolicyResponse: PostCompaniesCompanyUuidHolidayPayPolicyResponse): string;
export declare function postCompaniesCompanyUuidHolidayPayPolicyResponseFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidHolidayPayPolicyResponse, SDKValidationError>;
//# sourceMappingURL=postcompaniescompanyuuidholidaypaypolicy.d.ts.map