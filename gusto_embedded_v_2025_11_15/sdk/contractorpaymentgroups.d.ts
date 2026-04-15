import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class ContractorPaymentGroups extends ClientSDK {
    /**
     * Create a contractor payment group
     *
     * @remarks
     * Pay a group of contractors. Information needed depends on the contractor's wage type (hourly vs fixed)
     *
     * scope: `payrolls:run`
     */
    create(request: operations.PostV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdContractorPaymentGroupsResponse>;
    /**
     * Get contractor payment groups for a company
     *
     * @remarks
     * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
     *
     * scope: `payrolls:read`
     */
    getList(request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdContractorPaymentGroupsResponse>;
    /**
     * Preview a contractor payment group
     *
     * @remarks
     * Preview a group of contractor payments. Request will validate inputs and return preview of the contractor payment group including the expected debit_date.  Uuid will be null in the response.
     *
     * scope: `payrolls:read`
     */
    preview(request: operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse>;
    /**
     * Fetch a contractor payment group
     *
     * @remarks
     * Returns a contractor payment group with all associated contractor payments.
     *
     * scope: `payrolls:read`
     */
    get(request: operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, options?: RequestOptions): Promise<operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse>;
    /**
     * Cancel a contractor payment group
     *
     * @remarks
     * Cancels a contractor payment group and all associated contractor payments. All contractor payments must be cancellable, unfunded.
     *
     * scope: `payrolls:run`
     */
    delete(request: operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, options?: RequestOptions): Promise<operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse>;
    /**
     * Fund a contractor payment group [DEMO]
     *
     * @remarks
     * > 🚧 Demo action
     * >
     * > This action is only available in the Demo environment
     *
     * Simulate funding a contractor payment group. Funding only occurs automatically in the production environment when bank transactions are generated. Use this action in the demo environment to transition a contractor payment group's `status` from `Unfunded` to `Funded`. A `Funded` status is required for generating a contractor payment receipt.
     *
     * scope: `payrolls:run`
     */
    fund(request: operations.PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest, options?: RequestOptions): Promise<operations.PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse>;
}
//# sourceMappingURL=contractorpaymentgroups.d.ts.map