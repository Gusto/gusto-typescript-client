## Typescript SDK Changes:
* `gustoembedded.companies.putV1PartnerManagedCompaniesCompanyUuidDisassociate()`: **Added**
* `gustoembedded.reverseWireTransactions.getReverseWireTransactions()`: **Added**
* `gustoembedded.taxPayments.getTaxPayments()`: **Added**
* `gustoembedded.taxPayments.getTaxPayment()`: **Added**
* `gustoembedded.companies.suspensions.suspend()`: 
  * `request.requestBody.leavingFor` **Changed**
    - `enum(otherPeo)` **Added**
    - `enum(toast)` **Added**
* `gustoembedded.reports.postV1BulkReports()`: 
  * `request.bulkReportBody.batch[].union(custom_report).columns[]` **Changed**
    - `enum(additionalEarnings)` **Added**
    - `enum(employeeStateIncomeTax)` **Added**
* `gustoembedded.reports.createCustom()`: 
  * `request.createReportBody.columns[]` **Changed**
    - `enum(additionalEarnings)` **Added**
    - `enum(employeeStateIncomeTax)` **Added**
* `gustoembedded.taxRequirements.get()`: `response.requirementSets[].requirements[]` **Changed**
    - `defaultValueApplied` **Added**
    - `payrollBlocking` **Added**
* `gustoembedded.jobsAndCompensations.getJob()`:  `response.location.warnings` **Added**
* `gustoembedded.jobsAndCompensations.update()`:  `response.location.warnings` **Added**
* `gustoembedded.jobsAndCompensations.getJobs()`:  `response.[].location.warnings` **Added**
* `gustoembedded.jobsAndCompensations.createJob()`:  `response.location.warnings` **Added**
* `gustoembedded.contractors.getAddress()`:  `response.warnings` **Added**
* `gustoembedded.contractors.updateAddress()`:  `response.warnings` **Added**
* `gustoembedded.contractors.get()`:  `response.workEmail` **Added**
* `gustoembedded.contractors.update()`: 
  *  `request.contractorUpdateRequestBody.workEmail` **Added**
  *  `response.workEmail` **Added**
* `gustoembedded.contractors.list()`:  `response.[].workEmail` **Added**
* `gustoembedded.contractors.create()`: 
  *  `request.contractorCreateRequestBody.workEmail` **Added**
  *  `response.workEmail` **Added**
* `gustoembedded.contractorPaymentGroups.patchV1ContractorPaymentGroupsIdPartnerDisbursements()`: 
  * `request.requestBody.disbursements[].paymentMethod` **Changed**
    - `enum(correctionPayment)` **Added**
    - `enum(historicalPayment)` **Added**
* `gustoembedded.employees.get()`:  `response.jobs[].location.warnings` **Added**
* `gustoembedded.employees.update()`:  `response.jobs[].location.warnings` **Added**
* `gustoembedded.employees.list()`:  `response.[].jobs[].location.warnings` **Added**
* `gustoembedded.employees.create()`:  `response.jobs[].location.warnings` **Added**
* `gustoembedded.employees.createHistorical()`:  `response.jobs[].location.warnings` **Added**
* `gustoembedded.payrolls.getReceipt()`: `request` **Changed**
    - `page` **Added**
    - `per` **Added**
* `gustoembedded.payrolls.skip()`:  `error.status[409]` **Added**
* `gustoembedded.historicalEmployees.update()`:  `response.jobs[].location.warnings` **Added**
* `gustoembedded.employeeAddresses.get()`:  `response.[].warnings` **Added**
* `gustoembedded.employeeAddresses.create()`:  `response.warnings` **Added**
* `gustoembedded.employeeAddresses.retrieveHomeAddress()`:  `response.warnings` **Added**
* `gustoembedded.employeeAddresses.update()`:  `response.warnings` **Added**
* `gustoembedded.locations.retrieve()`:  `response.warnings` **Added**
* `gustoembedded.locations.update()`:  `response.warnings` **Added**
* `gustoembedded.locations.get()`:  `response.[].warnings` **Added**
* `gustoembedded.locations.create()`:  `response.warnings` **Added**
