## Typescript SDK Changes:
* `gustoembedded.i9Verification.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.webhooks.listSubscriptions()`:  `response.[].subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.taxRequirements.updateState()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `requestBody.requirementSets[].key` **Changed** (Breaking ⚠️)
    - `requestBody.requirementSets[].requirements[].key` **Changed** (Breaking ⚠️)
    - `requestBody.requirementSets[].requirements[].value` **Changed** (Breaking ⚠️)
    - `requestBody.requirementSets[].state` **Changed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.federalTaxDetails.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `federalTaxDetailsUpdate` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
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
* `gustoembedded.jobsAndCompensations.createJob()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `jobsCreateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.employerSign()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationEmployerSignRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
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
* `gustoembedded.jobsAndCompensations.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `jobsUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.getDocuments()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.[].expirationDate` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.webhooks.createSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.verify()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.updateSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.getSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.i9Verification.getDocumentOptions()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.getAuthorization()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companies.get()`: `response.compensations` **Changed**
    - `fixed[].uuid` **Added**
    - `hourly[].uuid` **Added**
    - `paidTimeOff[].uuid` **Added**
* `gustoembedded.jobsAndCompensations.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.companies.update()`: `response.compensations` **Changed**
    - `fixed[].uuid` **Added**
    - `hourly[].uuid` **Added**
    - `paidTimeOff[].uuid` **Added**
* `gustoembedded.jobsAndCompensations.getJob()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.deleteDocument()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.jobsAndCompensations.getJobs()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.taxRequirements.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.requirementSets[].requirements[].editable` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.federalTaxDetails.get()`: 
  *  `request.xGustoApiVersion` **Changed**
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
