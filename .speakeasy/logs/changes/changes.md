## Typescript SDK Changes:
* `gustoembedded.employees.list()`:  `response.[].customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.updateTermination()`: 
  * `request` **Changed**
    - `requestBody.runTerminationPayroll` **Changed**
    - `xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.employeeEmployments.deleteTermination()`: 
  *  `request.xGustoApiVersion` **Changed**
  * `errors[]` **Changed** (Breaking ⚠️)
    - `errors` **Removed** (Breaking ⚠️)
    - `metadata` **Removed** (Breaking ⚠️)
* `gustoembedded.departments.removePeople()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentPeopleRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.departments.addPeople()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentPeopleRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[422]` **Added**
* `gustoembedded.departments.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentUpdateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  * `error` **Changed**
    - `` **Added**
    - `status[409]` **Added**
* `gustoembedded.departments.create()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `departmentCreateRequestBody` **Added** (Breaking ⚠️)
    - `requestBody` **Removed** (Breaking ⚠️)
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.historicalEmployees.update()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.getCustomFields()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.customFields[].description` **Changed** (Breaking ⚠️)
  *  `error.status[404]` **Added**
* `gustoembedded.employees.update()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.get()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.createHistorical()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.employees.create()`:  `response.customFields[].description` **Changed** (Breaking ⚠️)
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequestsPreview()`: **Added**
* `gustoembedded.contractorPayments.getV1ContractorPaymentsContractorPaymentIdPdf()`: **Added**
* `gustoembedded.companies.getCustomFields()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidApprove()`: **Added**
* `gustoembedded.timeOffRequests.deleteV1TimeOffRequestsTimeOffRequestUuid()`: **Added**
* `gustoembedded.timeOffRequests.getV1TimeOffRequestsTimeOffRequestUuid()`: **Added**
* `gustoembedded.employeeEmployments.getV1TerminationsEmployeeId()`: **Added**
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequests()`: **Added**
* `gustoembedded.timeOffRequests.getV1CompaniesCompanyUuidTimeOffRequests()`: **Added**
* `gustoembedded.timeOffRequests.getV1CompaniesCompanyUuidTimeOffBalances()`: **Added**
* `gustoembedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffAdminApprovedRequests()`: **Added**
* `gustoembedded.departments.getAll()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.departments.get()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidDecline()`: **Added**
* `gustoembedded.departments.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.deleteV1ContractorsContractorUuidTermination()`: **Added**
* `gustoembedded.contractors.postV1ContractorsContractorUuidTermination()`: **Added**
* `gustoembedded.employeeEmployments.createTermination()`: 
  * `request` **Changed**
    - `requestBody.runTerminationPayroll` **Changed**
    - `xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.employeeEmployments.getTerminations()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `error.status[404]` **Added**
* `gustoembedded.contractors.deleteV1ContractorsContractorUuidRehire()`: **Added**
* `gustoembedded.contractors.postV1ContractorsContractorUuidRehire()`: **Added**
* `gustoembedded.earningTypes.create()`: 
  * `request` **Changed**
    - `requestBody.name` **Changed**
    - `xGustoApiVersion` **Changed**
  *  `response.active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.list()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.default[].active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.update()`: 
  *  `request.xGustoApiVersion` **Changed**
  *  `response.active` **Added**
  *  `error.status[404]` **Added**
* `gustoembedded.earningTypes.delete()`: 
  *  `request.xGustoApiVersion` **Changed**
* `gustoembedded.payrolls.get()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
* `gustoembedded.payrolls.update()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
* `gustoembedded.payrolls.prepare()`:  `response.employeeCompensations[].deductions[].updatableViaPayroll` **Added**
