import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class PaymentConfigs extends ClientSDK {
    /**
     * Get a company's payment configs
     *
     * @remarks
     * Get payment speed for the company and fast payment limit (1-day is only applicable to partners that opt in).
     *
     * scope: `company_payment_configs:read`
     */
    get(request: operations.GetV1CompanyPaymentConfigsRequest, options?: RequestOptions): Promise<operations.GetV1CompanyPaymentConfigsResponse>;
    /**
     * Update a company's payment configs
     *
     * @remarks
     * Update payment speed and fast payment limit for a company. At least one of `payment_speed` or `fast_payment_limit` parameters is required. 1-day option is only applicable to partners that opt in.
     *
     * scope: `company_payment_configs:write`
     */
    update(request: operations.PutV1CompanyPaymentConfigsRequest, options?: RequestOptions): Promise<operations.PutV1CompanyPaymentConfigsResponse>;
}
//# sourceMappingURL=paymentconfigs.d.ts.map