/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { payrollsGet } from "../funcs/payrollsGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude,
  GetV1CompaniesCompanyIdPayrollsPayrollIdRequest,
  GetV1CompaniesCompanyIdPayrollsPayrollIdResponse,
} from "../models/operations/getv1companiescompanyidpayrollspayrollid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type PayrollsGetQueryData =
  GetV1CompaniesCompanyIdPayrollsPayrollIdResponse;

/**
 * Get a single payroll
 *
 * @remarks
 * Returns a payroll. If payroll is calculated or processed, will return employee_compensations and totals.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Hours are represented to the thousands place; dollar amounts are represented to the cent.
 * * Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
 * * When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
 *   * Benefits containing PHI are only visible with the `employee_benefits:read:phi` scope
 *
 * scope: `payrolls:read`
 */
export function usePayrollsGet(
  request: GetV1CompaniesCompanyIdPayrollsPayrollIdRequest,
  options?: QueryHookOptions<PayrollsGetQueryData>,
): UseQueryResult<PayrollsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildPayrollsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a single payroll
 *
 * @remarks
 * Returns a payroll. If payroll is calculated or processed, will return employee_compensations and totals.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Hours are represented to the thousands place; dollar amounts are represented to the cent.
 * * Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
 * * When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
 *   * Benefits containing PHI are only visible with the `employee_benefits:read:phi` scope
 *
 * scope: `payrolls:read`
 */
export function usePayrollsGetSuspense(
  request: GetV1CompaniesCompanyIdPayrollsPayrollIdRequest,
  options?: SuspenseQueryHookOptions<PayrollsGetQueryData>,
): UseSuspenseQueryResult<PayrollsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildPayrollsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchPayrollsGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPayrollsPayrollIdRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildPayrollsGetQuery(
      client$,
      request,
    ),
  });
}

export function setPayrollsGetData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    payrollId: string,
    parameters: {
      include?:
        | Array<GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude>
        | undefined;
      xGustoAPIVersion?: VersionHeader | undefined;
    },
  ],
  data: PayrollsGetQueryData,
): PayrollsGetQueryData | undefined {
  const key = queryKeyPayrollsGet(...queryKeyBase);

  return client.setQueryData<PayrollsGetQueryData>(key, data);
}

export function invalidatePayrollsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      payrollId: string,
      parameters: {
        include?:
          | Array<GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude>
          | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
      },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Payrolls", "get", ...queryKeyBase],
  });
}

export function invalidateAllPayrollsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Payrolls", "get"],
  });
}

export function buildPayrollsGetQuery(
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPayrollsPayrollIdRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetQueryData>;
} {
  return {
    queryKey: queryKeyPayrollsGet(request.companyId, request.payrollId, {
      include: request.include,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function payrollsGetQueryFn(
      ctx,
    ): Promise<PayrollsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(payrollsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyPayrollsGet(
  companyId: string,
  payrollId: string,
  parameters: {
    include?:
      | Array<GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude>
      | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Payrolls",
    "get",
    companyId,
    payrollId,
    parameters,
  ];
}
