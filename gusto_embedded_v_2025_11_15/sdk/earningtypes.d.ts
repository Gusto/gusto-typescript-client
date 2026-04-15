import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class EarningTypes extends ClientSDK {
    /**
     * Create a custom earning type
     *
     * @remarks
     * Create a custom earning type.
     *
     * If an inactive earning type exists with the same name, this will reactivate it instead of creating a new one.
     *
     * scope: `payrolls:write`
     */
    create(request: operations.PostV1CompaniesCompanyIdEarningTypesRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdEarningTypesResponse>;
    /**
     * Get all earning types for a company
     *
     * @remarks
     * A payroll item in Gusto is associated to an earning type to name the type of earning described by the payroll item.
     *
     * #### Default Earning Type
     * Certain earning types are special because they have tax considerations. Those earning types are mostly the same for every company depending on its legal structure (LLC, Corporation, etc.)
     *
     * #### Custom Earning Type
     * Custom earning types are all the other earning types added specifically for a company.
     *
     * scope: `payrolls:read`
     */
    list(request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdEarningTypesResponse>;
    /**
     * Update an earning type
     *
     * @remarks
     * Update an earning type.
     *
     * scope: `payrolls:write`
     */
    update(request: operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse>;
    /**
     * Deactivate an earning type
     *
     * @remarks
     * Deactivate an earning type.
     *
     * scope: `payrolls:write`
     */
    delete(request: operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, options?: RequestOptions): Promise<operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse>;
}
//# sourceMappingURL=earningtypes.d.ts.map