import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class TimeOffActivities extends ClientSDK {
    /**
     * Get employee time off activities
     *
     * @remarks
     * Get employee time off activities.
     *
     * scope: `employee_time_off_activities:read`
     */
    get(request: operations.GetVersionEmployeesTimeOffActivitiesRequest, options?: RequestOptions): Promise<components.TimeOffActivity>;
}
//# sourceMappingURL=timeoffactivities.d.ts.map