import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class ContractorPaymentMethods extends ClientSDK {
    /**
     * Create a contractor bank account
     *
     * @remarks
     * Creates a contractor bank account.
     *
     * Note: We currently only support one bank account per contractor. Using this endpoint on a contractor who already has a bank account will just replace it.
     *
     * scope: `contractor_payment_methods:write`
     */
    createBankAccount(request: operations.PostV1ContractorsContractorUuidBankAccountsRequest, options?: RequestOptions): Promise<operations.PostV1ContractorsContractorUuidBankAccountsResponse>;
}
//# sourceMappingURL=contractorpaymentmethods.d.ts.map