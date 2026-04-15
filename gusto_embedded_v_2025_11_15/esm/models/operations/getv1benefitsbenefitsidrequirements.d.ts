import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { BenefitTypeRequirements } from "../components/benefittyperequirements.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1BenefitsBenefitsIdRequirementsRequest = {
    /**
     * The benefit type in Gusto.
     */
    benefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1BenefitsBenefitsIdRequirementsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Benefit type requirements response
     */
    benefitTypeRequirements?: BenefitTypeRequirements | undefined;
};
/** @internal */
export type GetV1BenefitsBenefitsIdRequirementsRequest$Outbound = {
    benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1BenefitsBenefitsIdRequirementsRequest$outboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsRequest$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitsIdRequirementsRequest>;
export declare function getV1BenefitsBenefitsIdRequirementsRequestToJSON(getV1BenefitsBenefitsIdRequirementsRequest: GetV1BenefitsBenefitsIdRequirementsRequest): string;
/** @internal */
export declare const GetV1BenefitsBenefitsIdRequirementsResponse$inboundSchema: z.ZodType<GetV1BenefitsBenefitsIdRequirementsResponse, z.ZodTypeDef, unknown>;
export declare function getV1BenefitsBenefitsIdRequirementsResponseFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsBenefitsIdRequirementsResponse, SDKValidationError>;
//# sourceMappingURL=getv1benefitsbenefitsidrequirements.d.ts.map