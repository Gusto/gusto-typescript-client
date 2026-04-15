import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class EmployeeAddresses extends ClientSDK {
    /**
     * Get an employee's home addresses
     *
     * @remarks
     * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
     *
     * Supports home address effective dating and courtesy withholding.
     *
     * scope: `employees:read`
     */
    get(request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdHomeAddressesResponse>;
    /**
     * Create an employee's home address
     *
     * @remarks
     * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
     *
     * Supports home address effective dating and courtesy withholding.
     *
     * scope: `employees:write`
     */
    create(request: operations.PostV1EmployeesEmployeeIdHomeAddressesRequest, options?: RequestOptions): Promise<operations.PostV1EmployeesEmployeeIdHomeAddressesResponse>;
    /**
     * Get an employee's home address
     *
     * @remarks
     * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
     *
     * Supports home address effective dating and courtesy withholding.
     *
     * scope: `employees:read`
     */
    retrieveHomeAddress(request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: RequestOptions): Promise<operations.GetV1HomeAddressesHomeAddressUuidResponse>;
    /**
     * Update an employee's home address
     *
     * @remarks
     * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
     *
     * Supports home address effective dating and courtesy withholding.
     *
     * scope: `employees:write`
     */
    update(request: operations.PutV1HomeAddressesHomeAddressUuidRequest, options?: RequestOptions): Promise<operations.PutV1HomeAddressesHomeAddressUuidResponse>;
    /**
     * Delete an employee's home address
     *
     * @remarks
     * Used for deleting an employee's home address.  Cannot delete the employee's active home address.
     *
     * scope: `employees:write`
     */
    delete(request: operations.DeleteV1HomeAddressesHomeAddressUuidRequest, options?: RequestOptions): Promise<operations.DeleteV1HomeAddressesHomeAddressUuidResponse>;
    /**
     * Get an employee's work addresses
     *
     * @remarks
     * Returns a list of an employee's work addresses. Each address includes its effective date and a boolean
     * signifying if it is the currently active work address.
     *
     * scope: `employees:read`
     */
    getWorkAddresses(request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdWorkAddressesResponse>;
    /**
     * Create an employee work address
     *
     * @remarks
     * The work address of an employee describes when an employee began working at an associated company location.
     *
     * scope: `employees:manage`
     */
    createWorkAddress(request: operations.PostV1EmployeesEmployeeIdWorkAddressesRequest, options?: RequestOptions): Promise<operations.PostV1EmployeesEmployeeIdWorkAddressesResponse>;
    /**
     * Get an employee work address
     *
     * @remarks
     * The work address of an employee is used for payroll tax purposes.
     *
     * scope: `employees:read`
     */
    retrieveWorkAddress(request: operations.GetV1WorkAddressesWorkAddressUuidRequest, options?: RequestOptions): Promise<operations.GetV1WorkAddressesWorkAddressUuidResponse>;
    /**
     * Update an employee work address
     *
     * @remarks
     * The work address of an employee is used for payroll tax purposes.
     *
     * scope: `employees:manage`
     */
    updateWorkAddress(request: operations.PutV1WorkAddressesWorkAddressUuidRequest, options?: RequestOptions): Promise<operations.PutV1WorkAddressesWorkAddressUuidResponse>;
    /**
     * Delete an employee's work address
     *
     * @remarks
     * Used for deleting an employee's work address.  Cannot delete the employee's active work address.
     *
     * scope: `employees:manage`
     */
    deleteWorkAddress(request: operations.DeleteV1WorkAddressesWorkAddressUuidRequest, options?: RequestOptions): Promise<operations.DeleteV1WorkAddressesWorkAddressUuidResponse>;
}
//# sourceMappingURL=employeeaddresses.d.ts.map