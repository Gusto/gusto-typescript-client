import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class CompanyForms extends ClientSDK {
    /**
     * Get all company forms
     *
     * @remarks
     * Get a list of all company's forms
     *
     * scope: `company_forms:read`
     */
    getAll(request: operations.GetV1CompanyFormsRequest, options?: RequestOptions): Promise<operations.GetV1CompanyFormsResponse>;
    /**
     * Get a company form
     *
     * @remarks
     * Get a company form
     *
     * scope: `company_forms:read`
     */
    get(request: operations.GetV1CompanyFormRequest, options?: RequestOptions): Promise<operations.GetV1CompanyFormResponse>;
    /**
     * Get a company form pdf
     *
     * @remarks
     * Get the link to the form PDF
     *
     * scope: `company_forms:read`
     */
    getPdf(request: operations.GetV1CompanyFormPdfRequest, options?: RequestOptions): Promise<operations.GetV1CompanyFormPdfResponse>;
    /**
     * Sign a company form
     *
     * @remarks
     * Sign a company form. Company forms must be signed by the company signatory.
     *
     * scope: `company_forms:sign`
     */
    sign(request: operations.PutV1CompanyFormSignRequest, options?: RequestOptions): Promise<operations.PutV1CompanyFormSignResponse>;
}
//# sourceMappingURL=companyforms.d.ts.map