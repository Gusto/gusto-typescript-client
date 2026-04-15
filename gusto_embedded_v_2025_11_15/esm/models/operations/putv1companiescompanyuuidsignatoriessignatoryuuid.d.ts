import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Signatory } from "../components/signatory.js";
import { SignatoryUpdateRequest, SignatoryUpdateRequest$Outbound } from "../components/signatoryupdaterequest.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion = ClosedEnum<typeof PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion>;
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the signatory
     */
    signatoryUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion | undefined;
    signatoryUpdateRequest: SignatoryUpdateRequest;
};
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    signatory?: Signatory | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion>;
/** @internal */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound = {
    company_uuid: string;
    signatory_uuid: string;
    "X-Gusto-API-Version": string;
    "Signatory-Update-Request": SignatoryUpdateRequest$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest>;
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestToJSON(putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest): string;
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyuuidsignatoriessignatoryuuid.d.ts.map