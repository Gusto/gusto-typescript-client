import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1CompanyBenefitsCompanyBenefitIdRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteV1CompanyBenefitsCompanyBenefitIdResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound = {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, DeleteV1CompanyBenefitsCompanyBenefitIdRequest>;
export declare function deleteV1CompanyBenefitsCompanyBenefitIdRequestToJSON(deleteV1CompanyBenefitsCompanyBenefitIdRequest: DeleteV1CompanyBenefitsCompanyBenefitIdRequest): string;
/** @internal */
export declare const DeleteV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema: z.ZodType<DeleteV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1CompanyBenefitsCompanyBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompanyBenefitsCompanyBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1companybenefitscompanybenefitid.d.ts.map