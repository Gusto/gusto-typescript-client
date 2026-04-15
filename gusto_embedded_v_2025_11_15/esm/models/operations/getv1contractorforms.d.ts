import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Form1099 } from "../components/form1099.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorFormsRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorFormsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    form1099s?: Array<Form1099> | undefined;
};
/** @internal */
export type GetV1ContractorFormsRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorFormsRequest$outboundSchema: z.ZodType<GetV1ContractorFormsRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormsRequest>;
export declare function getV1ContractorFormsRequestToJSON(getV1ContractorFormsRequest: GetV1ContractorFormsRequest): string;
/** @internal */
export declare const GetV1ContractorFormsResponse$inboundSchema: z.ZodType<GetV1ContractorFormsResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorFormsResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormsResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorforms.d.ts.map