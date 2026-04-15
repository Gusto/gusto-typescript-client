import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Form1099 } from "../components/form1099.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorFormRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorFormResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    form1099?: Form1099 | undefined;
};
/** @internal */
export type GetV1ContractorFormRequest$Outbound = {
    contractor_uuid: string;
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorFormRequest$outboundSchema: z.ZodType<GetV1ContractorFormRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormRequest>;
export declare function getV1ContractorFormRequestToJSON(getV1ContractorFormRequest: GetV1ContractorFormRequest): string;
/** @internal */
export declare const GetV1ContractorFormResponse$inboundSchema: z.ZodType<GetV1ContractorFormResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorFormResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorform.d.ts.map