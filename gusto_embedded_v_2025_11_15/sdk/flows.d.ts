import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Flows extends ClientSDK {
    /**
     * Create a flow
     *
     * @remarks
     * Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity or 24 hours from creation time, whichever comes first.
     *
     * scope: `flows:write`
     */
    create(request: operations.PostV1CompanyFlowsRequest, options?: RequestOptions): Promise<operations.PostV1CompanyFlowsResponse>;
}
//# sourceMappingURL=flows.d.ts.map