import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Base = {
    type?: string | undefined;
    message?: string | undefined;
    fullMessage?: string | undefined;
};
export type DeleteV1CompanyBenefitsCompanyBenefitIdErrors = {
    base?: Array<Base> | undefined;
};
/**
 * Unprocessable Entity
 */
export type DeleteV1CompanyBenefitsCompanyBenefitIdResponseBodyData = {
    errors?: DeleteV1CompanyBenefitsCompanyBenefitIdErrors | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};
/**
 * Unprocessable Entity
 */
export declare class DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody extends Error {
    errors?: DeleteV1CompanyBenefitsCompanyBenefitIdErrors | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /** The original data that was passed to this error instance. */
    data$: DeleteV1CompanyBenefitsCompanyBenefitIdResponseBodyData;
    constructor(err: DeleteV1CompanyBenefitsCompanyBenefitIdResponseBodyData);
}
/** @internal */
export declare const Base$inboundSchema: z.ZodType<Base, z.ZodTypeDef, unknown>;
/** @internal */
export type Base$Outbound = {
    type?: string | undefined;
    message?: string | undefined;
    full_message?: string | undefined;
};
/** @internal */
export declare const Base$outboundSchema: z.ZodType<Base$Outbound, z.ZodTypeDef, Base>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Base$ {
    /** @deprecated use `Base$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Base, z.ZodTypeDef, unknown>;
    /** @deprecated use `Base$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Base$Outbound, z.ZodTypeDef, Base>;
    /** @deprecated use `Base$Outbound` instead. */
    type Outbound = Base$Outbound;
}
export declare function baseToJSON(base: Base): string;
export declare function baseFromJSON(jsonString: string): SafeParseResult<Base, SDKValidationError>;
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdErrors$inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdErrors, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound = {
    base?: Array<Base$Outbound> | undefined;
};
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdErrors$outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdErrors>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompanyBenefitsCompanyBenefitIdErrors$ {
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdErrors$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdErrors, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdErrors$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdErrors>;
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound` instead. */
    type Outbound = DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound;
}
export declare function deleteV1CompanyBenefitsCompanyBenefitIdErrorsToJSON(deleteV1CompanyBenefitsCompanyBenefitIdErrors: DeleteV1CompanyBenefitsCompanyBenefitIdErrors): string;
export declare function deleteV1CompanyBenefitsCompanyBenefitIdErrorsFromJSON(jsonString: string): SafeParseResult<DeleteV1CompanyBenefitsCompanyBenefitIdErrors, SDKValidationError>;
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound = {
    errors?: DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound | undefined;
    RawResponse?: never | undefined;
};
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$ {
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody>;
    /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound` instead. */
    type Outbound = DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound;
}
//# sourceMappingURL=deletev1companybenefitscompanybenefitid.d.ts.map