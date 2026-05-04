## Typescript SDK Changes:
* `gustoembedded.departments.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.wireInRequests.submit()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `wireInRequestUpdateRequestBody` **Added** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.achTransactions.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.[].errorCode` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.recoveryCases.get()`: 
  * `request` **Changed**
    - `page` **Added**
    - `per` **Added**
    - `xGustoApiVersion` **Changed**
  *  `response.[].payrollUuid` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.garnishments.getChildSupportData()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Removed** (Breaking ⚠️)
* `gustoembedded.garnishments.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `updateGarnishmentRequest` **Added** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.garnishments.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `garnishmentRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeBenefits.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[422]` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeBenefits.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `employeeBenefitUpdateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeBenefits.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `employeeBenefitCreateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companyForms.getAll()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `page` **Added**
    - `per` **Added**
    - `sortBy` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response.[].employeeUuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.payrolls.skip()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `error` **Changed** (Breaking ⚠️)
    - `` **Added**
* `gustoembedded.payrolls.getApprovedReversals()`: 
  *  `response` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.employeeForms.generateW2()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `status[200]` **Removed** (Breaking ⚠️)
    - `status[201]` **Added** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.contractorDocuments.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.fields[]` **Changed** (Breaking ⚠️)
    - `height` **Changed** (Breaking ⚠️)
    - `key` **Changed** (Breaking ⚠️)
    - `pageNumber` **Changed** (Breaking ⚠️)
    - `width` **Changed** (Breaking ⚠️)
    - `x` **Changed** (Breaking ⚠️)
    - `y` **Changed** (Breaking ⚠️)
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.contractorDocuments.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[].fields[]` **Changed** (Breaking ⚠️)
    - `height` **Changed** (Breaking ⚠️)
    - `key` **Changed** (Breaking ⚠️)
    - `pageNumber` **Changed** (Breaking ⚠️)
    - `width` **Changed** (Breaking ⚠️)
    - `x` **Changed** (Breaking ⚠️)
    - `y` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.companies.migrate()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `partnerManagedCompanyMigrateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed** (Breaking ⚠️)
    - `` **Added**
* `gustoembedded.contractorForms.generate1099()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `status[200]` **Removed** (Breaking ⚠️)
    - `status[201]` **Added** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.bankAccounts.createFromPlaidToken()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `plaidProcessorTokenRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.webhooks.listSubscriptions()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Removed** (Breaking ⚠️)
* `gustoembedded.webhooks.createSubscription()`: 
  * `request` **Changed**
    - `requestBody.subscriptionTypes[].enum(payrollSync)` **Added**
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentMethods.createBankAccount()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `contractorBankAccountCreateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `accountType` **Changed**
    - `contractorUuid` **Changed**
    - `hiddenAccountNumber` **Changed**
    - `name` **Changed**
    - `routingNumber` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.updateAddress()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `contractorAddressUpdateBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.updateOnboardingStatus()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `contractorOnboardingStatusUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeEmployments.updateTermination()`: 
  * `request` **Changed**
    - `requestBody.runTerminationPayroll` **Changed**
    - `xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.deleteTermination()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.departments.removePeople()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentPeopleRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.employees.list()`:  `response.[].customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.create()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.getV1CompaniesCompanyIdEmployeesPaymentDetails()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `firstName` **Added**
    - `lastName` **Added**
    - `splits[].accountType` **Added**
    - `splits[].routingNumber` **Added**
    - `splits[].splitAmount` **Changed** (Breaking ⚠️)
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.employees.createHistorical()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `historicalEmployeeBody.dateOfBirth` **Changed** (Breaking ⚠️)
    - `historicalEmployeeBody.job.hireDate` **Changed** (Breaking ⚠️)
    - `historicalEmployeeBody.termination.effectiveDate` **Changed** (Breaking ⚠️)
    - `historicalEmployeeBody.workAddress.locationUuid` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response.customFields[].description` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.employees.get()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.update()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.getCustomFields()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.customFields[].description` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.employees.getTimeOffActivities()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response` **Changed** (Breaking ⚠️)
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.historicalEmployees.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody.dateOfBirth` **Changed** (Breaking ⚠️)
    - `requestBody.job.hireDate` **Changed** (Breaking ⚠️)
    - `requestBody.termination.effectiveDate` **Changed** (Breaking ⚠️)
    - `requestBody.workAddress.locationUuid` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response.customFields[].description` **Changed** (Breaking ⚠️)
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.departments.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentCreateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.departments.addPeople()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentPeopleRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.contractors.update()`:  `error.status[409]` **Added**
* `gustoembedded.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidDecline()`: **Added**
* `gustoembedded.departments.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.departments.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.assign()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeEmployments.createTermination()`: 
  * `request` **Changed**
    - `requestBody.runTerminationPayroll` **Changed**
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeEmployments.getTerminations()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.previewAssignment()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.getAssignments()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.create()`: 
  * `request` **Changed**
    - `requestBody.name` **Changed**
    - `xGustoApiVersion` **Changed**
  *  `response.active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.default[].active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.update()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
* `gustoembedded.employeeEmployments.getV1TerminationsEmployeeId()`: **Added**
* `gustoembedded.contractors.getOnboardingStatus()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.getUnprocessedTerminationPeriods()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.getAddress()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.update()`:  `response.version` **Changed**
* `gustoembedded.paySchedules.get()`:  `response.version` **Changed**
* `gustoembedded.contractorPaymentMethod.getBankAccounts()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[]` **Changed**
    - `accountType` **Changed**
    - `contractorUuid` **Changed**
    - `hiddenAccountNumber` **Changed**
    - `name` **Changed**
    - `routingNumber` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractorPaymentMethod.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractorPaymentMethod.update()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.paySchedules.getAll()`:  `response.[].version` **Changed**
* `gustoembedded.paySchedules.create()`:  `response.version` **Changed**
* `gustoembedded.webhooks.updateSubscription()`: 
  * `request` **Changed**
    - `requestBody.subscriptionTypes[].enum(payrollSync)` **Added**
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.webhooks.getSubscription()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.webhooks.deleteSubscription()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.webhooks.verify()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.webhooks.requestVerificationToken()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.status[200]` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.contractorForms.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractorForms.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractorForms.getPdf()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companies.getCustomFields()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.departments.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidApprove()`: **Added**
* `gustoembedded.contractorDocuments.getPdf()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.contractorDocuments.sign()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `fields` **Added**
    - `pages` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.deleteV1TimeOffRequestsTimeOffRequestUuid()`: **Added**
* `gustoembedded.employeeForms.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.[].employeeUuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeForms.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.employeeUuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeForms.getPdf()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeForms.sign()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.employeeUuid` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.getV1TimeOffRequestsTimeOffRequestUuid()`: **Added**
* `gustoembedded.payrolls.get()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
* `gustoembedded.payrolls.update()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
* `gustoembedded.payrolls.prepare()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequestsPreview()`: **Added**
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequests()`: **Added**
* `gustoembedded.companyForms.get()`:  `response.employeeUuid` **Added**
* `gustoembedded.companyForms.sign()`:  `response.employeeUuid` **Added**
* `gustoembedded.generatedDocuments.get()`: 
  *  `request.documentType` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.getV1CompaniesCompanyUuidTimeOffRequests()`: **Added**
* `gustoembedded.employeeBenefits.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeBenefits.retrieve()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.getV1CompaniesCompanyUuidTimeOffBalances()`: **Added**
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffAdminApprovedRequests()`: **Added**
* `gustoembedded.holidayPayPolicies.previewPaidHolidays()`: **Added**
* `gustoembedded.garnishments.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.garnishments.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractorPayments.getV1ContractorPaymentsContractorPaymentIdPdf()`: **Added**
* `gustoembedded.contractors.deleteV1ContractorsContractorUuidTermination()`: **Added**
* `gustoembedded.informationRequests.getInformationRequests()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[].requiredQuestions[]` **Changed**
    - `questionText` **Changed**
    - `questionUuid` **Changed**
    - `responseType` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.informationRequests.submit()`: `response.requiredQuestions[]` **Changed**
    - `questionText` **Changed**
    - `questionUuid` **Changed**
    - `responseType` **Changed**
* `gustoembedded.contractors.postV1ContractorsContractorUuidTermination()`: **Added**
* `gustoembedded.contractors.deleteV1ContractorsContractorUuidRehire()`: **Added**
* `gustoembedded.wireInRequests.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.postV1ContractorsContractorUuidRehire()`: **Added**
* `gustoembedded.wireInRequests.list()`: `request` **Changed**
    - `page` **Added**
    - `per` **Added**
    - `xGustoApiVersion` **Changed**
