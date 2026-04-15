import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class PartnerManagedCompanies extends ClientSDK {
    /**
     * Migrate company to embedded payroll
     *
     * @remarks
     * Migrate an existing Gusto customer to your embedded payroll product.
     *
     * To use this endpoint, the customer will need to connect their Gusto account to your application using [OAuth2](https://docs.gusto.com/embedded-payroll/docs/oauth2) then view and [accept the Embedded Payroll Terms of Service](https://docs.gusto.com/embedded-payroll/reference/post-partner-managed-companies-company_uuid-accept_terms_of_service).
     *
     * scope: `partner_managed_companies:write`
     */
    migrate(request: operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, options?: RequestOptions): Promise<operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody>;
}
//# sourceMappingURL=partnermanagedcompanies.d.ts.map