import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class WireInRequests extends ClientSDK {
    /**
     * Get a single Wire In Request
     *
     * @remarks
     * Fetch a Wire In Request.
     *
     * scope: `payrolls:read`
     */
    get(request: operations.GetWireInRequestsWireInRequestUuidRequest, options?: RequestOptions): Promise<operations.GetWireInRequestsWireInRequestUuidResponse>;
    /**
     * Submit a wire in request
     *
     * @remarks
     * Submit a wire in request for a payment
     *
     * scope: `payrolls:run`
     */
    submit(request: operations.PutWireInRequestsWireInRequestUuidRequest, options?: RequestOptions): Promise<operations.PutWireInRequestsWireInRequestUuidResponse>;
    /**
     * Get all Wire In Requests for a company
     *
     * @remarks
     * Fetches all Wire In Requests for a company.
     *
     * scope: `payrolls:read`
     */
    list(request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest, options?: RequestOptions): Promise<operations.GetCompaniesCompanyUuidWireInRequestUuidResponse>;
}
//# sourceMappingURL=wireinrequests.d.ts.map