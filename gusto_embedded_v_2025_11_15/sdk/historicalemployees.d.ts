import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class HistoricalEmployees extends ClientSDK {
    /**
     * Update a historical employee
     *
     * @remarks
     * Update a historical employee, an employee that was previously dismissed from the company in the current year.
     *
     * scope: `employees:manage`
     */
    update(request: operations.PutV1HistoricalEmployeesRequest, options?: RequestOptions): Promise<operations.PutV1HistoricalEmployeesResponse>;
}
//# sourceMappingURL=historicalemployees.d.ts.map