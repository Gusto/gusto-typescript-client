/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { industrySelectionUpdate } from "../funcs/industrySelectionUpdate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type IndustrySelectionUpdateMutationVariables = {
  request: operations.PutV1CompanyIndustryRequest;
  options?: RequestOptions;
};

export type IndustrySelectionUpdateMutationData = components.Industry;

/**
 * Update a company industry selection
 *
 * @remarks
 * Update the company industry selection by passing in industry classification codes: [NAICS code](https://www.naics.com), [SICS code](https://siccode.com/) and industry title. Our UI is leveraging [Middesk API](https://docs.middesk.com/reference/introduction) to determine industry classification codes.
 *
 * scope: `companies:write`
 */
export function useIndustrySelectionUpdateMutation(
  options?: MutationHookOptions<
    IndustrySelectionUpdateMutationData,
    Error,
    IndustrySelectionUpdateMutationVariables
  >,
): UseMutationResult<
  IndustrySelectionUpdateMutationData,
  Error,
  IndustrySelectionUpdateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildIndustrySelectionUpdateMutation(client, options),
    ...options,
  });
}

export function mutationKeyIndustrySelectionUpdate(): MutationKey {
  return ["@gusto/embedded-api", "industrySelection", "update"];
}

export function buildIndustrySelectionUpdateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: IndustrySelectionUpdateMutationVariables,
  ) => Promise<IndustrySelectionUpdateMutationData>;
} {
  return {
    mutationKey: mutationKeyIndustrySelectionUpdate(),
    mutationFn: function industrySelectionUpdateMutationFn({
      request,
      options,
    }): Promise<IndustrySelectionUpdateMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(industrySelectionUpdate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
