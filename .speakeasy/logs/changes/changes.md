## Typescript SDK Changes:
* `gustoembedded.payrolls.get()`: 
  *  `request.sortBy` **Changed** (Breaking ⚠️)
* `gustoembedded.companyForms.getAll()`: 
  *  `request.sortBy` **Changed** (Breaking ⚠️)
* `gustoembedded.companies.get()`: `response.fundingType` **Changed** (Breaking ⚠️)
    - `enum(brex)` **Removed** (Breaking ⚠️)
    - `enum(lineOfCredit)` **Added** (Breaking ⚠️)
    - `enum(partnerDisbursement)` **Added** (Breaking ⚠️)
    - `enum(rtp)` **Added** (Breaking ⚠️)
* `gustoembedded.companies.update()`: `response.fundingType` **Changed** (Breaking ⚠️)
    - `enum(brex)` **Removed** (Breaking ⚠️)
    - `enum(lineOfCredit)` **Added** (Breaking ⚠️)
    - `enum(partnerDisbursement)` **Added** (Breaking ⚠️)
    - `enum(rtp)` **Added** (Breaking ⚠️)
* `gustoembedded.payrolls.prepare()`: 
  *  `request.sortBy` **Changed** (Breaking ⚠️)
* `gustoembedded.contractorPayments.getV1ContractorPaymentsContractorPaymentIdPdf()`:  `error.status[404]` **Added**
* `gustoembedded.reports.createCustom()`: 
  * `request.createReportBody.columns[]` **Changed**
    - `enum(employeeUuid)` **Added**
    - `enum(payrollUuid)` **Added**
* `gustoembedded.employeeTaxSetup.updateStateTaxes()`:  `response.[].uuid` **Added**
* `gustoembedded.employeePaymentMethod.deleteBankAccount()`: `error` **Changed**
    - `` **Added**
* `gustoembedded.earningTypes.delete()`:  `error.status[404]` **Added**
* `gustoembedded.externalPayrolls.finalizeTaxLiabilities()`: `error` **Changed**
    - `` **Added**
* `gustoembedded.externalPayrolls.delete()`: `error` **Changed**
    - `` **Added**
* `gustoembedded.payrollDigests.postV1PayrollDigests()`: **Added**
* `gustoembedded.payrollDigests.getV1PayrollDigestsPayrollDigestUuid()`: **Added**
* `gustoembedded.employeeTaxSetup.getStateTaxes()`:  `response.[].uuid` **Added**
* `gustoembedded.companyBenefits.delete()`: `error` **Changed**
    - `` **Added**
* `gustoembedded.companyBenefits.getEmployeeBenefits()`:  `response.[].deductionReducesTaxableIncome` **Changed**
* `gustoembedded.companyBenefits.updateEmployeeBenefits()`: 
  *  `request.employeeBenefitBulkUpdateRequest.employeeBenefits[].deductionReducesTaxableIncome` **Changed**
  *  `response.[].deductionReducesTaxableIncome` **Changed**
* `gustoembedded.employeeBenefits.get()`:  `response.[].deductionReducesTaxableIncome` **Changed**
* `gustoembedded.employeeBenefits.create()`:  `response.deductionReducesTaxableIncome` **Changed**
* `gustoembedded.employeeBenefits.retrieve()`:  `response.deductionReducesTaxableIncome` **Changed**
* `gustoembedded.employeeBenefits.update()`: 
  *  `request.employeeBenefitUpdateRequest.deductionReducesTaxableIncome` **Changed**
  *  `response.deductionReducesTaxableIncome` **Changed**
* `gustoembedded.employeeBenefits.delete()`: `error` **Changed**
    - `` **Added**
* `gustoembedded.informationRequests.getInformationRequests()`: 
  *  `request.sortBy` **Added**
* `gustoembedded.timeOffRequests.deleteV1TimeOffRequestsTimeOffRequestUuid()`: `error` **Changed**
    - `` **Added**
