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
import { payrollsGetReceipt } from "../funcs/payrollsGetReceipt.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion,
  GetV1PaymentReceiptsPayrollsPayrollUuidRequest,
  GetV1PaymentReceiptsPayrollsPayrollUuidResponse,
} from "../models/operations/getv1paymentreceiptspayrollspayrolluuid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type PayrollsGetReceiptQueryData =
  GetV1PaymentReceiptsPayrollsPayrollUuidResponse;

/**
 * Get a single payroll receipt
 *
 * @remarks
 * Returns a payroll receipt.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Dollar amounts are represented to the cent.
 * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
 *
 * scope: `payrolls:read`
 */
export function usePayrollsGetReceipt(
  request: GetV1PaymentReceiptsPayrollsPayrollUuidRequest,
  options?: QueryHookOptions<PayrollsGetReceiptQueryData>,
): UseQueryResult<PayrollsGetReceiptQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildPayrollsGetReceiptQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a single payroll receipt
 *
 * @remarks
 * Returns a payroll receipt.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Dollar amounts are represented to the cent.
 * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
 *
 * scope: `payrolls:read`
 */
export function usePayrollsGetReceiptSuspense(
  request: GetV1PaymentReceiptsPayrollsPayrollUuidRequest,
  options?: SuspenseQueryHookOptions<PayrollsGetReceiptQueryData>,
): UseSuspenseQueryResult<PayrollsGetReceiptQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildPayrollsGetReceiptQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchPayrollsGetReceipt(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1PaymentReceiptsPayrollsPayrollUuidRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildPayrollsGetReceiptQuery(
      client$,
      request,
    ),
  });
}

export function setPayrollsGetReceiptData(
  client: QueryClient,
  queryKeyBase: [
    payrollUuid: string,
    parameters: {
      xGustoAPIVersion?:
        | GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion
        | undefined;
    },
  ],
  data: PayrollsGetReceiptQueryData,
): PayrollsGetReceiptQueryData | undefined {
  const key = queryKeyPayrollsGetReceipt(...queryKeyBase);

  return client.setQueryData<PayrollsGetReceiptQueryData>(key, data);
}

export function invalidatePayrollsGetReceipt(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      payrollUuid: string,
      parameters: {
        xGustoAPIVersion?:
          | GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion
          | undefined;
      },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "Payrolls",
      "getReceipt",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllPayrollsGetReceipt(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Payrolls", "getReceipt"],
  });
}

export function buildPayrollsGetReceiptQuery(
  client$: GustoEmbeddedCore,
  request: GetV1PaymentReceiptsPayrollsPayrollUuidRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<PayrollsGetReceiptQueryData>;
} {
  return {
    queryKey: queryKeyPayrollsGetReceipt(request.payrollUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function payrollsGetReceiptQueryFn(
      ctx,
    ): Promise<PayrollsGetReceiptQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(payrollsGetReceipt(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyPayrollsGetReceipt(
  payrollUuid: string,
  parameters: {
    xGustoAPIVersion?:
      | GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion
      | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Payrolls",
    "getReceipt",
    payrollUuid,
    parameters,
  ];
}
