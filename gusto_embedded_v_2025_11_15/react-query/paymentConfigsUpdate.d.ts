import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PaymentConfigsUpdateMutationVariables = {
    request: operations.PutV1CompanyPaymentConfigsRequest;
    options?: RequestOptions;
};
export type PaymentConfigsUpdateMutationData = operations.PutV1CompanyPaymentConfigsResponse;
/**
 * Update a company's payment configs
 *
 * @remarks
 * Update payment speed and fast payment limit for a company. At least one of `payment_speed` or `fast_payment_limit` parameters is required. 1-day option is only applicable to partners that opt in.
 *
 * scope: `company_payment_configs:write`
 */
export declare function usePaymentConfigsUpdateMutation(options?: MutationHookOptions<PaymentConfigsUpdateMutationData, Error, PaymentConfigsUpdateMutationVariables>): UseMutationResult<PaymentConfigsUpdateMutationData, Error, PaymentConfigsUpdateMutationVariables>;
export declare function mutationKeyPaymentConfigsUpdate(): MutationKey;
export declare function buildPaymentConfigsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PaymentConfigsUpdateMutationVariables) => Promise<PaymentConfigsUpdateMutationData>;
};
//# sourceMappingURL=paymentConfigsUpdate.d.ts.map