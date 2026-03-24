## Typescript SDK Changes:
* `gustoembedded.introspection.getInfo()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.introspection.oauthAccessToken()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.createPartnerManaged()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.migrate()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `errors` **Added**
    - `migrationStatus` **Changed** (Breaking ⚠️)
    - `warnings` **Added**
* `gustoembedded.companies.getV1PartnerManagedCompaniesCompanyUuidMigrationReadiness()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.acceptTermsOfService()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.retrieveTermsOfService()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.createAdmin()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.listAdmins()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.getOnboardingStatus()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.finishOnboarding()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.getCustomFields()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.suspensions.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companies.suspensions.suspend()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.invoices.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyAttachments.getDetails()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyAttachments.getList()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyAttachments.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyAttachment.getDownloadUrl()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.federalTaxDetails.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.federalTaxDetails.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.industrySelection.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.industrySelection.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.signatories.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.signatories.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.signatories.invite()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.signatories.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.signatories.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.flows.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.locations.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.locations.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.locations.retrieve()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.locations.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.locations.getMinimumWages()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.bankAccounts.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.bankAccounts.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.bankAccounts.verify()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.bankAccounts.createFromPlaidToken()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.bankAccounts.deleteV1CompaniesCompanyIdBankAccountsBankAccountId()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.retrieve()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.calculateTaxes()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.listTaxLiabilities()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.updateTaxLiabilities()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.externalPayrolls.finalizeTaxLiabilities()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.paymentConfigs.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.paymentConfigs.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.paySchedules.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `payScheduleCreateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `active` **Removed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Removed** (Breaking ⚠️)
    - `anchorPayDate` **Removed** (Breaking ⚠️)
    - `autoPilot` **Removed** (Breaking ⚠️)
    - `customName` **Removed** (Breaking ⚠️)
    - `day1` **Removed** (Breaking ⚠️)
    - `day2` **Removed** (Breaking ⚠️)
    - `frequency` **Removed** (Breaking ⚠️)
    - `name` **Removed** (Breaking ⚠️)
    - `uuid` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `active` **Removed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Removed** (Breaking ⚠️)
    - `anchorPayDate` **Removed** (Breaking ⚠️)
    - `autoPilot` **Removed** (Breaking ⚠️)
    - `customName` **Removed** (Breaking ⚠️)
    - `day1` **Removed** (Breaking ⚠️)
    - `day2` **Removed** (Breaking ⚠️)
    - `frequency` **Removed** (Breaking ⚠️)
    - `name` **Removed** (Breaking ⚠️)
    - `uuid` **Removed** (Breaking ⚠️)
    - `version` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.getPreview()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Changed** (Breaking ⚠️)
    - `anchorPayDate` **Changed** (Breaking ⚠️)
    - `endDate` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `holidays[]` **Changed** (Breaking ⚠️)
    - `payPeriods[].checkDate` **Changed** (Breaking ⚠️)
    - `payPeriods[].endDate` **Changed** (Breaking ⚠️)
    - `payPeriods[].runPayrollBy` **Changed** (Breaking ⚠️)
    - `payPeriods[].startDate` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `active` **Removed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Removed** (Breaking ⚠️)
    - `anchorPayDate` **Removed** (Breaking ⚠️)
    - `autoPilot` **Removed** (Breaking ⚠️)
    - `customName` **Removed** (Breaking ⚠️)
    - `day1` **Removed** (Breaking ⚠️)
    - `day2` **Removed** (Breaking ⚠️)
    - `frequency` **Removed** (Breaking ⚠️)
    - `name` **Removed** (Breaking ⚠️)
    - `uuid` **Removed** (Breaking ⚠️)
    - `version` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `payScheduleUpdateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `active` **Removed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Removed** (Breaking ⚠️)
    - `anchorPayDate` **Removed** (Breaking ⚠️)
    - `autoPilot` **Removed** (Breaking ⚠️)
    - `customName` **Removed** (Breaking ⚠️)
    - `day1` **Removed** (Breaking ⚠️)
    - `day2` **Removed** (Breaking ⚠️)
    - `frequency` **Removed** (Breaking ⚠️)
    - `name` **Removed** (Breaking ⚠️)
    - `uuid` **Removed** (Breaking ⚠️)
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.paySchedules.getPayPeriods()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.paySchedules.getUnprocessedTerminationPeriods()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.paySchedules.getAssignments()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.paySchedules.previewAssignment()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.paySchedules.assign()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.[].currentHomeAddress` **Changed** (Breaking ⚠️)
    - `effectiveDate` **Removed** (Breaking ⚠️)
    - `effectiveFrom` **Removed** (Breaking ⚠️)
    - `effectiveTo` **Removed** (Breaking ⚠️)
    - `id` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.getV1CompaniesCompanyIdEmployeesPaymentDetails()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.createHistorical()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.getCustomFields()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.updateOnboardingDocumentsConfig()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.getOnboardingStatus()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.updateOnboardingStatus()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employees.getTimeOffActivities()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.historicalEmployees.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.departments.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.departments.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.departments.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.departments.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.departments.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.departments.addPeople()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.departments.removePeople()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.createTermination()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.getTerminations()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.deleteTermination()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.updateTermination()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.createRehire()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.rehire()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.getRehire()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.deleteRehire()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeEmployments.getHistory()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.retrieveHomeAddress()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.getWorkAddresses()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.createWorkAddress()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.retrieveWorkAddress()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.updateWorkAddress()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeAddresses.deleteWorkAddress()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeTaxSetup.getFederalTaxes()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeTaxSetup.updateFederalTaxes()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeTaxSetup.getStateTaxes()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeTaxSetup.updateStateTaxes()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeePaymentMethod.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeePaymentMethod.deleteBankAccount()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeePaymentMethod.updateBankAccount()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeePaymentMethod.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeePaymentMethod.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeePaymentMethods.getBankAccounts()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.createJob()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.getJobs()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.getJob()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.getCompensations()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.createCompensation()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.getCompensation()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.updateCompensation()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.jobsAndCompensations.deleteCompensation()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.earningTypes.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.earningTypes.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.earningTypes.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.earningTypes.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.getOnboardingStatus()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.updateOnboardingStatus()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.getAddress()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.updateAddress()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractors.getV1CompaniesCompanyIdContractorsPaymentDetails()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPaymentMethods.createBankAccount()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPaymentMethod.getBankAccounts()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPaymentMethod.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPaymentMethod.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.webhooks.createSubscription()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  *  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.listSubscriptions()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  *  `response.[].subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.updateSubscription()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  *  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.getSubscription()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  *  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.deleteSubscription()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.webhooks.verify()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  *  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.requestVerificationToken()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.webhooks.getV1WebhooksHealthCheck()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorForms.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorForms.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorForms.getPdf()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorForms.generate1099()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorDocuments.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorDocuments.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorDocuments.getPdf()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorDocuments.sign()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeForms.generateW2()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeForms.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeForms.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeForms.getPdf()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeForms.sign()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `autoPayroll` **Added**
    - `autoPilot` **Removed** (Breaking ⚠️)
    - `creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Removed** (Breaking ⚠️)
    - `creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata.reverseWireDetailId` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.createOffCycle()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.getApprovedReversals()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `autoPayroll` **Added**
    - `autoPilot` **Removed** (Breaking ⚠️)
    - `creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Removed** (Breaking ⚠️)
    - `creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata.reverseWireDetailId` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `autoPayroll` **Added**
    - `autoPilot` **Removed** (Breaking ⚠️)
  *  `error.status[409]` **Added**
* `gustoembedded.payrolls.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.prepare()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `autoPayroll` **Added**
    - `autoPilot` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.getReceipt()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.getBlockers()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.skip()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.calculateGrossUp()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.calculate()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.submit()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.cancel()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `autoPayroll` **Added**
    - `autoPilot` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.getPayStub()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.getPayStubs()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.generatePrintableChecks()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.getV1CompaniesCompanyIdPayrollsIdPartnerDisbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.payrolls.patchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.calculateAccruingTimeOffHours()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.addEmployees()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.removeEmployees()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.updateBalance()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.timeOffPolicies.deactivate()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPayments.getReceipt()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPayments.fund()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPayments.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPayments.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPayments.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPayments.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPaymentGroups.getList()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.[].creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata` **Changed** (Breaking ⚠️)
    - `bankAccountLastFourDigits` **Removed** (Breaking ⚠️)
    - `reverseWireDetailId` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata` **Changed** (Breaking ⚠️)
    - `bankAccountLastFourDigits` **Removed** (Breaking ⚠️)
    - `reverseWireDetailId` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.preview()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata` **Changed** (Breaking ⚠️)
    - `bankAccountLastFourDigits` **Removed** (Breaking ⚠️)
    - `reverseWireDetailId` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata` **Changed** (Breaking ⚠️)
    - `bankAccountLastFourDigits` **Removed** (Breaking ⚠️)
    - `reverseWireDetailId` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPaymentGroups.fund()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.creditBlockers[].unblockOptions[].union(wait_for_reverse_wire).metadata` **Changed** (Breaking ⚠️)
    - `bankAccountLastFourDigits` **Removed** (Breaking ⚠️)
    - `reverseWireDetailId` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.getV1ContractorPaymentGroupsIdPartnerDisbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.contractorPaymentGroups.patchV1ContractorPaymentGroupsIdPartnerDisbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyForms.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyForms.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyForms.getPdf()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyForms.sign()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.generatedDocuments.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reports.createCustom()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reports.postPayrollsPayrollUuidReportsGeneralLedger()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reports.getReportsRequestUuid()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reports.getTemplate()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reports.postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.getSupported()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.getSummary()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.getEmployeeBenefits()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.updateEmployeeBenefits()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.getRequirements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.getV1CompanyBenefitsCompanyBenefitIdContributionExclusions()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.companyBenefits.putV1CompanyBenefitsCompanyBenefitIdContributionExclusions()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.retrieve()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.getYtdBenefitAmountsFromDifferentCompany()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.createYtdBenefitAmountsFromDifferentCompany()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatuses()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.postV1EmployeesEmployeeUuidSection603HighEarnerStatuses()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.employeeBenefits.patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.garnishments.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.garnishments.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.garnishments.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.garnishments.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.garnishments.getChildSupportData()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.i9Verification.getAuthorization()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20260201)` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.getDocumentOptions()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.getDocuments()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  *  `response.[].expirationDate` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.createDocuments()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationDocumentsRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20260201)` **Added**
  * `response` **Changed** (Breaking ⚠️)
    - `status[200]` **Removed** (Breaking ⚠️)
    - `status[201]` **Added** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.deleteDocument()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.i9Verification.employerSign()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationEmployerSignRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20260201)` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.taxRequirements.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.taxRequirements.updateState()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.taxRequirements.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.holidayPayPolicies.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.holidayPayPolicies.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.holidayPayPolicies.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.holidayPayPolicies.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.holidayPayPolicies.addEmployees()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.holidayPayPolicies.removeEmployees()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.notifications.getDetails()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.notifications.getCompanyNotifications()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.events.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.informationRequests.getInformationRequests()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.recoveryCases.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.recoveryCases.redebit()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.achTransactions.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.wireInRequests.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.paymentType` **Changed** (Breaking ⚠️)
    - `enum(payroll)` **Added** (Breaking ⚠️)
    - `enum(payroll)` **Removed** (Breaking ⚠️)
* `gustoembedded.wireInRequests.submit()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.paymentType` **Changed** (Breaking ⚠️)
    - `enum(payroll)` **Added** (Breaking ⚠️)
    - `enum(payroll)` **Removed** (Breaking ⚠️)
* `gustoembedded.wireInRequests.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
  * `response.[].paymentType` **Changed** (Breaking ⚠️)
    - `enum(payroll)` **Added** (Breaking ⚠️)
    - `enum(payroll)` **Removed** (Breaking ⚠️)
* `gustoembedded.salaryEstimates.postV1EmployeesEmployeeIdSalaryEstimates()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.salaryEstimates.getV1SalaryEstimatesId()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.salaryEstimates.putV1SalaryEstimatesId()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.salaryEstimates.postV1SalaryEstimatesUuidAccept()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.salaryEstimates.getV1SalaryEstimatesOccupations()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reimbursements.getV1EmployeesEmployeeIdRecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reimbursements.postV1EmployeesEmployeeIdRecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reimbursements.getV1RecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reimbursements.putV1RecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.reimbursements.deleteV1RecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.peopleBatches.postV1CompaniesCompanyIdPeopleBatches()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
* `gustoembedded.peopleBatches.getV1PeopleBatchesPeopleBatchUuid()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Removed** (Breaking ⚠️)
    - `enum(20260201)` **Added**
