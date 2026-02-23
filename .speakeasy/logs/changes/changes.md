## Typescript SDK Changes:
* `gustoembedded.payrolls.getPayStub()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.i9Verification.getAuthorization()`: `response` **Changed** (Breaking ⚠️)
    - `additionalInfo` **Changed** (Breaking ⚠️)
    - `altProcedure` **Changed** (Breaking ⚠️)
    - `country` **Changed** (Breaking ⚠️)
    - `documentType` **Changed** (Breaking ⚠️)
    - `expirationDate` **Changed** (Breaking ⚠️)
    - `formUuid` **Changed** (Breaking ⚠️)
    - `hasDocumentNumber` **Changed** (Breaking ⚠️)
* `gustoembedded.companies.suspensions.get()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.industrySelection.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.industrySelection.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `companyIndustrySelectionRequiredBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.flows.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `createFlowRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.locations.retrieve()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.locations.update()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.locations.getMinimumWages()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.bankAccounts.get()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.bankAccounts.create()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.bankAccounts.deleteV1CompaniesCompanyIdBankAccountsBankAccountId()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.list()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.create()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.get()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.update()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.delete()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.getOnboardingStatus()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employees.updateOnboardingStatus()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.getHistory()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.get()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.peopleBatches.getV1PeopleBatchesPeopleBatchUuid()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.create()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.retrieveHomeAddress()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.update()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.delete()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.getWorkAddresses()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.createWorkAddress()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.retrieveWorkAddress()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.updateWorkAddress()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeAddresses.deleteWorkAddress()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.getV1CompaniesCompanyIdPayrollsIdPartnerDisbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.peopleBatches.postV1CompaniesCompanyIdPeopleBatches()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.reimbursements.deleteV1RecurringReimbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeTaxSetup.getStateTaxes()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeTaxSetup.updateStateTaxes()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.reimbursements.putV1RecurringReimbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.reimbursements.getV1RecurringReimbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.reimbursements.postV1EmployeesEmployeeIdRecurringReimbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.reimbursements.getV1EmployeesEmployeeIdRecurringReimbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.salaryEstimates.postV1SalaryEstimatesUuidAccept()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractors.getV1CompaniesCompanyIdContractorsPaymentDetails()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.list()`: 
  * `response.[].creditBlockers[].unblockOptions[]` **Changed**
    - `union(submit_bank_screenshot).metadata.bankAccountLastFourDigits` **Added**
    - `union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Added**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.createOffCycle()`: 
  *  `request.requestBody.employeeUuids` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.get()`: 
  * `response.creditBlockers[].unblockOptions[]` **Changed**
    - `union(submit_bank_screenshot).metadata.bankAccountLastFourDigits` **Added**
    - `union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Added**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.update()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.delete()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.prepare()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody.employeeUuids` **Changed**
    - `sortBy` **Changed**
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.payrolls.getReceipt()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.salaryEstimates.putV1SalaryEstimatesId()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.calculateGrossUp()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `payrollGrossUpRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  * `error` **Changed** (Breaking ⚠️)
    - `` **Added**
* `gustoembedded.payrolls.calculate()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  * `error` **Changed** (Breaking ⚠️)
    - `` **Added**
* `gustoembedded.payrolls.submit()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody.submissionBlockers[].blockerType` **Changed** (Breaking ⚠️)
    - `requestBody.submissionBlockers[].selectedOption` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  * `error` **Changed** (Breaking ⚠️)
    - `` **Added**
* `gustoembedded.payrolls.cancel()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  * `response` **Changed** (Breaking ⚠️)
    - `companyTaxes` **Removed** (Breaking ⚠️)
    - `creditBlockers` **Removed** (Breaking ⚠️)
    - `finalTerminationPayroll` **Removed** (Breaking ⚠️)
    - `fixedWithholdingRate` **Removed** (Breaking ⚠️)
    - `paymentSpeedChanged` **Removed** (Breaking ⚠️)
    - `payrollStatusMeta` **Removed** (Breaking ⚠️)
    - `payrollTaxes` **Removed** (Breaking ⚠️)
    - `processingRequest` **Removed** (Breaking ⚠️)
    - `skipRegularDeductions` **Removed** (Breaking ⚠️)
    - `submissionBlockers` **Removed** (Breaking ⚠️)
    - `totals` **Removed** (Breaking ⚠️)
    - `withholdingPayPeriod` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.companies.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  *  `response.locations[].active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.companies.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  *  `response.locations[].active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.salaryEstimates.getV1SalaryEstimatesId()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.patchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.calculateAccruingTimeOffHours()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `payrollCalculateAccruingTimeOffHoursRequest` **Added**
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffPolicies.get()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.update()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.getAll()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.create()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.addEmployees()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.removeEmployees()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.updateBalance()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.timeOffPolicies.deactivate()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPayments.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `contractorPaymentBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.contractorPayments.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.contractorPayments.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.contractorPayments.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Added**
    - `enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.contractorPaymentGroups.getList()`: 
  * `response.[].creditBlockers[].unblockOptions[]` **Changed**
    - `union(submit_bank_screenshot).metadata.bankAccountLastFourDigits` **Added**
    - `union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Added**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.create()`: 
  * `response.creditBlockers[].unblockOptions[]` **Changed**
    - `union(submit_bank_screenshot).metadata.bankAccountLastFourDigits` **Added**
    - `union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Added**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.preview()`: 
  * `response.creditBlockers[].unblockOptions[]` **Changed**
    - `union(submit_bank_screenshot).metadata.bankAccountLastFourDigits` **Added**
    - `union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Added**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.get()`: 
  * `response.creditBlockers[].unblockOptions[]` **Changed**
    - `union(submit_bank_screenshot).metadata.bankAccountLastFourDigits` **Added**
    - `union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Added**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.delete()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.fund()`: 
  * `response.creditBlockers[].unblockOptions[]` **Changed**
    - `union(submit_bank_screenshot).metadata.bankAccountLastFourDigits` **Added**
    - `union(wait_for_reverse_wire).metadata.bankAccountLastFourDigits` **Added**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.getV1ContractorPaymentGroupsIdPartnerDisbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPaymentGroups.patchV1ContractorPaymentGroupsIdPartnerDisbursements()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.salaryEstimates.postV1EmployeesEmployeeIdSalaryEstimates()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.reports.postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.companyBenefits.get()`: `response.employeeBenefits[]` **Changed** (Breaking ⚠️)
    - `action` **Removed** (Breaking ⚠️)
    - `uuid` **Removed** (Breaking ⚠️)
* `gustoembedded.companyBenefits.delete()`: `error` **Changed** (Breaking ⚠️)
    - `errors` **Changed** (Breaking ⚠️)
    - `httpMeta` **Removed** (Breaking ⚠️)
* `gustoembedded.events.get()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `sortOrder` **Changed**
    - `xGustoApiVersion.enum(20240401)` **Added**
    - `xGustoApiVersion.enum(20250615)` **Removed** (Breaking ⚠️)
  *  `error.status[422]` **Added**
* `gustoembedded.companyBenefits.getRequirements()`:  `response.employeeDeduction.choices` **Changed** (Breaking ⚠️)
* `gustoembedded.holidayPayPolicies.removeEmployees()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatuses()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeBenefits.postV1EmployeesEmployeeUuidSection603HighEarnerStatuses()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeBenefits.patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.payrolls.getPayStubs()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.i9Verification.update()`: `response` **Changed** (Breaking ⚠️)
    - `additionalInfo` **Changed** (Breaking ⚠️)
    - `altProcedure` **Changed** (Breaking ⚠️)
    - `country` **Changed** (Breaking ⚠️)
    - `documentType` **Changed** (Breaking ⚠️)
    - `expirationDate` **Changed** (Breaking ⚠️)
    - `formUuid` **Changed** (Breaking ⚠️)
    - `hasDocumentNumber` **Changed** (Breaking ⚠️)
* `gustoembedded.i9Verification.employerSign()`: `response` **Changed** (Breaking ⚠️)
    - `additionalInfo` **Changed** (Breaking ⚠️)
    - `altProcedure` **Changed** (Breaking ⚠️)
    - `country` **Changed** (Breaking ⚠️)
    - `documentType` **Changed** (Breaking ⚠️)
    - `expirationDate` **Changed** (Breaking ⚠️)
    - `formUuid` **Changed** (Breaking ⚠️)
    - `hasDocumentNumber` **Changed** (Breaking ⚠️)
* `gustoembedded.holidayPayPolicies.get()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.holidayPayPolicies.create()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.holidayPayPolicies.update()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.holidayPayPolicies.delete()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.holidayPayPolicies.addEmployees()`: `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.deleteRehire()`:  `error.status[422]` **Added**
* `gustoembedded.companyBenefits.updateEmployeeBenefits()`: 
  * `request.requestBody.employeeBenefits[]` **Changed**
    - `action` **Added**
    - `uuid` **Added**
* `gustoembedded.reports.createCustom()`: 
  *  `request.requestBody.employeeUuids` **Changed**
* `gustoembedded.externalPayrolls.delete()`:  `error.status[422]` **Added**
* `gustoembedded.payrolls.skip()`: 
  *  `request.requestBody.employeeUuids` **Changed**
* `gustoembedded.jobsAndCompensations.deleteCompensation()`:  `error.status[422]` **Added**
* `gustoembedded.contractors.updateOnboardingStatus()`: 
  * `request.requestBody.onboardingStatus` **Changed**
    - `enum(adminOnboardingIncomplete)` **Added**
    - `enum(adminOnboardingReview)` **Added**
    - `enum(selfOnboardingInvited)` **Added**
    - `enum(selfOnboardingNotInvited)` **Added**
    - `enum(selfOnboardingReview)` **Added**
    - `enum(selfOnboardingStarted)` **Added**
* `gustoembedded.employeeBenefits.delete()`:  `error.status[422]` **Added**
* `gustoembedded.jobsAndCompensations.delete()`:  `error.status[422]` **Added**
* `gustoembedded.employeePaymentMethod.deleteBankAccount()`:  `error.status[422]` **Added**
* `gustoembedded.employeeTaxSetup.updateFederalTaxes()`: 
  *  `request.requestBody.twoJobs` **Changed**
* `gustoembedded.contractors.delete()`:  `error.status[422]` **Added**
* `gustoembedded.signatories.delete()`:  `error.status[422]` **Added**
