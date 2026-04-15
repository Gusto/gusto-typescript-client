import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeBenefitsRetrieveQueryData = operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse;
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
export declare function useEmployeeBenefitsRetrieve(request: operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: QueryHookOptions<EmployeeBenefitsRetrieveQueryData>): UseQueryResult<EmployeeBenefitsRetrieveQueryData, Error>;
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
export declare function useEmployeeBenefitsRetrieveSuspense(request: operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: SuspenseQueryHookOptions<EmployeeBenefitsRetrieveQueryData>): UseSuspenseQueryResult<EmployeeBenefitsRetrieveQueryData, Error>;
export declare function prefetchEmployeeBenefitsRetrieve(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest): Promise<void>;
export declare function setEmployeeBenefitsRetrieveData(client: QueryClient, queryKeyBase: [
    employeeBenefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeBenefitsRetrieveQueryData): EmployeeBenefitsRetrieveQueryData | undefined;
export declare function invalidateEmployeeBenefitsRetrieve(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeBenefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeBenefitsRetrieve(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeBenefitsRetrieveQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeBenefitsRetrieveQueryData>;
};
export declare function queryKeyEmployeeBenefitsRetrieve(employeeBenefitId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeBenefitsRetrieve.d.ts.map