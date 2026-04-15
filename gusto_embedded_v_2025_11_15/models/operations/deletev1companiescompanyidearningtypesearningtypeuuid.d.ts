import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the earning type
     */
    earningTypeUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse = {
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
export declare const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound = {
    company_id: string;
    earning_type_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$ {
    /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound` instead. */
    type Outbound = DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound;
}
export declare function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestToJSON(deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest: DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest): string;
export declare function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$ {
    /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound` instead. */
    type Outbound = DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound;
}
export declare function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponseToJSON(deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse: DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse): string;
export declare function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1companiescompanyidearningtypesearningtypeuuid.d.ts.map