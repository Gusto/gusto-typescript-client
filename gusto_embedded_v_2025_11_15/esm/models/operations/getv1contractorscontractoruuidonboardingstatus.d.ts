import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorOnboardingStatus } from "../components/contractoronboardingstatus.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorsContractorUuidOnboardingStatusRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorsContractorUuidOnboardingStatusResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response.
     */
    contractorOnboardingStatus?: ContractorOnboardingStatus | undefined;
};
/** @internal */
export type GetV1ContractorsContractorUuidOnboardingStatusRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidOnboardingStatusRequest>;
export declare function getV1ContractorsContractorUuidOnboardingStatusRequestToJSON(getV1ContractorsContractorUuidOnboardingStatusRequest: GetV1ContractorsContractorUuidOnboardingStatusRequest): string;
/** @internal */
export declare const GetV1ContractorsContractorUuidOnboardingStatusResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorsContractorUuidOnboardingStatusResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidOnboardingStatusResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuidonboardingstatus.d.ts.map