## Typescript SDK Changes:
* `gustoembedded.webhooks.getSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.verify()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
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
* `gustoembedded.webhooks.createSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.listSubscriptions()`:  `response.[].subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.webhooks.updateSubscription()`:  `response.subscriptionTypes[].enum(payrollSync)` **Added** (Breaking ⚠️)
* `gustoembedded.paySchedules.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `response.[]` **Changed** (Breaking ⚠️)
    - `anchorEndOfPayPeriod` **Changed** (Breaking ⚠️)
    - `anchorPayDate` **Changed** (Breaking ⚠️)
    - `autoPayrollEnablementBlockers` **Added**
    - `autoPayroll` **Added**
    - `version` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.employerSign()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationEmployerSignRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
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
* `gustoembedded.i9Verification.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `i9AuthorizationRequestBody` **Added** (Breaking ⚠️)
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
* `gustoembedded.i9Verification.getDocuments()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.[].expirationDate` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.getDocumentOptions()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.i9Verification.deleteDocument()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.i9Verification.getAuthorization()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
