import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyIdFederalTaxDetailsRequest, PutV1CompaniesCompanyIdFederalTaxDetailsResponse } from "../models/operations/putv1companiescompanyidfederaltaxdetails.js";
import { MutationHookOptions } from "./_types.js";
export type FederalTaxDetailsUpdateMutationVariables = {
    request: PutV1CompaniesCompanyIdFederalTaxDetailsRequest;
    options?: RequestOptions;
};
export type FederalTaxDetailsUpdateMutationData = PutV1CompaniesCompanyIdFederalTaxDetailsResponse;
export type FederalTaxDetailsUpdateMutationError = UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Update Federal Tax Details
 *
 * @remarks
 * Updates attributes relevant for a company's federal taxes.
 * This information is required is to onboard a company for use with Gusto Embedded Payroll.
 *
 * scope: `company_federal_taxes:write`
 */
export declare function useFederalTaxDetailsUpdateMutation(options?: MutationHookOptions<FederalTaxDetailsUpdateMutationData, FederalTaxDetailsUpdateMutationError, FederalTaxDetailsUpdateMutationVariables>): UseMutationResult<FederalTaxDetailsUpdateMutationData, FederalTaxDetailsUpdateMutationError, FederalTaxDetailsUpdateMutationVariables>;
export declare function mutationKeyFederalTaxDetailsUpdate(): MutationKey;
export declare function buildFederalTaxDetailsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: FederalTaxDetailsUpdateMutationVariables) => Promise<FederalTaxDetailsUpdateMutationData>;
};
//# sourceMappingURL=federalTaxDetailsUpdate.d.ts.map