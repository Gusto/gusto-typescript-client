import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class ContractorForms extends ClientSDK {
    /**
     * Get all contractor forms
     *
     * @remarks
     * Get a list of all contractor's forms
     *
     * scope: `contractor_forms:read`
     */
    list(request: operations.GetV1ContractorFormsRequest, options?: RequestOptions): Promise<operations.GetV1ContractorFormsResponse>;
    /**
     * Get a contractor form
     *
     * @remarks
     * Get a contractor form
     *
     * scope: `contractor_forms:read`
     */
    get(request: operations.GetV1ContractorFormRequest, options?: RequestOptions): Promise<operations.GetV1ContractorFormResponse>;
    /**
     * Get the contractor form pdf
     *
     * @remarks
     * Get the link to the form PDF
     *
     * scope: `contractor_forms:read`
     */
    getPdf(request: operations.GetV1ContractorFormPdfRequest, options?: RequestOptions): Promise<operations.GetV1ContractorFormPdfResponse>;
    /**
     * Generate a 1099 form [DEMO]
     *
     * @remarks
     * > 🚧 Demo action
     * >
     * > This action is only available in the Demo environment
     *
     * Generates a 1099 document for testing purposes.
     *
     * scope: `contractors:write`
     */
    generate1099(request: operations.PostV1SandboxGenerate1099Request, options?: RequestOptions): Promise<operations.PostV1SandboxGenerate1099Response>;
}
//# sourceMappingURL=contractorforms.d.ts.map