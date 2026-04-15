import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type I9VerificationGetAuthorizationQueryData = operations.GetV1EmployeesEmployeeIdI9AuthorizationResponse;
/**
 * Get an employee's I-9 authorization
 *
 * @remarks
 * An employee's I-9 authorization stores information about an employee's authorization status and I-9 signatures, information required to filled out the Form I-9 for employment eligibility verification.
 *
 * **NOTE:** The `form_uuid` in responses from this endpoint can be used to retrieve the PDF version of the I-9. See the "get employee form PDF" request for more details.
 *
 * scope: `i9_authorizations:read`
 */
export declare function useI9VerificationGetAuthorization(request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest, options?: QueryHookOptions<I9VerificationGetAuthorizationQueryData>): UseQueryResult<I9VerificationGetAuthorizationQueryData, Error>;
/**
 * Get an employee's I-9 authorization
 *
 * @remarks
 * An employee's I-9 authorization stores information about an employee's authorization status and I-9 signatures, information required to filled out the Form I-9 for employment eligibility verification.
 *
 * **NOTE:** The `form_uuid` in responses from this endpoint can be used to retrieve the PDF version of the I-9. See the "get employee form PDF" request for more details.
 *
 * scope: `i9_authorizations:read`
 */
export declare function useI9VerificationGetAuthorizationSuspense(request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest, options?: SuspenseQueryHookOptions<I9VerificationGetAuthorizationQueryData>): UseSuspenseQueryResult<I9VerificationGetAuthorizationQueryData, Error>;
export declare function prefetchI9VerificationGetAuthorization(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest): Promise<void>;
export declare function setI9VerificationGetAuthorizationData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: I9VerificationGetAuthorizationQueryData): I9VerificationGetAuthorizationQueryData | undefined;
export declare function invalidateI9VerificationGetAuthorization(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllI9VerificationGetAuthorization(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildI9VerificationGetAuthorizationQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<I9VerificationGetAuthorizationQueryData>;
};
export declare function queryKeyI9VerificationGetAuthorization(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=i9VerificationGetAuthorization.d.ts.map