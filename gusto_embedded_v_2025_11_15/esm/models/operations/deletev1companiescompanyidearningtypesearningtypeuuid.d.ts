import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound = {
    company_id: string;
    earning_type_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest>;
export declare function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestToJSON(deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest: DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest): string;
/** @internal */
export declare const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1companiescompanyidearningtypesearningtypeuuid.d.ts.map