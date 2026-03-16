## Typescript SDK Changes:
* `gustoembedded.employeeTaxSetup.updateFederalTaxes()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody.additionalWithholding` **Changed** (Breaking ⚠️)
    - `requestBody.deductions` **Changed** (Breaking ⚠️)
    - `requestBody.dependentsAmount` **Changed** (Breaking ⚠️)
    - `requestBody.extraWithholding` **Changed** (Breaking ⚠️)
    - `requestBody.filingStatus` **Changed** (Breaking ⚠️)
    - `requestBody.otherIncome` **Changed** (Breaking ⚠️)
    - `requestBody.twoJobs` **Changed** (Breaking ⚠️)
    - `requestBody.w4DataType` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `union(pre_2020_w4).companyId` **Added**
    - `union(pre_2020_w4).employeeId` **Added**
    - `union(rev_2020_w4).companyId` **Added**
    - `union(rev_2020_w4).employeeId` **Added**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.jobsAndCompensations.updateCompensation()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `compensationsUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response.title` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.peopleBatches.postV1CompaniesCompanyIdPeopleBatches()`: 
  *  `request.requestBody.batch[].compensation.effectiveDate` **Removed** (Breaking ⚠️)
  * `response` **Changed** (Breaking ⚠️)
    - `batchAction` **Changed**
    - `idempotencyKey` **Changed**
    - `status.enum(partialSuccess)` **Added** (Breaking ⚠️)
    - `uuid` **Changed**
  *  `error.httpMeta` **Removed** (Breaking ⚠️)
* `gustoembedded.signatories.invite()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `signatoryInviteRequest` **Added** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.signatories.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `signatoryUpdateRequest` **Added** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.signatories.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `error` **Changed** (Breaking ⚠️)
    - `` **Added**
    - `status[422]` **Removed** (Breaking ⚠️)
* `gustoembedded.bankAccounts.create()`:  `response.status[200]` **Added** (Breaking ⚠️)
* `gustoembedded.bankAccounts.verify()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `companyBankAccountVerifyRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.paymentConfigs.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.paymentSpeed` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.employeePaymentMethod.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody.splitBy` **Changed**
    - `requestBody.splits[].splitAmount` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.paySchedules.getPayPeriods()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `endDate` **Changed** (Breaking ⚠️)
    - `payrollTypes` **Changed** (Breaking ⚠️)
    - `startDate` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.payrolls.getBlockers()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `key` **Changed** (Breaking ⚠️)
    - `message` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.payrolls.prepare()`: `response.employeeCompensations[]` **Changed** (Breaking ⚠️)
    - `paidTimeOff[].finalPayoutUnusedHoursInput` **Changed** (Breaking ⚠️)
    - `version` **Changed** (Breaking ⚠️)
* `gustoembedded.payrolls.update()`: 
  *  `request.payrollUpdate.employeeCompensations[].paidTimeOff[].finalPayoutUnusedHoursInput` **Changed**
  * `response.employeeCompensations[]` **Changed** (Breaking ⚠️)
    - `paidTimeOff[].finalPayoutUnusedHoursInput` **Changed** (Breaking ⚠️)
    - `version` **Changed** (Breaking ⚠️)
* `gustoembedded.payrolls.get()`: `response.employeeCompensations[]` **Changed** (Breaking ⚠️)
    - `additionalProperties` **Added**
    - `paidTimeOff[].finalPayoutUnusedHoursInput` **Changed** (Breaking ⚠️)
    - `version` **Changed** (Breaking ⚠️)
* `gustoembedded.payrolls.createOffCycle()`: `response.employeeCompensations[]` **Changed** (Breaking ⚠️)
    - `deductions` **Removed** (Breaking ⚠️)
    - `paidTimeOff[].finalPayoutUnusedHoursInput` **Changed** (Breaking ⚠️)
    - `version` **Changed** (Breaking ⚠️)
* `gustoembedded.jobsAndCompensations.createCompensation()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `compensationsRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response.title` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.paymentConfigs.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `paymentConfigsUpdateRequest` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `response.paymentSpeed` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.signatories.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `signatoryCreateRequest` **Added** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeePaymentMethod.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.jobsAndCompensations.deleteCompensation()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.jobsAndCompensations.createJob()`:  `response.compensations[].title` **Added**
* `gustoembedded.employees.update()`:  `response.jobs[].compensations[].title` **Added**
* `gustoembedded.jobsAndCompensations.getJob()`:  `response.compensations[].title` **Added**
* `gustoembedded.jobsAndCompensations.update()`:  `response.compensations[].title` **Added**
* `gustoembedded.jobsAndCompensations.getCompensations()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.[].title` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.jobsAndCompensations.getCompensation()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.title` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeTaxSetup.getFederalTaxes()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `union(pre_2020_w4).companyId` **Added**
    - `union(pre_2020_w4).employeeId` **Added**
    - `union(rev_2020_w4).companyId` **Added**
    - `union(rev_2020_w4).employeeId` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.historicalEmployees.update()`:  `response.jobs[].compensations[].title` **Added**
* `gustoembedded.jobsAndCompensations.getJobs()`:  `response.[].compensations[].title` **Added**
* `gustoembedded.introspection.getInfo()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response` **Changed**
    - `resource.type` **Changed**
    - `resource.uuid` **Changed**
    - `resourceOwner.type` **Changed**
    - `resourceOwner.uuid` **Changed**
    - `scope` **Changed**
* `gustoembedded.employees.get()`:  `response.jobs[].compensations[].title` **Added**
* `gustoembedded.employees.createHistorical()`:  `response.jobs[].compensations[].title` **Added**
* `gustoembedded.employees.create()`:  `response.jobs[].compensations[].title` **Added**
* `gustoembedded.employees.list()`:  `response.[].jobs[].compensations[].title` **Added**
* `gustoembedded.companyBenefits.update()`: 
  * `request.requestBody` **Changed**
    - `responsibleForEmployeeW2` **Added**
    - `responsibleForEmployerTaxes` **Added**
* `gustoembedded.signatories.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.peopleBatches.getV1PeopleBatchesPeopleBatchUuid()`: `response` **Changed**
    - `idempotencyKey` **Changed**
    - `status` **Changed**
    - `uuid` **Changed**
