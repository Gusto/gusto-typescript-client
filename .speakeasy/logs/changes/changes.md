## Typescript SDK Changes:
* `gustoembedded.timeOffPolicies.addEmployees()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.contractorPayments.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.companies.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.companies.getOnboardingStatus()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.companies.finishOnboarding()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.industrySelection.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.industrySelection.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.flows.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.locations.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.locations.get()`: `request` **Changed** (Breaking ⚠️)
    - `page` **Added**
    - `per` **Added**
    - `xGustoApiVersion.enum(20240401)` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion.enum(20250615)` **Added**
* `gustoembedded.peopleBatches.getV1PeopleBatchesPeopleBatchUuid()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
    - `enum(20251115)` **Removed** (Breaking ⚠️)
* `gustoembedded.peopleBatches.postV1CompaniesCompanyIdPeopleBatches()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
    - `enum(20251115)` **Removed** (Breaking ⚠️)
* `gustoembedded.reimbursements.deleteV1RecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.employees.updateOnboardingDocumentsConfig()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.reimbursements.putV1RecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.contractors.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `contractorCreateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `departmentTitle` **Added**
    - `dismissalCancellationEligible` **Added**
    - `rehireCancellationEligible` **Added**
    - `upcomingEmployment` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.list()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `onboardedActive` **Added**
    - `onboarded` **Added**
    - `sortBy` **Changed** (Breaking ⚠️)
    - `terminatedToday` **Added**
    - `terminated` **Added**
    - `xGustoApiVersion` **Changed**
  * `response.[]` **Changed**
    - `departmentTitle` **Added**
    - `dismissalCancellationEligible` **Added**
    - `rehireCancellationEligible` **Added**
    - `upcomingEmployment` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.reimbursements.getV1RecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.contractors.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `contractorUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `departmentTitle` **Added**
    - `dismissalCancellationEligible` **Added**
    - `rehireCancellationEligible` **Added**
    - `upcomingEmployment` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.reimbursements.postV1EmployeesEmployeeIdRecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.payrolls.prepare()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.payrolls.calculateGrossUp()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.payrolls.calculate()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.payrolls.submit()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.payrolls.cancel()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.timeOffPolicies.calculateAccruingTimeOffHours()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.timeOffPolicies.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.timeOffPolicies.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.timeOffPolicies.getAll()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.timeOffPolicies.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.companies.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.introspection.oauthAccessToken()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.salaryEstimates.getV1SalaryEstimatesOccupations()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.timeOffPolicies.deactivate()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.contractorPayments.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.contractorPayments.list()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.timeOffPolicies.removeEmployees()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.contractorPayments.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.reports.postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatuses()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.employeeBenefits.postV1EmployeesEmployeeUuidSection603HighEarnerStatuses()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.employeeBenefits.patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.holidayPayPolicies.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.holidayPayPolicies.create()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.holidayPayPolicies.update()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.holidayPayPolicies.delete()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.holidayPayPolicies.addEmployees()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.holidayPayPolicies.removeEmployees()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.events.get()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.salaryEstimates.postV1EmployeesEmployeeIdSalaryEstimates()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.salaryEstimates.getV1SalaryEstimatesId()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.salaryEstimates.putV1SalaryEstimatesId()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.salaryEstimates.postV1SalaryEstimatesUuidAccept()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.timeOffPolicies.updateBalance()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.reimbursements.getV1EmployeesEmployeeIdRecurringReimbursements()`: 
  * `request.xGustoApiVersion` **Changed** (Breaking ⚠️)
    - `enum(20240401)` **Removed** (Breaking ⚠️)
    - `enum(20250615)` **Added**
* `gustoembedded.contractors.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `departmentTitle` **Added**
    - `dismissalCancellationEligible` **Added**
    - `rehireCancellationEligible` **Added**
    - `upcomingEmployment` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeEmployments.deleteTermination()`:  `error.status[422]` **Added**
* `gustoembedded.employees.create()`: 
  *  `request.requestBody.email` **Changed**
* `gustoembedded.paySchedules.getPreview()`:  `error.status[422]` **Added**
* `gustoembedded.externalPayrolls.calculateTaxes()`:  `error.status[422]` **Added**
