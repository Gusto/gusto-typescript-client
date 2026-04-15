import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Forms extends ClientSDK {
    /**
     * Get all company forms
     *
     * @remarks
     * Get a list of all company's forms
     *
     * scope: `company_forms:read`
     */
    list(request: operations.GetV1CompanyFormsRequest, options?: RequestOptions): Promise<Array<components.Form>>;
}
//# sourceMappingURL=forms.d.ts.map