import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse = {
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
};
/** @internal */
export declare const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound = {
    company_uuid: string;
    signatory_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$ {
    /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest>;
    /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound` instead. */
    type Outbound = DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound;
}
export declare function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestToJSON(deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest: DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest): string;
export declare function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$ {
    /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse>;
    /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound` instead. */
    type Outbound = DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound;
}
export declare function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponseToJSON(deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse: DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse): string;
export declare function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1companiescompanyuuidsignatoriessignatoryuuid.d.ts.map