import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1EmployeeBenefitsEmployeeBenefitIdRequest } from "../models/operations/getv1employeebenefitsemployeebenefitid.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildEmployeeBenefitsRetrieveQuery, EmployeeBenefitsRetrieveQueryData, prefetchEmployeeBenefitsRetrieve, queryKeyEmployeeBenefitsRetrieve } from "./employeeBenefitsRetrieve.core.js";
export { buildEmployeeBenefitsRetrieveQuery, type EmployeeBenefitsRetrieveQueryData, prefetchEmployeeBenefitsRetrieve, queryKeyEmployeeBenefitsRetrieve, };
export type EmployeeBenefitsRetrieveQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get an employee benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:read`
 */
export declare function useEmployeeBenefitsRetrieve(request: GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: QueryHookOptions<EmployeeBenefitsRetrieveQueryData, EmployeeBenefitsRetrieveQueryError>): UseQueryResult<EmployeeBenefitsRetrieveQueryData, EmployeeBenefitsRetrieveQueryError>;
/**
 * Get an employee benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:read`
 */
export declare function useEmployeeBenefitsRetrieveSuspense(request: GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: SuspenseQueryHookOptions<EmployeeBenefitsRetrieveQueryData, EmployeeBenefitsRetrieveQueryError>): UseSuspenseQueryResult<EmployeeBenefitsRetrieveQueryData, EmployeeBenefitsRetrieveQueryError>;
export declare function setEmployeeBenefitsRetrieveData(client: QueryClient, queryKeyBase: [
    employeeBenefitId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: EmployeeBenefitsRetrieveQueryData): EmployeeBenefitsRetrieveQueryData | undefined;
export declare function invalidateEmployeeBenefitsRetrieve(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeBenefitId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeBenefitsRetrieve(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=employeeBenefitsRetrieve.d.ts.map