import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class RecoveryCases extends ClientSDK {
    /**
     * Get all recovery cases for a company
     *
     * @remarks
     * Fetch all recovery cases for a company.
     *
     * scope: `recovery_cases:read`
     */
    get(request: operations.GetRecoveryCasesRequest, options?: RequestOptions): Promise<operations.GetRecoveryCasesResponse>;
    /**
     * Initiate a redebit for a recovery case
     *
     * @remarks
     * After resolving the underlying bank error, initiate a redebit for an open recovery case. This submission is asynchronous and a successful request responds with a 202 HTTP status.
     *
     * It may take up to four business days for the ACH debit to process; in the meantime, the status of the recovery case will be in the `initiated_redebit` state. When funds are successfully redebited, the recovery case is transitioned to the `recovered` state.
     *
     * If the company has exceeded maximum redebit attempts, or if the recovery case is not in a redebitable state, the response will be 422 Unprocessable Entity.
     *
     * scope: `recovery_cases:write`
     */
    redebit(request: operations.RedebitRecoveryCaseRequest, options?: RequestOptions): Promise<operations.RedebitRecoveryCaseResponse>;
}
//# sourceMappingURL=recoverycases.d.ts.map