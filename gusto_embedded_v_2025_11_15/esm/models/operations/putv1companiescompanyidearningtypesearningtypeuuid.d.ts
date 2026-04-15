import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EarningType } from "../components/earningtype.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody = {
    /**
     * The name of the custom earning type.
     */
    name?: string | undefined;
};
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest = {
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
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody;
};
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    earningType?: EarningType | undefined;
};
/** @internal */
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound = {
    name?: string | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody>;
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBodyToJSON(putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody): string;
/** @internal */
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound = {
    company_id: string;
    earning_type_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest>;
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestToJSON(putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest): string;
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidearningtypesearningtypeuuid.d.ts.map