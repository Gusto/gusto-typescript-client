import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion = ClosedEnum<typeof DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion>;
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest = {
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
    xGustoAPIVersion?: DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion | undefined;
};
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidHeaderXGustoAPIVersion>;
/** @internal */
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound = {
    company_uuid: string;
    signatory_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest>;
export declare function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestToJSON(deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest: DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest): string;
/** @internal */
export declare const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1companiescompanyuuidsignatoriessignatoryuuid.d.ts.map