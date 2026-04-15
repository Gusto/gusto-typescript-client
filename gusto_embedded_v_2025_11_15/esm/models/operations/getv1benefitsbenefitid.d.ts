import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SupportedBenefit } from "../components/supportedbenefit.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1BenefitsBenefitIdRequest = {
    /**
     * The benefit type in Gusto.
     */
    benefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1BenefitsBenefitIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Supported benefit response
     */
    supportedBenefit?: SupportedBenefit | undefined;
};
/** @internal */
export type GetV1BenefitsBenefitIdRequest$Outbound = {
    benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1BenefitsBenefitIdRequest$outboundSchema: z.ZodType<GetV1BenefitsBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitIdRequest>;
export declare function getV1BenefitsBenefitIdRequestToJSON(getV1BenefitsBenefitIdRequest: GetV1BenefitsBenefitIdRequest): string;
/** @internal */
export declare const GetV1BenefitsBenefitIdResponse$inboundSchema: z.ZodType<GetV1BenefitsBenefitIdResponse, z.ZodTypeDef, unknown>;
export declare function getV1BenefitsBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1benefitsbenefitid.d.ts.map