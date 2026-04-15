import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The employee's authorization status
 *
 * @remarks
 *
 *   * `citizen`: A citizen is someone who was born in the United States or is a naturalized citizen living in the United States.
 *   * `noncitizen`: A noncitizen national is someone born in American Samoa, certain former citizens of the former Trust Territory of the Pacific Islands, and certain children of noncitizen nationals born abroad.
 *   * `permanent_resident`: A lawful permanent resident is someone who is not a US citizen and who resides under legally recognized and lawfully recorded permanent residence as an immigrant.
 *   * `alien`: Also referred to as a "noncitizen authorized to work". This includes anyone who is authorized to work in the United States but is not a US citizen, US national or lawful permanent resident.
 */
export declare const AuthorizationStatus: {
    readonly Citizen: "citizen";
    readonly Noncitizen: "noncitizen";
    readonly PermanentResident: "permanent_resident";
    readonly Alien: "alien";
};
/**
 * The employee's authorization status
 *
 * @remarks
 *
 *   * `citizen`: A citizen is someone who was born in the United States or is a naturalized citizen living in the United States.
 *   * `noncitizen`: A noncitizen national is someone born in American Samoa, certain former citizens of the former Trust Territory of the Pacific Islands, and certain children of noncitizen nationals born abroad.
 *   * `permanent_resident`: A lawful permanent resident is someone who is not a US citizen and who resides under legally recognized and lawfully recorded permanent residence as an immigrant.
 *   * `alien`: Also referred to as a "noncitizen authorized to work". This includes anyone who is authorized to work in the United States but is not a US citizen, US national or lawful permanent resident.
 */
export type AuthorizationStatus = ClosedEnum<typeof AuthorizationStatus>;
/**
 * The type of document an employee holds, based on their authorization status.
 *
 * @remarks
 *
 *   * This is unused for authorization status `citizen` or `noncitizen`.
 *   * If the authorization status is `permanent_resident`, this must be `uscis_alien_registration_number`.
 *   * If the authorization status is `alien`, this is required and may be any of the valid values.
 */
export declare const DocumentType: {
    readonly UscisAlienRegistrationNumber: "uscis_alien_registration_number";
    readonly FormI94: "form_i94";
    readonly ForeignPassport: "foreign_passport";
};
/**
 * The type of document an employee holds, based on their authorization status.
 *
 * @remarks
 *
 *   * This is unused for authorization status `citizen` or `noncitizen`.
 *   * If the authorization status is `permanent_resident`, this must be `uscis_alien_registration_number`.
 *   * If the authorization status is `alien`, this is required and may be any of the valid values.
 */
export type DocumentType = ClosedEnum<typeof DocumentType>;
export type PutV1EmployeesEmployeeIdI9AuthorizationRequestBody = {
    /**
     * The employee's authorization status
     *
     * @remarks
     *
     *   * `citizen`: A citizen is someone who was born in the United States or is a naturalized citizen living in the United States.
     *   * `noncitizen`: A noncitizen national is someone born in American Samoa, certain former citizens of the former Trust Territory of the Pacific Islands, and certain children of noncitizen nationals born abroad.
     *   * `permanent_resident`: A lawful permanent resident is someone who is not a US citizen and who resides under legally recognized and lawfully recorded permanent residence as an immigrant.
     *   * `alien`: Also referred to as a "noncitizen authorized to work". This includes anyone who is authorized to work in the United States but is not a US citizen, US national or lawful permanent resident.
     */
    authorizationStatus: AuthorizationStatus;
    /**
     * The type of document an employee holds, based on their authorization status.
     *
     * @remarks
     *
     *   * This is unused for authorization status `citizen` or `noncitizen`.
     *   * If the authorization status is `permanent_resident`, this must be `uscis_alien_registration_number`.
     *   * If the authorization status is `alien`, this is required and may be any of the valid values.
     */
    documentType?: DocumentType | undefined;
    /**
     * The document number. Formatting depends on the employee's document type.
     *
     * @remarks
     *
     *   * For `document_type:'uscis_alien_registration_number'`, this must be a USCIS Number/A-Number, which is 7 to 9 digits.
     *   * For `document_type:'form_i94'`, this must be a Form I-94 Admission Number, which is 11 digits.
     *   * For `document_type:'foreign_passport'`, this must be the passport number.
     *
     * This is required when the document type is present.
     */
    documentNumber?: string | undefined;
    /**
     * The document's country of issuance.
     *
     * @remarks
     *
     * This is required when the document type is `foreign_passport`.
     */
    country?: string | undefined;
    /**
     * The document's expiration date.
     *
     * @remarks
     *
     * This may only be used when the authorization status is `alien`.
     */
    expirationDate?: string | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field. If supplied, this endpoint will update the existing I-9 authorization if it exists.
     */
    version?: string | undefined;
};
export type PutV1EmployeesEmployeeIdI9AuthorizationRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdI9AuthorizationRequestBody;
};
export type PutV1EmployeesEmployeeIdI9AuthorizationResponse = {
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
     * Example response
     */
    i9Authorization?: components.I9Authorization | undefined;
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
export declare const DocumentType$inboundSchema: z.ZodNativeEnum<typeof DocumentType>;
/** @internal */
export declare const DocumentType$outboundSchema: z.ZodNativeEnum<typeof DocumentType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentType$ {
    /** @deprecated use `DocumentType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly UscisAlienRegistrationNumber: "uscis_alien_registration_number";
        readonly FormI94: "form_i94";
        readonly ForeignPassport: "foreign_passport";
    }>;
    /** @deprecated use `DocumentType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly UscisAlienRegistrationNumber: "uscis_alien_registration_number";
        readonly FormI94: "form_i94";
        readonly ForeignPassport: "foreign_passport";
    }>;
}
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound = {
    authorization_status: string;
    document_type?: string | undefined;
    document_number?: string | undefined;
    country?: string | undefined;
    expiration_date?: string | undefined;
    version?: string | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationRequestBodyToJSON(putV1EmployeesEmployeeIdI9AuthorizationRequestBody: PutV1EmployeesEmployeeIdI9AuthorizationRequestBody): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationRequestToJSON(putV1EmployeesEmployeeIdI9AuthorizationRequest: PutV1EmployeesEmployeeIdI9AuthorizationRequest): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "I9-Authorization"?: components.I9Authorization$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationResponseToJSON(putV1EmployeesEmployeeIdI9AuthorizationResponse: PutV1EmployeesEmployeeIdI9AuthorizationResponse): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidi9authorization.d.ts.map