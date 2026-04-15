import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class AchTransactions extends ClientSDK {
    /**
     * Get all ACH transactions for a company
     *
     * @remarks
     * Fetches all ACH transactions for a company.
     *
     * scope: `ach_transactions:read`
     */
    getAll(request: operations.GetAchTransactionsRequest, options?: RequestOptions): Promise<operations.GetAchTransactionsResponse>;
}
//# sourceMappingURL=achtransactions.d.ts.map