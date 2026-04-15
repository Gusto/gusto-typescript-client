import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class WorkAddresses extends ClientSDK {
    /**
     * Create an employee work address
     *
     * @remarks
     * The work address of an employee describes when an employee began working at an associated company location.
     *
     * scope: `employees:manage`
     */
    create(request: operations.PostV1EmployeesEmployeeIdWorkAddressesRequest, options?: RequestOptions): Promise<components.EmployeeWorkAddress>;
}
//# sourceMappingURL=workaddresses.d.ts.map