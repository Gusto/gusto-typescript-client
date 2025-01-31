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
import { bankAccountsList } from "../funcs/bankAccountsList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type BankAccountsListQueryData = Array<components.CompanyBankAccount>;

/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export function useBankAccountsList(
  request: operations.GetV1CompaniesCompanyIdBankAccountsRequest,
  options?: QueryHookOptions<BankAccountsListQueryData>,
): UseQueryResult<BankAccountsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildBankAccountsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export function useBankAccountsListSuspense(
  request: operations.GetV1CompaniesCompanyIdBankAccountsRequest,
  options?: SuspenseQueryHookOptions<BankAccountsListQueryData>,
): UseSuspenseQueryResult<BankAccountsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildBankAccountsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchBankAccountsList(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdBankAccountsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildBankAccountsListQuery(
      client$,
      request,
    ),
  });
}

export function setBankAccountsListData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: BankAccountsListQueryData,
): BankAccountsListQueryData | undefined {
  const key = queryKeyBankAccountsList(...queryKeyBase);

  return client.setQueryData<BankAccountsListQueryData>(key, data);
}

export function invalidateBankAccountsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "bankAccounts", "list", ...queryKeyBase],
  });
}

export function invalidateAllBankAccountsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "bankAccounts", "list"],
  });
}

export function buildBankAccountsListQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdBankAccountsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<BankAccountsListQueryData>;
} {
  return {
    queryKey: queryKeyBankAccountsList(request.companyId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function bankAccountsListQueryFn(
      ctx,
    ): Promise<BankAccountsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(bankAccountsList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyBankAccountsList(
  companyId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return ["@gusto/embedded-api", "bankAccounts", "list", companyId, parameters];
}
