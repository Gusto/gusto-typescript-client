import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class EmployeeForms extends ClientSDK {
    /**
     * Generate a W2 form [DEMO]
     *
     * @remarks
     * > 🚧 Demo action
     * >
     * > This action is only available in the Demo environment
     *
     * Generates a W2 document for testing purposes.
     *
     * scope: `employees:write`
     */
    generateW2(request: operations.PostV1SandboxGenerateW2Request, options?: RequestOptions): Promise<operations.PostV1SandboxGenerateW2Response>;
    /**
     * Get all employee forms
     *
     * @remarks
     * Get a list of all employee's forms
     *
     * scope: `employee_forms:read`
     */
    list(request: operations.GetV1EmployeeFormsRequest, options?: RequestOptions): Promise<operations.GetV1EmployeeFormsResponse>;
    /**
     * Get an employee form
     *
     * @remarks
     * Get an employee form
     *
     * scope: `employee_forms:read`
     */
    get(request: operations.GetV1EmployeeFormRequest, options?: RequestOptions): Promise<operations.GetV1EmployeeFormResponse>;
    /**
     * Get the employee form pdf
     *
     * @remarks
     * Get the link to the employee form PDF
     *
     * scope: `employee_forms:read`
     */
    getPdf(request: operations.GetV1EmployeeFormPdfRequest, options?: RequestOptions): Promise<operations.GetV1EmployeeFormPdfResponse>;
    /**
     * Sign an employee form
     *
     * @remarks
     * Sign an employee form.
     *
     * The optional preparer attributes are only valid for I-9 form. When a preparer is used, the
     * first name, last name, street address, city, state, and zip for that preparer are all required.
     *
     * scope: `employee_forms:sign`
     */
    sign(request: operations.PutV1EmployeeFormSignRequest, options?: RequestOptions): Promise<operations.PutV1EmployeeFormSignResponse>;
}
//# sourceMappingURL=employeeforms.d.ts.map