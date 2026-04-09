## Typescript SDK Changes:
* `gustoembedded.payrolls.createOffCycle()`:  `response.withholdingPayPeriod` **Changed** (Breaking ⚠️)
* `gustoembedded.companyBenefits.getEmployeeBenefits()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `additionalProperties` **Added**
    - `retirementLoanIdentifier` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.companies.createAdmin()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `adminCreateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response.phone` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.companies.listAdmins()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.[].phone` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.taxRequirements.updateState()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody.requirementSets[].key` **Changed** (Breaking ⚠️)
    - `requestBody.requirementSets[].requirements[].key` **Changed** (Breaking ⚠️)
    - `requestBody.requirementSets[].requirements[].value` **Changed** (Breaking ⚠️)
    - `requestBody.requirementSets[].state` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.employerSign()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationEmployerSignRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companyAttachments.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `companyAttachmentCreateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `category` **Changed**
    - `name` **Changed**
    - `uploadTime` **Changed**
    - `uuid` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.createDocuments()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationDocumentsRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `status[200]` **Removed** (Breaking ⚠️)
    - `status[201]` **Added** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.federalTaxDetails.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `filingForm` **Changed** (Breaking ⚠️)
    - `taxPayerType` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.federalTaxDetails.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `federalTaxDetailsUpdate` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `filingForm` **Changed** (Breaking ⚠️)
    - `taxPayerType` **Changed** (Breaking ⚠️)
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.i9Verification.getDocuments()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.[].expirationDate` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeBenefits.update()`: `response` **Changed** (Breaking ⚠️)
    - `additionalProperties` **Added**
    - `retirementLoanIdentifier` **Changed** (Breaking ⚠️)
* `gustoembedded.paySchedules.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `payScheduleCreateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Changed** (Breaking ⚠️)
    - `anchorPayDate` **Changed** (Breaking ⚠️)
    - `autoPayrollEnablementBlockers` **Added**
    - `autoPayroll` **Added**
    - `frequency.enum(annually)` **Added** (Breaking ⚠️)
    - `frequency.enum(quarterly)` **Added** (Breaking ⚠️)
    - `version` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Changed** (Breaking ⚠️)
    - `anchorPayDate` **Changed** (Breaking ⚠️)
    - `autoPayrollEnablementBlockers` **Added**
    - `autoPayroll` **Added**
    - `version` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.getPreview()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Changed** (Breaking ⚠️)
    - `anchorPayDate` **Changed** (Breaking ⚠️)
    - `endDate` **Added**
    - `xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `holidays[]` **Changed** (Breaking ⚠️)
    - `payPeriods[].checkDate` **Changed** (Breaking ⚠️)
    - `payPeriods[].endDate` **Changed** (Breaking ⚠️)
    - `payPeriods[].runPayrollBy` **Changed** (Breaking ⚠️)
    - `payPeriods[].startDate` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Changed** (Breaking ⚠️)
    - `anchorPayDate` **Changed** (Breaking ⚠️)
    - `autoPayrollEnablementBlockers` **Added**
    - `autoPayroll` **Added**
    - `version` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.paySchedules.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `payScheduleUpdateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Changed** (Breaking ⚠️)
    - `anchorPayDate` **Changed** (Breaking ⚠️)
    - `autoPayrollEnablementBlockers` **Added**
    - `autoPayroll` **Added**
    - `frequency.enum(annually)` **Added** (Breaking ⚠️)
    - `frequency.enum(quarterly)` **Added** (Breaking ⚠️)
    - `version` **Added**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.employees.getTimeOffActivities()`: `response` **Changed** (Breaking ⚠️)
    - `balanceChange` **Changed** (Breaking ⚠️)
    - `balance` **Changed** (Breaking ⚠️)
    - `effectiveTime` **Changed** (Breaking ⚠️)
    - `eventDescription` **Changed** (Breaking ⚠️)
    - `policyName` **Changed** (Breaking ⚠️)
    - `policyUuid` **Changed** (Breaking ⚠️)
* `gustoembedded.employeeBenefits.retrieve()`: `response` **Changed** (Breaking ⚠️)
    - `additionalProperties` **Added**
    - `retirementLoanIdentifier` **Changed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.rehire()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `rehireUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.getRehire()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.deleteRehire()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.jobsAndCompensations.createJob()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `jobsCreateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeBenefits.get()`: `response.[]` **Changed** (Breaking ⚠️)
    - `additionalProperties` **Added**
    - `retirementLoanIdentifier` **Changed** (Breaking ⚠️)
* `gustoembedded.employeeBenefits.create()`: `response` **Changed** (Breaking ⚠️)
    - `additionalProperties` **Added**
    - `retirementLoanIdentifier` **Changed** (Breaking ⚠️)
* `gustoembedded.jobsAndCompensations.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `jobsUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companyBenefits.putV1CompanyBenefitsCompanyBenefitIdContributionExclusions()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `contributionExclusionUpdateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companyBenefits.getRequirements()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed** (Breaking ⚠️)
    - `catchUp.choices` **Changed** (Breaking ⚠️)
    - `catchUp.defaultValue` **Changed** (Breaking ⚠️)
    - `companyContributionAnnualMaximum.choices` **Changed** (Breaking ⚠️)
    - `companyContributionAnnualMaximum.defaultValue` **Changed** (Breaking ⚠️)
    - `contribution.choices` **Changed** (Breaking ⚠️)
    - `contribution.defaultValue` **Changed** (Breaking ⚠️)
    - `coverageAmount.choices` **Changed** (Breaking ⚠️)
    - `coverageAmount.defaultValue` **Changed** (Breaking ⚠️)
    - `coverageSalaryMultiplier.choices` **Changed** (Breaking ⚠️)
    - `coverageSalaryMultiplier.defaultValue` **Changed** (Breaking ⚠️)
    - `deductAsPercentage.choices` **Changed** (Breaking ⚠️)
    - `deductAsPercentage.defaultValue` **Changed** (Breaking ⚠️)
    - `employeeDeduction.defaultValue` **Changed** (Breaking ⚠️)
    - `limitOption.choices` **Changed** (Breaking ⚠️)
    - `limitOption.defaultValue` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.companyBenefits.updateEmployeeBenefits()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `employeeBenefitBulkUpdateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `additionalProperties` **Added**
    - `retirementLoanIdentifier` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.companyBenefits.getSummary()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.employees` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.payrolls.get()`:  `response.withholdingPayPeriod` **Changed** (Breaking ⚠️)
* `gustoembedded.webhooks.createSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.listSubscriptions()`:  `response.[].subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.updateSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.getSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.verify()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.payrolls.list()`:  `response.[].withholdingPayPeriod` **Changed** (Breaking ⚠️)
* `gustoembedded.companyBenefits.getSupported()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Removed** (Breaking ⚠️)
* `gustoembedded.companyBenefits.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.create()`: `response.policyType` **Changed** (Breaking ⚠️)
    - `enum(bereavement)` **Added** (Breaking ⚠️)
    - `enum(custom)` **Added** (Breaking ⚠️)
    - `enum(floatingHoliday)` **Added** (Breaking ⚠️)
    - `enum(juryDuty)` **Added** (Breaking ⚠️)
    - `enum(learningAndDevelopment)` **Added** (Breaking ⚠️)
    - `enum(parentalLeave)` **Added** (Breaking ⚠️)
    - `enum(personalDay)` **Added** (Breaking ⚠️)
    - `enum(volunteer)` **Added** (Breaking ⚠️)
    - `enum(weather)` **Added** (Breaking ⚠️)
* `gustoembedded.payrolls.prepare()`:  `response.withholdingPayPeriod` **Changed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.get()`: `response.policyType` **Changed** (Breaking ⚠️)
    - `enum(bereavement)` **Added** (Breaking ⚠️)
    - `enum(custom)` **Added** (Breaking ⚠️)
    - `enum(floatingHoliday)` **Added** (Breaking ⚠️)
    - `enum(juryDuty)` **Added** (Breaking ⚠️)
    - `enum(learningAndDevelopment)` **Added** (Breaking ⚠️)
    - `enum(parentalLeave)` **Added** (Breaking ⚠️)
    - `enum(personalDay)` **Added** (Breaking ⚠️)
    - `enum(volunteer)` **Added** (Breaking ⚠️)
    - `enum(weather)` **Added** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.update()`: `response.policyType` **Changed** (Breaking ⚠️)
    - `enum(bereavement)` **Added** (Breaking ⚠️)
    - `enum(custom)` **Added** (Breaking ⚠️)
    - `enum(floatingHoliday)` **Added** (Breaking ⚠️)
    - `enum(juryDuty)` **Added** (Breaking ⚠️)
    - `enum(learningAndDevelopment)` **Added** (Breaking ⚠️)
    - `enum(parentalLeave)` **Added** (Breaking ⚠️)
    - `enum(personalDay)` **Added** (Breaking ⚠️)
    - `enum(volunteer)` **Added** (Breaking ⚠️)
    - `enum(weather)` **Added** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.getAll()`: `response.[].policyType` **Changed** (Breaking ⚠️)
    - `enum(bereavement)` **Added** (Breaking ⚠️)
    - `enum(custom)` **Added** (Breaking ⚠️)
    - `enum(floatingHoliday)` **Added** (Breaking ⚠️)
    - `enum(juryDuty)` **Added** (Breaking ⚠️)
    - `enum(learningAndDevelopment)` **Added** (Breaking ⚠️)
    - `enum(parentalLeave)` **Added** (Breaking ⚠️)
    - `enum(personalDay)` **Added** (Breaking ⚠️)
    - `enum(volunteer)` **Added** (Breaking ⚠️)
    - `enum(weather)` **Added** (Breaking ⚠️)
* `gustoembedded.payrolls.update()`:  `response.withholdingPayPeriod` **Changed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.addEmployees()`: `response.policyType` **Changed** (Breaking ⚠️)
    - `enum(bereavement)` **Added** (Breaking ⚠️)
    - `enum(custom)` **Added** (Breaking ⚠️)
    - `enum(floatingHoliday)` **Added** (Breaking ⚠️)
    - `enum(juryDuty)` **Added** (Breaking ⚠️)
    - `enum(learningAndDevelopment)` **Added** (Breaking ⚠️)
    - `enum(parentalLeave)` **Added** (Breaking ⚠️)
    - `enum(personalDay)` **Added** (Breaking ⚠️)
    - `enum(volunteer)` **Added** (Breaking ⚠️)
    - `enum(weather)` **Added** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.removeEmployees()`: `response.policyType` **Changed** (Breaking ⚠️)
    - `enum(bereavement)` **Added** (Breaking ⚠️)
    - `enum(custom)` **Added** (Breaking ⚠️)
    - `enum(floatingHoliday)` **Added** (Breaking ⚠️)
    - `enum(juryDuty)` **Added** (Breaking ⚠️)
    - `enum(learningAndDevelopment)` **Added** (Breaking ⚠️)
    - `enum(parentalLeave)` **Added** (Breaking ⚠️)
    - `enum(personalDay)` **Added** (Breaking ⚠️)
    - `enum(volunteer)` **Added** (Breaking ⚠️)
    - `enum(weather)` **Added** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.updateBalance()`: `response.policyType` **Changed** (Breaking ⚠️)
    - `enum(bereavement)` **Added** (Breaking ⚠️)
    - `enum(custom)` **Added** (Breaking ⚠️)
    - `enum(floatingHoliday)` **Added** (Breaking ⚠️)
    - `enum(juryDuty)` **Added** (Breaking ⚠️)
    - `enum(learningAndDevelopment)` **Added** (Breaking ⚠️)
    - `enum(parentalLeave)` **Added** (Breaking ⚠️)
    - `enum(personalDay)` **Added** (Breaking ⚠️)
    - `enum(volunteer)` **Added** (Breaking ⚠️)
    - `enum(weather)` **Added** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.deactivate()`: `response.policyType` **Changed** (Breaking ⚠️)
    - `enum(bereavement)` **Added** (Breaking ⚠️)
    - `enum(custom)` **Added** (Breaking ⚠️)
    - `enum(floatingHoliday)` **Added** (Breaking ⚠️)
    - `enum(juryDuty)` **Added** (Breaking ⚠️)
    - `enum(learningAndDevelopment)` **Added** (Breaking ⚠️)
    - `enum(parentalLeave)` **Added** (Breaking ⚠️)
    - `enum(personalDay)` **Added** (Breaking ⚠️)
    - `enum(volunteer)` **Added** (Breaking ⚠️)
    - `enum(weather)` **Added** (Breaking ⚠️)
* `gustoembedded.companyBenefits.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `companyBenefitCreateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companyBenefits.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[422]` **Removed** (Breaking ⚠️)
* `gustoembedded.companyBenefits.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `companyBenefitUpdateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companyAttachments.getList()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[]` **Changed**
    - `category` **Changed**
    - `name` **Changed**
    - `uploadTime` **Changed**
    - `uuid` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.list()`: 
  *  `request.include` **Added**
  * `response.[]` **Changed**
    - `memberPortalInvitationStatus` **Added**
    - `partnerPortalInvitationSent` **Added**
* `gustoembedded.contractors.update()`: `response` **Changed**
    - `memberPortalInvitationStatus` **Added**
    - `partnerPortalInvitationSent` **Added**
* `gustoembedded.companies.update()`: `response.compensations` **Changed**
    - `fixed[].uuid` **Added**
    - `hourly[].uuid` **Added**
    - `paidTimeOff[].uuid` **Added**
* `gustoembedded.contractors.get()`: 
  *  `request.include` **Added**
  * `response` **Changed**
    - `memberPortalInvitationStatus` **Added**
    - `partnerPortalInvitationSent` **Added**
* `gustoembedded.companies.get()`: `response.compensations` **Changed**
    - `fixed[].uuid` **Added**
    - `hourly[].uuid` **Added**
    - `paidTimeOff[].uuid` **Added**
* `gustoembedded.companyBenefits.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.create()`: `response` **Changed**
    - `memberPortalInvitationStatus` **Added**
    - `partnerPortalInvitationSent` **Added**
* `gustoembedded.companyBenefits.getV1CompanyBenefitsCompanyBenefitIdContributionExclusions()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.jobsAndCompensations.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companyBenefits.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.jobsAndCompensations.getJob()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.getDocumentOptions()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.jobsAndCompensations.getJobs()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.getAuthorization()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.signatories.invite()`: 
  *  `request.signatoryInviteRequest.middleInitial` **Added**
* `gustoembedded.signatories.update()`: 
  *  `request.signatoryUpdateRequest.middleInitial` **Added**
* `gustoembedded.signatories.create()`: 
  *  `request.signatoryCreateRequest.middleInitial` **Added**
* `gustoembedded.companyAttachment.getDownloadUrl()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.deleteDocument()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.employeeEmployments.createRehire()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.taxRequirements.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.requirementSets[].requirements[].editable` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.companyAttachments.getDetails()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `category` **Changed**
    - `name` **Changed**
    - `uploadTime` **Changed**
    - `uuid` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.taxRequirements.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[]` **Changed**
    - `defaultRatesApplied` **Added**
    - `readyToRunPayroll` **Added**
    - `setupComplete` **Changed**
    - `setupStatus` **Added**
    - `state` **Changed**
  *  `error.status[404]` **Added**
