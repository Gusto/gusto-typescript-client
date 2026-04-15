import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Benefits extends ClientSDK {
    /**
     * Get benefits for a company
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
     *
     * scope: `company_benefits:read`
     */
    list(request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: RequestOptions): Promise<Array<components.CompanyBenefit>>;
}
//# sourceMappingURL=benefits.d.ts.map