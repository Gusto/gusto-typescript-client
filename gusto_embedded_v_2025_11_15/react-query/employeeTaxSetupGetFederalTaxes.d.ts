import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeTaxSetupGetFederalTaxesQueryData = operations.GetV1EmployeesEmployeeIdFederalTaxesResponse;
/**
 * Get an employee's federal taxes
 *
 * @remarks
 * Get attributes relevant for an employee's federal taxes.
 *
 *  scope: `employee_federal_taxes:read`
 */
export declare function useEmployeeTaxSetupGetFederalTaxes(request: operations.GetV1EmployeesEmployeeIdFederalTaxesRequest, options?: QueryHookOptions<EmployeeTaxSetupGetFederalTaxesQueryData>): UseQueryResult<EmployeeTaxSetupGetFederalTaxesQueryData, Error>;
/**
 * Get an employee's federal taxes
 *
 * @remarks
 * Get attributes relevant for an employee's federal taxes.
 *
 *  scope: `employee_federal_taxes:read`
 */
export declare function useEmployeeTaxSetupGetFederalTaxesSuspense(request: operations.GetV1EmployeesEmployeeIdFederalTaxesRequest, options?: SuspenseQueryHookOptions<EmployeeTaxSetupGetFederalTaxesQueryData>): UseSuspenseQueryResult<EmployeeTaxSetupGetFederalTaxesQueryData, Error>;
export declare function prefetchEmployeeTaxSetupGetFederalTaxes(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdFederalTaxesRequest): Promise<void>;
export declare function setEmployeeTaxSetupGetFederalTaxesData(client: QueryClient, queryKeyBase: [
    employeeUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeTaxSetupGetFederalTaxesQueryData): EmployeeTaxSetupGetFederalTaxesQueryData | undefined;
export declare function invalidateEmployeeTaxSetupGetFederalTaxes(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeTaxSetupGetFederalTaxes(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeTaxSetupGetFederalTaxesQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdFederalTaxesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeTaxSetupGetFederalTaxesQueryData>;
};
export declare function queryKeyEmployeeTaxSetupGetFederalTaxes(employeeUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeTaxSetupGetFederalTaxes.d.ts.map