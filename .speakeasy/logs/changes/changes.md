## Typescript SDK Changes:
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
* `gustoembedded.payrollDigests.postV1PayrollDigests()`: **Added**
* `gustoembedded.payrollDigests.getV1PayrollDigestsPayrollDigestUuid()`: **Added**
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
