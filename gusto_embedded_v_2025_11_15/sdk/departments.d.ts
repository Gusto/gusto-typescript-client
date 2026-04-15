import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Departments extends ClientSDK {
    /**
     * Create a department
     *
     * @remarks
     * Create a department
     *
     * scope: `departments:write`
     */
    create(request: operations.PostDepartmentsRequest, options?: RequestOptions): Promise<operations.PostDepartmentsResponse>;
    /**
     * Get all departments of a company
     *
     * @remarks
     * Get all of the departments for a given company with the employees and contractors assigned to that department.
     *
     * scope: `departments:read`
     */
    getAll(request: operations.GetCompaniesDepartmentsRequest, options?: RequestOptions): Promise<operations.GetCompaniesDepartmentsResponse>;
    /**
     * Get a department
     *
     * @remarks
     * Get a department given the UUID
     *
     * scope: `departments:read`
     */
    get(request: operations.GetDepartmentRequest, options?: RequestOptions): Promise<operations.GetDepartmentResponse>;
    /**
     * Update a department
     *
     * @remarks
     * Update a department
     *
     * scope: `departments:write`
     */
    update(request: operations.PutDepartmentsRequest, options?: RequestOptions): Promise<operations.PutDepartmentsResponse>;
    /**
     * Delete a department
     *
     * @remarks
     * Delete a department. You cannot delete a department until all employees and contractors have been removed.
     *
     * scope: `departments:write`
     */
    delete(request: operations.DeleteDepartmentRequest, options?: RequestOptions): Promise<operations.DeleteDepartmentResponse>;
    /**
     * Add people to a department
     *
     * @remarks
     * Add employees and contractors to a department
     *
     * scope: `departments:write`
     */
    addPeople(request: operations.PutAddPeopleToDepartmentRequest, options?: RequestOptions): Promise<operations.PutAddPeopleToDepartmentResponse>;
    /**
     * Remove people from a department
     *
     * @remarks
     * Remove employees and contractors from a department
     *
     * scope: `departments:write`
     */
    removePeople(request: operations.PutRemovePeopleFromDepartmentRequest, options?: RequestOptions): Promise<operations.PutRemovePeopleFromDepartmentResponse>;
}
//# sourceMappingURL=departments.d.ts.map