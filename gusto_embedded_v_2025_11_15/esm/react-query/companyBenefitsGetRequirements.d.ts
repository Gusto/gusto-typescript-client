import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1BenefitsBenefitsIdRequirementsRequest } from "../models/operations/getv1benefitsbenefitsidrequirements.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildCompanyBenefitsGetRequirementsQuery, CompanyBenefitsGetRequirementsQueryData, prefetchCompanyBenefitsGetRequirements, queryKeyCompanyBenefitsGetRequirements } from "./companyBenefitsGetRequirements.core.js";
export { buildCompanyBenefitsGetRequirementsQuery, type CompanyBenefitsGetRequirementsQueryData, prefetchCompanyBenefitsGetRequirements, queryKeyCompanyBenefitsGetRequirements, };
export type CompanyBenefitsGetRequirementsQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get benefit fields requirements by ID
 *
 * @remarks
 * Returns field requirements for the requested benefit type.
 *
 * scope: `benefits:read`
 */
export declare function useCompanyBenefitsGetRequirements(request: GetV1BenefitsBenefitsIdRequirementsRequest, options?: QueryHookOptions<CompanyBenefitsGetRequirementsQueryData, CompanyBenefitsGetRequirementsQueryError>): UseQueryResult<CompanyBenefitsGetRequirementsQueryData, CompanyBenefitsGetRequirementsQueryError>;
/**
 * Get benefit fields requirements by ID
 *
 * @remarks
 * Returns field requirements for the requested benefit type.
 *
 * scope: `benefits:read`
 */
export declare function useCompanyBenefitsGetRequirementsSuspense(request: GetV1BenefitsBenefitsIdRequirementsRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetRequirementsQueryData, CompanyBenefitsGetRequirementsQueryError>): UseSuspenseQueryResult<CompanyBenefitsGetRequirementsQueryData, CompanyBenefitsGetRequirementsQueryError>;
export declare function setCompanyBenefitsGetRequirementsData(client: QueryClient, queryKeyBase: [
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: CompanyBenefitsGetRequirementsQueryData): CompanyBenefitsGetRequirementsQueryData | undefined;
export declare function invalidateCompanyBenefitsGetRequirements(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGetRequirements(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=companyBenefitsGetRequirements.d.ts.map