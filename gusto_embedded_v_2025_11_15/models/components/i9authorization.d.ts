import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The employee's authorization status
 */
export declare const AuthorizationStatus: {
    readonly Citizen: "citizen";
    readonly Noncitizen: "noncitizen";
    readonly PermanentResident: "permanent_resident";
    readonly Alien: "alien";
};
/**
 * The employee's authorization status
 */
export type AuthorizationStatus = ClosedEnum<typeof AuthorizationStatus>;
/**
 * The document's document type
 */
export declare const I9AuthorizationDocumentType: {
    readonly UscisAlienRegistrationNumber: "uscis_alien_registration_number";
    readonly FormI94: "form_i94";
    readonly ForeignPassport: "foreign_passport";
};
/**
 * The document's document type
 */
export type I9AuthorizationDocumentType = ClosedEnum<typeof I9AuthorizationDocumentType>;
/**
 * An employee's I-9 authorization
 */
export type I9Authorization = {
    /**
     * The UUID of the I-9 authorization
     */
    uuid: string;
    /**
     * The UUID of the Form associated with this I-9 authorization. Use this with "Employee Forms" API endpoints.
     */
    formUuid?: string | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * The employee's authorization status
     */
    authorizationStatus: AuthorizationStatus;
    /**
     * The document's document type
     */
    documentType?: I9AuthorizationDocumentType | undefined;
    /**
     * Whether or not a `document_number` exists for this document.
     */
    hasDocumentNumber?: boolean | undefined;
    /**
     * The document's expiration date
     */
    expirationDate?: string | undefined;
    /**
     * The document's country of issuance
     */
    country?: string | undefined;
    /**
     * Whether the employer has signed the Form I-9
     */
    employerSigned: boolean;
    /**
     * Whether the employee has signed the Form I-9
     */
    employeeSigned: boolean;
    /**
     * Any additional notes
     */
    additionalInfo?: string | undefined;
    /**
     * Whether an alternative procedure authorized by DHS to examine documents was used
     */
    altProcedure?: boolean | undefined;
};
/** @internal */
export declare const AuthorizationStatus$inboundSchema: z.ZodNativeEnum<typeof AuthorizationStatus>;
/** @internal */
export declare const AuthorizationStatus$outboundSchema: z.ZodNativeEnum<typeof AuthorizationStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuthorizationStatus$ {
    /** @deprecated use `AuthorizationStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Citizen: "citizen";
        readonly Noncitizen: "noncitizen";
        readonly PermanentResident: "permanent_resident";
        readonly Alien: "alien";
    }>;
    /** @deprecated use `AuthorizationStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Citizen: "citizen";
        readonly Noncitizen: "noncitizen";
        readonly PermanentResident: "permanent_resident";
        readonly Alien: "alien";
    }>;
}
/** @internal */
export declare const I9AuthorizationDocumentType$inboundSchema: z.ZodNativeEnum<typeof I9AuthorizationDocumentType>;
/** @internal */
export declare const I9AuthorizationDocumentType$outboundSchema: z.ZodNativeEnum<typeof I9AuthorizationDocumentType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace I9AuthorizationDocumentType$ {
    /** @deprecated use `I9AuthorizationDocumentType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly UscisAlienRegistrationNumber: "uscis_alien_registration_number";
        readonly FormI94: "form_i94";
        readonly ForeignPassport: "foreign_passport";
    }>;
    /** @deprecated use `I9AuthorizationDocumentType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly UscisAlienRegistrationNumber: "uscis_alien_registration_number";
        readonly FormI94: "form_i94";
        readonly ForeignPassport: "foreign_passport";
    }>;
}
/** @internal */
export declare const I9Authorization$inboundSchema: z.ZodType<I9Authorization, z.ZodTypeDef, unknown>;
/** @internal */
export type I9Authorization$Outbound = {
    uuid: string;
    form_uuid?: string | undefined;
    version: string;
    authorization_status: string;
    document_type?: string | undefined;
    has_document_number?: boolean | undefined;
    expiration_date?: string | undefined;
    country?: string | undefined;
    employer_signed: boolean;
    employee_signed: boolean;
    additional_info?: string | undefined;
    alt_procedure?: boolean | undefined;
};
/** @internal */
export declare const I9Authorization$outboundSchema: z.ZodType<I9Authorization$Outbound, z.ZodTypeDef, I9Authorization>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace I9Authorization$ {
    /** @deprecated use `I9Authorization$inboundSchema` instead. */
    const inboundSchema: z.ZodType<I9Authorization, z.ZodTypeDef, unknown>;
    /** @deprecated use `I9Authorization$outboundSchema` instead. */
    const outboundSchema: z.ZodType<I9Authorization$Outbound, z.ZodTypeDef, I9Authorization>;
    /** @deprecated use `I9Authorization$Outbound` instead. */
    type Outbound = I9Authorization$Outbound;
}
export declare function i9AuthorizationToJSON(i9Authorization: I9Authorization): string;
export declare function i9AuthorizationFromJSON(jsonString: string): SafeParseResult<I9Authorization, SDKValidationError>;
//# sourceMappingURL=i9authorization.d.ts.map