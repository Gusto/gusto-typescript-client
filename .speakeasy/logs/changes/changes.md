## Typescript SDK Changes:
* `gustoembedded.webhooks.listSubscriptions()`:  `response.[].subscriptionTypes[].enum(timeOffRequest)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.verify()`:  `response.subscriptionTypes[].enum(timeOffRequest)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.updateSubscription()`: 
  *  `request.requestBody.subscriptionTypes[].enum(timeOffRequest)` **Added**
  *  `response.subscriptionTypes[].enum(timeOffRequest)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.getSubscription()`:  `response.subscriptionTypes[].enum(timeOffRequest)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.createSubscription()`: 
  *  `request.requestBody.subscriptionTypes[].enum(timeOffRequest)` **Added**
  *  `response.subscriptionTypes[].enum(timeOffRequest)` **Added** (Breaking ⚠️)
* `gustoembedded.contractorPayments.getReceipt()`: **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPayments.get()`: **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPayments.delete()`: **Added**
* `gustoembedded.contractorPayments.getReceipt()`: **Added**
* `gustoembedded.contractorPayments.fund()`: **Added**
* `gustoembedded.memberPortalInvitations.postV1EmployeesEmployeeIdMemberPortalInvitations()`: **Added**
* `gustoembedded.memberPortalInvitations.getV1EmployeesEmployeeIdMemberPortalInvitations()`: **Added**
* `gustoembedded.memberPortalInvitations.deleteV1EmployeesEmployeeIdMemberPortalInvitations()`: **Added**
* `gustoembedded.memberPortalInvitations.postV1ContractorsContractorUuidMemberPortalInvitations()`: **Added**
* `gustoembedded.memberPortalInvitations.getV1ContractorsContractorUuidMemberPortalInvitations()`: **Added**
* `gustoembedded.memberPortalInvitations.deleteV1ContractorsContractorUuidMemberPortalInvitations()`: **Added**
* `gustoembedded.payrollCancellations.postV1PayrollBatches()`: **Added**
* `gustoembedded.payrollCancellations.getV1PayrollBatchesPayrollBatchUuid()`: **Added**
* `gustoembedded.reports.postV1BulkReports()`: **Added**
* `gustoembedded.contractorPayments.fund()`: **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPayments.list()`: **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPayments.create()`: **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPayments.get()`: **Added**
* `gustoembedded.contractorPayments.delete()`: **Removed** (Breaking ⚠️)
* `gustoembedded.contractorPayments.getV1ContractorPaymentsContractorPaymentIdPdf()`: **Removed** (Breaking ⚠️)
* `gustoembedded.federalTaxDetails.update()`:  `error.status[403]` **Added**
* `gustoembedded.paySchedules.getPreview()`: 
  *  `request.payScheduleUuid` **Added**
* `gustoembedded.employees.getOnboardingStatus()`:  `response.blockers` **Added**
* `gustoembedded.employees.updateOnboardingStatus()`:  `response.blockers` **Added**
* `gustoembedded.contractorPayments.create()`: **Added**
* `gustoembedded.contractorPayments.list()`: **Added**
* `gustoembedded.contractorPayments.getV1ContractorPaymentsContractorPaymentIdPdf()`: **Added**
* `gustoembedded.contractorPayments.getV1ContractorsContractorUuidPayments()`: **Added**
* `gustoembedded.reports.getV1BulkReportsRequestUuid()`: **Added**
* `gustoembedded.payrolls.createOffCycle()`:  `response.employeeCompensations[].customWithholdings` **Added**
* `gustoembedded.payrolls.get()`:  `response.employeeCompensations[].customWithholdings` **Added**
* `gustoembedded.payrolls.update()`: 
  *  `request.payrollUpdate.employeeCompensations[].customWithholdings` **Added**
  *  `response.employeeCompensations[].customWithholdings` **Added**
* `gustoembedded.payrolls.prepare()`:  `response.employeeCompensations[].customWithholdings` **Added**
* `gustoembedded.reports.createCustom()`: 
  * `request.createReportBody` **Changed**
    - `dateFilterType` **Added**
    - `groupings` **Changed**
